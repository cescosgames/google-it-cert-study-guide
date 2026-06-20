/* subnet-scripts.js — Subnet Practice Game */

(function () {

  /* ── Subnet math ─────────────────────────────────────── */

  function cidrToMask(prefix) {
    const mask = prefix === 0 ? 0 : (~0 << (32 - prefix)) >>> 0;
    return mask;
  }

  function intToIp(n) {
    return [
      (n >>> 24) & 0xff,
      (n >>> 16) & 0xff,
      (n >>>  8) & 0xff,
       n         & 0xff
    ].join('.');
  }

  function ipToInt(ip) {
    return ip.split('.').reduce((acc, oct) => (acc << 8) + parseInt(oct, 10), 0) >>> 0;
  }

  function generateChallenge() {
    // Restrict prefix to /8–/30 to avoid degenerate cases
    const prefix = Math.floor(Math.random() * 23) + 8; // 8–30
    const maskInt = cidrToMask(prefix);

    // Random host bits to get a realistic-looking host IP (not network or broadcast)
    const hostBits = 32 - prefix;
    const hostCount = (1 << hostBits) >>> 0;

    // Pick a random octet base per class feel
    const firstOctet = [10, 172, 192][Math.floor(Math.random() * 3)];
    let randomIp;
    if (firstOctet === 10) {
      randomIp = (10 << 24) | (rand(0, 255) << 16) | (rand(0, 255) << 8) | rand(1, 254);
    } else if (firstOctet === 172) {
      randomIp = (172 << 24) | (rand(16, 31) << 16) | (rand(0, 255) << 8) | rand(1, 254);
    } else {
      randomIp = (192 << 24) | (168 << 16) | (rand(0, 255) << 8) | rand(1, 254);
    }
    randomIp = randomIp >>> 0;

    const networkInt  = (randomIp & maskInt) >>> 0;
    const broadcastInt = (networkInt | (~maskInt >>> 0)) >>> 0;
    const firstHost   = networkInt + 1;
    const lastHost    = broadcastInt - 1;
    const usableHosts = hostCount - 2;

    return {
      givenIp:       intToIp(randomIp),
      prefix,
      mask:          intToIp(maskInt),
      networkAddr:   intToIp(networkInt),
      broadcastAddr: intToIp(broadcastInt),
      firstHost:     intToIp(firstHost),
      lastHost:      intToIp(lastHost),
      usableHosts,
    };
  }

  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /* ── State ───────────────────────────────────────────── */

  let current = null;
  let streak = 0;
  let totalAttempts = 0;
  let totalCorrect = 0;

  /* ── DOM refs ────────────────────────────────────────── */

  const promptEl    = document.getElementById('subnet-prompt');
  const fields      = {
    mask:      document.getElementById('field-mask'),
    network:   document.getElementById('field-network'),
    broadcast: document.getElementById('field-broadcast'),
    firstHost: document.getElementById('field-first-host'),
    lastHost:  document.getElementById('field-last-host'),
    hosts:     document.getElementById('field-hosts'),
  };
  const feedbackRows = document.querySelectorAll('.feedback-row');
  const resultArea   = document.getElementById('result-area');
  const streakEl     = document.getElementById('streak-count');
  const accuracyEl   = document.getElementById('accuracy');
  const submitBtn    = document.getElementById('btn-submit');
  const nextBtn      = document.getElementById('btn-next');
  const revealBtn    = document.getElementById('btn-reveal');

  /* ── Render ──────────────────────────────────────────── */

  function loadChallenge() {
    current = generateChallenge();
    promptEl.textContent = `${current.givenIp} / ${current.prefix}`;

    // Clear inputs and feedback
    Object.values(fields).forEach(f => {
      f.value = '';
      f.classList.remove('correct', 'incorrect');
    });
    feedbackRows.forEach(r => {
      const icon = r.querySelector('.feedback-icon');
      const correct = r.querySelector('.feedback-correct');
      icon.textContent = '';
      icon.className = 'feedback-icon';
      correct.textContent = '';
      correct.className = 'feedback-correct';
    });

    resultArea.className = 'result-area';
    resultArea.textContent = '';
    submitBtn.style.display = '';
    nextBtn.style.display = 'none';
    revealBtn.style.display = '';
    fields.mask.focus();
  }

  function grade() {
    if (!current) return;

    const answers = {
      mask:      current.mask,
      network:   current.networkAddr,
      broadcast: current.broadcastAddr,
      firstHost: current.firstHost,
      lastHost:  current.lastHost,
      hosts:     String(current.usableHosts),
    };

    let allCorrect = true;

    Object.entries(fields).forEach(([key, input]) => {
      const userVal  = input.value.trim();
      const expected = answers[key];
      const row      = input.closest('.field-row');
      const icon     = row.querySelector('.feedback-icon');
      const correct  = row.querySelector('.feedback-correct');

      const isRight = normalize(userVal) === normalize(expected);

      input.classList.toggle('correct',   isRight);
      input.classList.toggle('incorrect', !isRight);
      icon.textContent = isRight ? '✓' : '✗';
      icon.className   = 'feedback-icon ' + (isRight ? 'ok' : 'bad');

      if (!isRight) {
        correct.textContent = expected;
        allCorrect = false;
      } else {
        correct.textContent = '';
      }
    });

    totalAttempts++;
    if (allCorrect) {
      streak++;
      totalCorrect++;
      resultArea.className = 'result-area success';
      resultArea.textContent = streak > 1 ? `All correct! Streak: ${streak}` : 'All correct!';
    } else {
      streak = 0;
      resultArea.className = 'result-area failure';
      resultArea.textContent = 'Some fields are wrong — see corrections above.';
    }

    updateStats();
    submitBtn.style.display = 'none';
    nextBtn.style.display = '';
    revealBtn.style.display = 'none';
  }

  function reveal() {
    if (!current) return;
    streak = 0;
    Object.entries(fields).forEach(([key, input]) => {
      const answers = {
        mask: current.mask, network: current.networkAddr,
        broadcast: current.broadcastAddr, firstHost: current.firstHost,
        lastHost: current.lastHost, hosts: String(current.usableHosts),
      };
      const row    = input.closest('.field-row');
      const icon   = row.querySelector('.feedback-icon');
      const correct = row.querySelector('.feedback-correct');
      input.classList.remove('correct', 'incorrect');
      icon.textContent = '';
      correct.textContent = answers[key];
      correct.className = 'feedback-correct revealed';
    });
    resultArea.className = 'result-area neutral';
    resultArea.textContent = 'Answers revealed. No points awarded.';
    updateStats();
    submitBtn.style.display = 'none';
    nextBtn.style.display = '';
    revealBtn.style.display = 'none';
  }

  function normalize(val) {
    // Trim whitespace, lowercase, collapse internal spaces
    return val.trim().toLowerCase().replace(/\s+/g, '');
  }

  function updateStats() {
    streakEl.textContent  = streak;
    const pct = totalAttempts === 0 ? '—' : Math.round((totalCorrect / totalAttempts) * 100) + '%';
    accuracyEl.textContent = pct;
  }

  /* ── Event wiring ────────────────────────────────────── */

  submitBtn.addEventListener('click', grade);
  nextBtn.addEventListener('click', loadChallenge);
  revealBtn.addEventListener('click', reveal);

  // Submit on Enter from any field
  Object.values(fields).forEach(f => {
    f.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        if (submitBtn.style.display !== 'none') grade();
        else loadChallenge();
      }
    });
  });

  /* ── Boot ────────────────────────────────────────────── */

  loadChallenge();

})();
