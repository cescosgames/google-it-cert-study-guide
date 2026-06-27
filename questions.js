/* Daily question pool — add objects to this array to grow the bank.
   Fields: q (question), options (4-item array), answer (0-based index),
           explanation (1-2 sentences), course (1 or 2) */

const QUESTIONS = [

  /* ── Course 1 · Technical Support Fundamentals ─────────── */

  {
    q: "RAM is described as \"volatile.\" What does this mean in practice?",
    options: [
      "It runs faster than SSD storage",
      "Its contents are lost when power is removed",
      "It cannot be upgraded after purchase",
      "It draws more power than an NVMe drive"
    ],
    answer: 1,
    explanation: "Volatile means the data disappears at power-off. RAM holds running programs — when power cuts, that data is gone, which is why unsaved work is lost in a crash.",
    course: 1
  },
  {
    q: "A user's PC has 8 GB of RAM but has 16 GB of programs open. What is the OS most likely doing?",
    options: [
      "Refusing to open any new programs",
      "Automatically compressing RAM contents",
      "Using virtual memory (page file/swap) on the slower disk",
      "Allocating GPU VRAM as overflow RAM"
    ],
    answer: 2,
    explanation: "When RAM fills up the OS moves inactive pages to disk (page file on Windows, swap on Linux). Disk is far slower than RAM, causing the heavy slowdowns commonly called thrashing.",
    course: 1
  },
  {
    q: "Which storage interface provides the fastest read/write speeds?",
    options: [
      "2.5\" SATA SSD",
      "M.2 NVMe",
      "3.5\" HDD",
      "M.2 SATA"
    ],
    answer: 1,
    explanation: "M.2 NVMe drives use the PCIe bus and hit 3,000-7,000 MB/s. SATA-based drives (including M.2 SATA) are capped at ~550 MB/s by the SATA interface.",
    course: 1
  },
  {
    q: "What is the purpose of POST at system startup?",
    options: [
      "Loads the OS from the boot device",
      "Runs hardware diagnostics before the OS boots",
      "Initializes the page file on disk",
      "Checks the network connection before the login screen"
    ],
    answer: 1,
    explanation: "Power-On Self Test verifies that critical hardware (CPU, RAM, GPU, storage) is present and working. Failures are often signaled by beep codes before any image appears on screen.",
    course: 1
  },
  {
    q: "How many bits are in 3 bytes?",
    options: ["16", "20", "24", "32"],
    answer: 2,
    explanation: "1 byte = 8 bits. 3 x 8 = 24 bits.",
    course: 1
  },
  {
    q: "A technician opens a desktop without an anti-static wrist strap. What specific risk does this create?",
    options: [
      "Components may overheat during reassembly",
      "Static electricity may silently damage sensitive components",
      "The PSU may discharge stored voltage into the board",
      "Touching RAM causes immediate data loss"
    ],
    answer: 1,
    explanation: "ESD (Electrostatic Discharge) from the human body can damage or destroy a CPU, RAM module, or GPU with no visible sign. Anti-static straps drain that charge safely.",
    course: 1
  },
  {
    q: "What is the role of a device driver?",
    options: [
      "Manages RAM allocation for a specific device",
      "Translates OS commands into hardware-specific instructions",
      "Provides a network connection for peripheral devices",
      "Controls power delivery to USB-connected devices"
    ],
    answer: 1,
    explanation: "Drivers bridge the gap between generic OS calls and the specifics of a piece of hardware. A missing or outdated driver is one of the most common causes of hardware malfunctions.",
    course: 1
  },
  {
    q: "What distinguishes the kernel from regular application software?",
    options: [
      "It provides the graphical user interface",
      "It runs in privileged mode and directly manages hardware resources",
      "It stores all user files and application data",
      "It handles all network communication protocols"
    ],
    answer: 1,
    explanation: "The kernel is the privileged core of the OS. Applications reach it through system calls - they cannot access hardware directly. It is the boundary between software and hardware.",
    course: 1
  },
  {
    q: "What is the key difference between a Type 1 and a Type 2 hypervisor?",
    options: [
      "Type 1 supports more guest operating systems",
      "Type 1 runs directly on bare-metal hardware; Type 2 runs on top of a host OS",
      "Type 2 is only for Windows; Type 1 is cross-platform",
      "Type 1 requires more RAM than Type 2"
    ],
    answer: 1,
    explanation: "Type 1 (bare-metal) hypervisors like VMware ESXi and Hyper-V run directly on hardware for better performance. Type 2 like VirtualBox and VMware Workstation run as applications on an existing OS.",
    course: 1
  },
  {
    q: "What does the GPL license require that the MIT license does not?",
    options: [
      "Attribution in documentation",
      "Source code must remain private",
      "Derivative works must also be released under GPL",
      "Commercial use requires a payment"
    ],
    answer: 2,
    explanation: "GPL is copyleft - any software derived from GPL code must also be open-sourced under GPL. MIT is permissive - you can incorporate it into proprietary products without releasing your own source code.",
    course: 1
  },
  {
    q: "In semantic versioning, what does a MINOR bump (e.g., 2.1.0 to 2.2.0) signify?",
    options: [
      "A bug fix that does not change behavior",
      "A new backwards-compatible feature",
      "A breaking change requiring migration",
      "A security patch only"
    ],
    answer: 1,
    explanation: "MAJOR = breaking change, MINOR = new backwards-compatible feature, PATCH = bug fix. 2.1.0 to 2.2.0 means something new was added that does not break existing users.",
    course: 1
  },
  {
    q: "Which OS uses NTFS as its default filesystem?",
    options: ["macOS", "Ubuntu Linux", "Windows", "Chrome OS"],
    answer: 2,
    explanation: "Windows uses NTFS (New Technology File System). macOS uses APFS, Ubuntu uses ext4, and Chrome OS also uses ext4.",
    course: 1
  },
  {
    q: "What is the functional difference between a hub and a switch?",
    options: [
      "A hub operates at Layer 3; a switch at Layer 2",
      "A switch broadcasts to all ports; a hub forwards to the destination only",
      "A hub broadcasts to all ports; a switch forwards only to the correct port using MAC addresses",
      "They are functionally identical - switches are just newer"
    ],
    answer: 2,
    explanation: "Hubs are Layer 1 and flood every frame to all ports (one shared collision domain). Switches learn MAC addresses and forward frames only to the correct port, giving each port its own collision domain.",
    course: 1
  },
  {
    q: "Which cable category supports 10 Gbps over the full 100-meter standard run?",
    options: ["Cat 5e", "Cat 6", "Cat 6a", "Cat 7"],
    answer: 2,
    explanation: "Cat 6 supports 10G only up to 55m. Cat 6a extends this to the full 100m run. Cat 5e tops out at 1 Gbps.",
    course: 1
  },
  {
    q: "In a star topology, what happens if the central switch fails?",
    options: [
      "Only the devices on that switch lose connectivity",
      "All devices connected to it lose connectivity",
      "The network automatically reroutes through another path",
      "One device takes over as a temporary hub"
    ],
    answer: 1,
    explanation: "All devices in a star topology connect to one central device. That central device is a single point of failure - if it goes down, every connected device loses network access.",
    course: 1
  },
  {
    q: "At which OSI layer does a router operate?",
    options: [
      "Layer 1 - Physical",
      "Layer 2 - Data Link",
      "Layer 3 - Network",
      "Layer 4 - Transport"
    ],
    answer: 2,
    explanation: "Routers operate at Layer 3 and make forwarding decisions based on IP addresses. Switches work at Layer 2 using MAC addresses; hubs simply repeat signals at Layer 1.",
    course: 1
  },
  {
    q: "What is the final step (Step 7) of the troubleshooting methodology?",
    options: [
      "Verify the fix worked and no new problems appeared",
      "Escalate to the next support tier",
      "Document the problem, root cause, and resolution",
      "Notify the user that the issue is resolved"
    ],
    answer: 2,
    explanation: "Documentation is the final step. It builds the knowledge base for future incidents, enables pattern analysis, and is required for SLA compliance audits.",
    course: 1
  },
  {
    q: "A technician replaces a suspected faulty RAM stick with a known-good one to confirm the fault. What troubleshooting approach is this?",
    options: ["Bottom-up", "Top-down", "Divide and conquer", "Swap and compare"],
    answer: 3,
    explanation: "Swap and compare (component substitution) replaces a suspected faulty component with a known-good one to confirm or eliminate it as the cause - common in hardware troubleshooting.",
    course: 1
  },
  {
    q: "At which support tier would a password reset typically be handled?",
    options: ["Tier 0", "Tier 1", "Tier 2", "Tier 3"],
    answer: 1,
    explanation: "Tier 1 (Help Desk) handles common scripted tasks like password resets and basic connectivity checks that do not require deep technical knowledge.",
    course: 1
  },
  {
    q: "Before opening a desktop to reseat RAM, what must a technician do first?",
    options: [
      "Boot to BIOS to confirm which slot is failing",
      "Power off the machine and attach an anti-static wrist strap",
      "Update drivers and take a system snapshot",
      "Run memtest86 to confirm the failure"
    ],
    answer: 1,
    explanation: "Always power off, unplug from the wall, and ground yourself with an anti-static wrist strap before touching internal components to prevent ESD damage.",
    course: 1
  },
  {
    q: "What is the single most useful first question when a user reports their computer is not working?",
    options: [
      "Have you tried restarting it?",
      "What changed recently?",
      "What operating system are you using?",
      "How long have you had this computer?"
    ],
    answer: 1,
    explanation: "\"What changed recently?\" is the most diagnostic first question. Most outages trace back to a recent change - software update, new hardware, or configuration change.",
    course: 1
  },
  {
    q: "What is the ITIL difference between an incident and a problem?",
    options: [
      "Incidents are hardware failures; problems are software failures",
      "An incident is an unplanned disruption; a problem is the underlying root cause",
      "Incidents are P1/P2; problems are P3/P4",
      "They are the same thing in modern ITIL"
    ],
    answer: 1,
    explanation: "An incident is a disruption requiring fast restoration (e.g., restart the crashed service). A problem is the root cause investigation to prevent recurrence - it takes longer but stops repeat incidents.",
    course: 1
  },
  {
    q: "What does an SLA (Service Level Agreement) formally define?",
    options: [
      "The hardware specs required for a support contract",
      "The escalation process between support tiers",
      "Expected service levels including response and resolution times",
      "The pricing structure for IT support services"
    ],
    answer: 2,
    explanation: "An SLA is a formal contract specifying measurable service targets - response time, resolution time, uptime guarantees - with consequences for breaches.",
    course: 1
  },
  {
    q: "Which scenario best describes a P1 ticket?",
    options: [
      "A single user unable to open a specific file",
      "A complete outage affecting all users or a revenue-critical system",
      "A software update request from a department",
      "A cosmetic UI issue with the internal portal"
    ],
    answer: 1,
    explanation: "P1 is critical - a complete outage or major revenue impact affecting all users, with the tightest SLA targets (e.g., 15-minute response, 4-hour resolution).",
    course: 1
  },
  {
    q: "What is a runbook?",
    options: [
      "A weekly report summarizing IT incidents",
      "A step-by-step procedure document for a routine operational task",
      "A vendor hardware specification manual",
      "An audit trail of all infrastructure changes"
    ],
    answer: 1,
    explanation: "Runbooks (SOPs) are step-by-step procedure documents for common tasks like server restarts or new user onboarding. They reduce errors and let less-experienced staff handle critical tasks safely.",
    course: 1
  },
  {
    q: "A frustrated user says \"IT never fixes anything properly.\" What is the best first response?",
    options: [
      "Explain the SLA targets and why the previous fix was within policy",
      "Acknowledge their frustration, then focus on the current issue",
      "Ask them to list every previous incident in detail",
      "Escalate immediately since this is a repeat complaint"
    ],
    answer: 1,
    explanation: "People want to feel heard before they want to be fixed. Acknowledging frustration first (\"I understand this has been frustrating\") de-escalates the situation before moving into diagnosis.",
    course: 1
  },
  {
    q: "What is a \"known error\" in ITIL?",
    options: [
      "An incident already escalated to Tier 3",
      "A problem with an identified root cause and documented workaround, not yet permanently fixed",
      "A repeat incident caused by the same user mistake",
      "An error code generated by the OS during a crash"
    ],
    answer: 1,
    explanation: "A known error is a problem where the root cause is understood and a workaround documented, even if a permanent fix has not been deployed yet.",
    course: 1
  },
  {
    q: "A user's computer randomly shuts off with no warning. Which troubleshooting approach is most appropriate first?",
    options: [
      "Top-down - check application logs first",
      "Bottom-up - check physical layer (thermals, PSU, hardware)",
      "Divide and conquer - start at the transport layer",
      "Check DNS configuration first"
    ],
    answer: 1,
    explanation: "Random shutoffs are typically hardware or environmental issues (overheating, PSU underpowering, RAM failure). Bottom-up starts at the physical layer - the right place for this symptom.",
    course: 1
  },
  {
    q: "UEFI is the modern replacement for BIOS. What are two capabilities UEFI adds?",
    options: [
      "Faster CPU clock speeds and DDR5 support",
      "Support for drives larger than 2 TB and Secure Boot",
      "Built-in Wi-Fi and Bluetooth firmware",
      "Hardware RAID and NVMe overclocking"
    ],
    answer: 1,
    explanation: "UEFI supports drives over 2 TB (BIOS is limited by MBR to 2 TB) and adds Secure Boot, which prevents unauthorized bootloaders from running during startup.",
    course: 1
  },
  {
    q: "What is the difference between system software and application software?",
    options: [
      "System software runs only on servers; application software runs on desktops",
      "System software manages hardware and provides a platform; application software accomplishes user tasks",
      "System software is always open source; application software is proprietary",
      "Application software includes device drivers; system software includes browsers"
    ],
    answer: 1,
    explanation: "System software (OS, drivers, firmware) manages hardware and provides the platform everything else runs on. Application software (browsers, word processors) sits on top and accomplishes user-specific tasks.",
    course: 1
  },

  /* ── Course 2 · Bits and Bytes of Networking ────────────── */

  {
    q: "At which OSI layer does a switch operate?",
    options: [
      "Layer 1 - Physical",
      "Layer 2 - Data Link",
      "Layer 3 - Network",
      "Layer 4 - Transport"
    ],
    answer: 1,
    explanation: "Switches operate at Layer 2 (Data Link) and forward frames based on MAC addresses. A Layer 3 switch adds routing capability, but a standard switch is Layer 2.",
    course: 2
  },
  {
    q: "What is the PDU at the Network layer called?",
    options: ["Frame", "Segment", "Packet", "Bit"],
    answer: 2,
    explanation: "Network layer (Layer 3) PDU is a packet. Layer 2 = frame, Layer 4 TCP = segment / UDP = datagram, Layer 1 = bits.",
    course: 2
  },
  {
    q: "What happens during encapsulation as data moves down the OSI stack?",
    options: [
      "Headers are stripped from data at each layer",
      "Data is encrypted at each layer",
      "Each layer wraps data with its own header",
      "The payload grows smaller at each layer"
    ],
    answer: 2,
    explanation: "Encapsulation is each layer adding its own header (and sometimes trailer) as data travels down toward the wire. The reverse process (stripping headers) is decapsulation.",
    course: 2
  },
  {
    q: "Which TCP/IP model layer maps to OSI layers 5, 6, and 7?",
    options: ["Transport", "Internet", "Link", "Application"],
    answer: 3,
    explanation: "The TCP/IP Application layer merges OSI's Session (5), Presentation (6), and Application (7) layers. This is one of the key structural differences between the two models.",
    course: 2
  },
  {
    q: "A host shows the IP address 169.254.1.50. What does this indicate?",
    options: [
      "The host is configured with a static IP",
      "DHCP failed and the host self-assigned an APIPA address",
      "The host is on the loopback interface",
      "The host has a misconfigured subnet mask"
    ],
    answer: 1,
    explanation: "169.254.0.0/16 is the APIPA range. When DHCP fails or no server responds, Windows assigns an address in this range automatically so local link communication still works.",
    course: 2
  },
  {
    q: "How many usable host addresses does a /28 subnet provide?",
    options: ["8", "14", "16", "30"],
    answer: 1,
    explanation: "/28 leaves 4 host bits. 2^4 = 16 total addresses. Subtract 2 (network address and broadcast) = 14 usable hosts.",
    course: 2
  },
  {
    q: "Which of the RFC 1918 private ranges is 172.16.0.0/12?",
    options: [
      "Class A private range",
      "Class B private range",
      "Class C private range",
      "APIPA range"
    ],
    answer: 1,
    explanation: "The three RFC 1918 ranges are: 10.0.0.0/8 (Class A), 172.16.0.0/12 (Class B), and 192.168.0.0/16 (Class C). None are routable on the public internet.",
    course: 2
  },
  {
    q: "What is the IPv6 loopback address?",
    options: ["127.0.0.1", "fe80::1", "::1", "::"],
    answer: 2,
    explanation: "::1 is the IPv6 loopback, equivalent to 127.0.0.1 in IPv4. fe80::/10 is link-local, and :: (all zeros) is the unspecified address.",
    course: 2
  },
  {
    q: "What protocol resolves an IP address to a MAC address on a local network?",
    options: ["DNS", "DHCP", "ARP", "NDP"],
    answer: 2,
    explanation: "ARP (Address Resolution Protocol) resolves Layer 3 IP addresses to Layer 2 MAC addresses on the local segment. IPv6 replaces ARP with NDP (Neighbor Discovery Protocol).",
    course: 2
  },
  {
    q: "What is the broadcast MAC address?",
    options: [
      "00:00:00:00:00:00",
      "FF:FF:FF:FF:FF:FF",
      "127:127:127:127:127:127",
      "The router's MAC address"
    ],
    answer: 1,
    explanation: "FF:FF:FF:FF:FF:FF is the broadcast MAC address. Every device on the local segment receives frames sent to this address.",
    course: 2
  },
  {
    q: "What does the OUI portion of a MAC address identify?",
    options: [
      "The device's assigned IP subnet",
      "The device's serial number",
      "The manufacturer of the network interface",
      "The VLAN the device belongs to"
    ],
    answer: 2,
    explanation: "The first 3 bytes (OUI - Organizationally Unique Identifier) are assigned by IEEE to identify the manufacturer (e.g., Intel, Cisco, Apple). The last 3 bytes are the device-unique identifier.",
    course: 2
  },
  {
    q: "What is the maximum payload size of a standard Ethernet frame (the MTU)?",
    options: ["512 bytes", "1024 bytes", "1500 bytes", "9000 bytes"],
    answer: 2,
    explanation: "The standard Ethernet MTU is 1500 bytes. Jumbo frames (up to 9000 bytes) exist for high-performance environments but require explicit configuration end-to-end.",
    course: 2
  },
  {
    q: "What is the correct order of the TCP three-way handshake?",
    options: [
      "ACK - SYN - SYN-ACK",
      "SYN - ACK - SYN-ACK",
      "SYN - SYN-ACK - ACK",
      "SYN-ACK - SYN - ACK"
    ],
    answer: 2,
    explanation: "Client sends SYN (I want to connect) - Server replies SYN-ACK (acknowledged, ready) - Client sends ACK (confirmed). The connection is established before any data flows.",
    course: 2
  },
  {
    q: "Why is UDP preferred over TCP for live video streaming?",
    options: [
      "UDP guarantees all packets arrive in order",
      "UDP has lower overhead and speed matters more than the occasional dropped packet",
      "UDP supports more simultaneous connections than TCP",
      "UDP automatically encrypts the stream"
    ],
    answer: 1,
    explanation: "UDP has no handshake and no retransmission overhead. For streaming, a dropped frame is far preferable to the latency jitter caused by TCP waiting for retransmission.",
    course: 2
  },
  {
    q: "What port does HTTPS use?",
    options: ["80", "443", "8080", "22"],
    answer: 1,
    explanation: "HTTPS runs on port 443. HTTP is port 80. HTTPS = HTTP wrapped in TLS, adding encryption, server certificate authentication, and data integrity.",
    course: 2
  },
  {
    q: "What port does SSH use?",
    options: ["21", "22", "23", "25"],
    answer: 1,
    explanation: "SSH uses port 22. Port 21 is FTP control, port 23 is Telnet (insecure - replaced by SSH), and port 25 is SMTP for mail transfer.",
    course: 2
  },
  {
    q: "What is the dynamic/ephemeral port range?",
    options: ["0 - 1023", "1024 - 49151", "49152 - 65535", "1024 - 65535"],
    answer: 2,
    explanation: "Three ranges: well-known (0-1023), registered (1024-49151), dynamic/ephemeral (49152-65535). Ephemeral ports are assigned temporarily to the client side of outbound connections.",
    course: 2
  },
  {
    q: "What DNS record type maps a hostname to an IPv4 address?",
    options: ["AAAA", "CNAME", "A", "PTR"],
    answer: 2,
    explanation: "The A record maps hostname to IPv4. AAAA maps to IPv6. CNAME is an alias pointing to another hostname. PTR is a reverse lookup (IP address to hostname).",
    course: 2
  },
  {
    q: "In DHCP's DORA process, which two steps use broadcast?",
    options: [
      "Offer and Acknowledge",
      "Discover and Request",
      "Discover and Offer",
      "Request and Acknowledge"
    ],
    answer: 1,
    explanation: "Discover (client searching for a DHCP server) and Request (client formally selecting an offer) are both broadcasts. Offer and Acknowledge are unicast responses from the server.",
    course: 2
  },
  {
    q: "What type of NAT does a typical home router use?",
    options: [
      "Static NAT",
      "Dynamic NAT",
      "PAT (Port Address Translation)",
      "Twice NAT"
    ],
    answer: 2,
    explanation: "PAT (also called NAT overload or masquerade) allows many internal devices to share one public IP by tracking sessions with port numbers. This is how virtually every home router works.",
    course: 2
  },
  {
    q: "What is the difference between HTTP status 403 and 401?",
    options: [
      "403 is a server error; 401 is a client error",
      "403 means resource not found; 401 means redirect needed",
      "403 means forbidden (authenticated but not permitted); 401 means authentication is required",
      "403 means rate limited; 401 means session expired"
    ],
    answer: 2,
    explanation: "401 means the server needs to know who you are (authentication missing or failed). 403 means the server knows who you are but you lack permission - authentication passed, authorization failed.",
    course: 2
  },
  {
    q: "You can ping 8.8.8.8 successfully but no website loads by name. What is the most likely cause?",
    options: [
      "The default gateway is down",
      "DNS resolution is failing",
      "The firewall is blocking HTTP",
      "The NIC driver needs updating"
    ],
    answer: 1,
    explanation: "Pinging an IP proves Layer 3 connectivity and internet routing work. Failing to resolve names while IP works is a classic DNS failure. Run nslookup or dig to confirm.",
    course: 2
  },
  {
    q: "What does traceroute show that a simple ping does not?",
    options: [
      "Whether the remote host port is open",
      "The round-trip time to the destination",
      "The path packets take hop-by-hop, and where they stop",
      "The DNS resolution chain for a hostname"
    ],
    answer: 2,
    explanation: "traceroute maps each router hop between source and destination by manipulating TTL. This lets you pinpoint exactly which link or router is causing packet loss or high latency.",
    course: 2
  },
  {
    q: "What is the difference between a stateless and a stateful firewall?",
    options: [
      "Stateless is hardware-based; stateful is software-based",
      "Stateless evaluates each packet in isolation; stateful tracks active connection state",
      "Stateful is older technology replaced by stateless NGFWs",
      "They are equivalent - the terms are used interchangeably"
    ],
    answer: 1,
    explanation: "Stateless firewalls evaluate each packet independently against static rules. Stateful firewalls track active connection state and automatically allow return traffic for established sessions.",
    course: 2
  },
  {
    q: "What is split tunneling in a VPN?",
    options: [
      "Using two VPN servers simultaneously for redundancy",
      "Only routing traffic destined for the remote network through the VPN; other traffic goes direct",
      "Encrypting only a portion of the tunnel traffic to reduce overhead",
      "Splitting a VPN connection across multiple physical interfaces"
    ],
    answer: 1,
    explanation: "Split tunneling routes only remote-network-bound traffic through the VPN tunnel. Internet-bound traffic exits directly. This reduces VPN load but means that traffic bypasses corporate security controls.",
    course: 2
  },
  {
    q: "What are the three non-overlapping 2.4 GHz Wi-Fi channels in the US?",
    options: ["1, 4, 8", "1, 6, 11", "2, 7, 12", "1, 5, 10"],
    answer: 1,
    explanation: "Only channels 1, 6, and 11 are fully non-overlapping in the US 2.4 GHz band. Configuring nearby access points on overlapping channels causes co-channel interference and reduces throughput.",
    course: 2
  },
  {
    q: "What does IEEE 802.1Q VLAN tagging accomplish?",
    options: [
      "Encrypts traffic between switches",
      "Logically segments a switch into multiple broadcast domains",
      "Increases port speed on trunk links",
      "Assigns IP addresses automatically to connected devices"
    ],
    answer: 1,
    explanation: "802.1Q inserts a 4-byte tag into Ethernet frames to identify their VLAN. This lets one physical switch support multiple logically separate broadcast domains without separate hardware.",
    course: 2
  },
  {
    q: "What is the TTL field in an IP packet used for?",
    options: [
      "Specifying how long a DNS record should be cached",
      "Indicating the packet's priority in the queue",
      "Preventing routing loops by decrementing at each hop and dropping the packet at 0",
      "Recording the timestamp when the packet was created"
    ],
    answer: 2,
    explanation: "Each router decrements TTL by 1. At 0 the packet is dropped and an ICMP Time Exceeded message is returned. traceroute exploits this mechanism to map each hop in the path.",
    course: 2
  },
  {
    q: "Which command shows all listening ports and active connections on Linux?",
    options: [
      "ip addr",
      "ss -tulpn",
      "ping -a",
      "dig +stats"
    ],
    answer: 1,
    explanation: "ss -tulpn (or the older netstat -tulpn) shows TCP/UDP listening ports and established connections with their associated process names. ip addr shows interface configuration, not connections.",
    course: 2
  },
  {
    q: "Why should DNS TTL be lowered before a server migration?",
    options: [
      "To reduce DNS query load on the authoritative server during migration",
      "So that DNS changes propagate quickly to clients after the cutover",
      "TTL has no effect on how fast DNS changes take effect",
      "To prevent the old server from responding to queries during the transition"
    ],
    answer: 1,
    explanation: "Lowering TTL (e.g., to 300s) before a migration means clients re-query sooner after the DNS record changes. If you cut over with a high TTL, stale records may be cached for hours.",
    course: 2
  },

  /* ── Course 3 · Operating Systems ──────────────────── */

  {
    q: "What is the key difference between a hard link and a symbolic (soft) link on Linux?",
    options: [
      "Hard links work across different filesystems; symbolic links do not",
      "Hard links point directly to the inode and survive if the original filename is deleted; symbolic links break",
      "Symbolic links can only point to directories; hard links can only point to files",
      "Hard links require root privileges to create; symbolic links do not"
    ],
    answer: 1,
    explanation: "A hard link is another name for the same inode — the file data persists as long as any hard link exists. A symbolic link stores a path; if that path is deleted or moved, the symlink breaks.",
    course: 3
  },
  {
    q: "A user runs chmod 754 on a file. What permissions does the group have?",
    options: [
      "Read, write, and execute",
      "Read and execute only",
      "Read only",
      "No permissions"
    ],
    answer: 1,
    explanation: "chmod 754 breaks down as owner=7 (rwx), group=5 (r-x), others=4 (r--). The middle digit 5 = read (4) + execute (1), so the group can read and execute but not write.",
    course: 3
  },
  {
    q: "What is the difference between SIGTERM and SIGKILL?",
    options: [
      "SIGTERM is for system processes only; SIGKILL is for user processes",
      "SIGTERM asks the process to shut down gracefully; SIGKILL immediately force-kills it with no cleanup",
      "SIGKILL can be caught and ignored by the process; SIGTERM cannot",
      "They are identical — both terminate the process immediately"
    ],
    answer: 1,
    explanation: "SIGTERM is a polite request — the process can catch it, save state, and exit cleanly. SIGKILL cannot be caught or ignored; the kernel kills the process instantly. SIGKILL is a last resort.",
    course: 3
  },
  {
    q: "Which file in Linux defines the filesystems to mount automatically at boot?",
    options: [
      "/etc/hosts",
      "/proc/mounts",
      "/etc/fstab",
      "/boot/grub/grub.cfg"
    ],
    answer: 2,
    explanation: "/etc/fstab lists each filesystem, its mount point, type, and options. The system reads it at boot to mount everything automatically. UUIDs are preferred over device names like /dev/sdb because device names can change.",
    course: 3
  },
  {
    q: "What does the apt package manager do that dpkg alone cannot?",
    options: [
      "Install .deb files from a local directory",
      "Remove installed packages",
      "Automatically fetch and resolve package dependencies",
      "Show which files belong to an installed package"
    ],
    answer: 2,
    explanation: "dpkg is the low-level tool — it installs or removes .deb files but won't pull in missing dependencies. apt is the high-level tool that contacts repositories, resolves and downloads all required dependencies automatically.",
    course: 3
  },
  {
    q: "A host is assigned the address 169.254.14.22. What does this indicate?",
    options: [
      "The host is on a private Class B network",
      "DHCP failed and the host self-assigned an APIPA address",
      "The host is behind a NAT gateway",
      "The address was statically configured by the administrator"
    ],
    answer: 1,
    explanation: "169.254.0.0/16 is the APIPA (Automatic Private IP Addressing) range. When DHCP is unreachable, the OS assigns itself an address in this range. It signals a DHCP failure, not intentional configuration.",
    course: 3
  },
  {
    q: "What is the difference between SSH and RDP?",
    options: [
      "SSH is Windows-only; RDP works on Linux and Windows",
      "SSH provides a remote command line; RDP provides a full graphical desktop",
      "RDP is encrypted; SSH transmits in plain text",
      "SSH requires a VPN; RDP works without one"
    ],
    answer: 1,
    explanation: "SSH gives you a text-based remote shell — lightweight and encrypted. RDP (Remote Desktop Protocol) streams a full GUI desktop session. Both are remote access tools but serve different use cases.",
    course: 3
  },
  {
    q: "What are the key differences between MBR and GPT partition tables?",
    options: [
      "MBR supports larger disks; GPT is limited to 2 TB",
      "GPT supports disks over 2 TB and more than 4 primary partitions; MBR cannot",
      "MBR requires UEFI firmware; GPT works with legacy BIOS",
      "They are functionally identical — GPT is just a newer name for MBR"
    ],
    answer: 1,
    explanation: "MBR is limited to 2 TB disks and 4 primary partitions, and it requires legacy BIOS. GPT removes those limits and is required by modern UEFI firmware. Any disk over 2 TB must use GPT.",
    course: 3
  },
  {
    q: "What is PID 1 in Linux and why is it special?",
    options: [
      "The kernel itself — it handles all hardware interrupts",
      "The init process — it is the first process started at boot and the parent of all other processes",
      "The root user's login shell",
      "The process reserved for system logging (syslogd)"
    ],
    answer: 1,
    explanation: "PID 1 is the init process (systemd on modern distros). It is started directly by the kernel after boot and is the ancestor of every other process. If PID 1 dies, the system halts.",
    course: 3
  },
  {
    q: "Why should you properly unmount a drive before physically removing it?",
    options: [
      "The OS encrypts the drive on unmount to protect data",
      "The OS needs to assign a new device name before removal",
      "The OS buffers writes in RAM; unmounting flushes the buffer to disk and prevents filesystem corruption",
      "Removing without unmounting can cause the drive to lose its partition table"
    ],
    answer: 2,
    explanation: "The OS stages writes in a memory buffer for performance. A proper unmount flushes all pending writes to disk. Removing the drive before this can leave the filesystem in an inconsistent state.",
    course: 3
  },

  {
    q: "Which Linux command shows free disk space across all mounted filesystems in human-readable format?",
    options: ["du -sh", "ls -lh", "df -h", "free -h"],
    answer: 2,
    explanation: "df -h (disk free, human-readable) shows total, used, and available space per mounted filesystem. du measures directory sizes; free measures RAM; ls lists files.",
    course: 3
  },
  {
    q: "What does the Linux command tail -f do?",
    options: [
      "Shows the last 10 lines of a file and exits",
      "Follows a log file live, printing new lines as they are written",
      "Searches a file for a pattern and prints matching lines",
      "Compresses a file and appends it to an archive"
    ],
    answer: 1,
    explanation: "tail -f keeps the file open and streams new content to the terminal in real time — essential for watching logs as events happen, such as during a service restart or debugging a crash.",
    course: 3
  },
  {
    q: "What numeric permission value represents read + write + execute for a single role in Linux?",
    options: ["5", "6", "7", "4"],
    answer: 2,
    explanation: "Linux uses octal: read=4, write=2, execute=1. Adding all three gives 4+2+1=7. So chmod 777 gives full permissions to owner, group, and others.",
    course: 3
  },
  {
    q: "Where does Linux store security and authentication logs by default?",
    options: ["/var/log/syslog", "/var/log/auth.log", "/etc/security/log", "/proc/log/auth"],
    answer: 1,
    explanation: "/var/log/auth.log records sudo usage, SSH logins, failed authentication attempts, and other security-relevant events. It is a key file to check when investigating unauthorized access.",
    course: 3
  },
  {
    q: "What does the /etc/passwd file store in Linux?",
    options: [
      "Encrypted user passwords",
      "A list of all user accounts and their attributes",
      "PAM authentication configuration",
      "The sudoers permission list"
    ],
    answer: 1,
    explanation: "/etc/passwd lists all user accounts with username, UID, GID, home directory, and default shell. Despite the name, passwords are stored separately in /etc/shadow (hashed, not plain text).",
    course: 3
  },
  {
    q: "What is virtual memory and when does the OS use it?",
    options: [
      "Extra RAM added by the GPU when physical RAM runs out",
      "A section of disk used to extend usable RAM when physical RAM is exhausted",
      "Memory allocated to virtual machines by the hypervisor",
      "Compressed RAM blocks used to speed up context switching"
    ],
    answer: 1,
    explanation: "When physical RAM fills up, the OS moves inactive memory pages to a disk partition (swap on Linux, page file on Windows). Disk is much slower than RAM, causing noticeable slowdowns — sometimes called thrashing.",
    course: 3
  },
  {
    q: "What is the purpose of the Windows Event Viewer?",
    options: [
      "Monitors network traffic in real time",
      "Browses system, application, and security event logs via a GUI",
      "Displays running processes and their resource usage",
      "Manages Windows Update download history"
    ],
    answer: 1,
    explanation: "Event Viewer (eventvwr.msc) lets you browse structured logs categorized as System, Application, and Security. It is the first stop for diagnosing Windows crashes, service failures, and login issues.",
    course: 3
  },
  {
    q: "What signal does Ctrl+C send to a running process in the terminal?",
    options: ["SIGKILL", "SIGTERM", "SIGINT", "SIGHUP"],
    answer: 2,
    explanation: "Ctrl+C sends SIGINT (interrupt signal) — a polite request to stop. Unlike SIGKILL, the process can catch SIGINT and do cleanup before exiting. Most programs treat it as a graceful stop.",
    course: 3
  },
  {
    q: "Which filesystem is natively readable and writable on Windows, macOS, and Linux without extra drivers?",
    options: ["NTFS", "ext4", "FAT32", "HFS+"],
    answer: 2,
    explanation: "FAT32 is the universal cross-platform filesystem. NTFS is native to Windows (read-only on macOS without drivers). ext4 is Linux-native. HFS+ is macOS-native. For files over 4 GB, exFAT is the modern cross-platform alternative.",
    course: 3
  },

  {
    q: "What does the sudo command do in Linux?",
    options: [
      "Switches the current user to the root account permanently",
      "Runs a single command with administrator (root) privileges without switching accounts",
      "Creates a new superuser account on the system",
      "Grants permanent elevated permissions to the current user"
    ],
    answer: 1,
    explanation: "sudo (superuser do) lets a permitted user run one command as root without logging in as root. It is safer than staying in a root shell because privilege is scoped to a single command and every use is logged.",
    course: 3
  },
  {
    q: "What is the difference between an ACL and a DACL in Windows?",
    options: [
      "ACLs apply to files; DACLs apply to registry keys",
      "ACL is the general concept of permission lists; DACL is the Windows implementation where the owner controls access",
      "DACLs are read-only; ACLs allow write permissions",
      "They are identical — DACL is just the older term for ACL"
    ],
    answer: 1,
    explanation: "An ACL (Access Control List) is the broad concept. A DACL (Discretionary ACL) is the Windows-specific implementation — 'discretionary' because the resource owner decides who gets access. Windows also has a SACL for auditing.",
    course: 3
  },
  {
    q: "Which Linux command shows the currently running kernel version?",
    options: ["lsb_release -a", "cat /etc/os-release", "uname -r", "dpkg --version"],
    answer: 2,
    explanation: "uname -r prints the kernel release version (e.g., 5.15.0-91-generic). This is useful for checking if a kernel update has been applied or verifying driver compatibility.",
    course: 3
  },
  {
    q: "What is a DLL and why is it useful?",
    options: [
      "A type of Windows executable that runs in its own memory space",
      "A shared code library that multiple programs can use simultaneously, avoiding duplicated code",
      "A driver file that lets Windows communicate with hardware devices",
      "A compressed archive format used by the Windows installer"
    ],
    answer: 1,
    explanation: "A DLL (Dynamic Link Library) contains reusable code and data loaded by programs at runtime. Multiple apps can share one loaded copy in memory — no duplication. This is why deleting a DLL can break multiple unrelated programs.",
    course: 3
  },
  {
    q: "What is the difference between an absolute path and a relative path?",
    options: [
      "Absolute paths work on Linux only; relative paths work on both Windows and Linux",
      "Absolute paths start from the root of the filesystem; relative paths start from the current working directory",
      "Relative paths are shorter versions of absolute paths stored in environment variables",
      "Absolute paths use forward slashes; relative paths use backslashes"
    ],
    answer: 1,
    explanation: "An absolute path fully specifies a location from the root (e.g., /home/user/docs or C:\\Users\\). A relative path starts from wherever you currently are (e.g., ../Desktop). Relative paths break if you change directory; absolute paths always work.",
    course: 3
  },
  {
    q: "What is Unix epoch time?",
    options: [
      "The maximum date a 32-bit Unix timestamp can represent",
      "The number of seconds elapsed since midnight January 1, 1970 UTC",
      "The Unix standard for synchronizing clocks across networked machines",
      "A timestamp format that stores date and time as a human-readable string"
    ],
    answer: 1,
    explanation: "Unix epoch time counts seconds from Jan 1, 1970 00:00:00 UTC. It gives every moment in time a single integer, making timestamp math trivial. System logs use it internally; tools convert it to human-readable dates for display.",
    course: 3
  },
  {
    q: "When would you boot Windows into Safe Mode?",
    options: [
      "To apply Windows updates that require elevated privileges",
      "When Windows won't boot normally, or to isolate driver and software conflicts",
      "To recover deleted files from the Recycle Bin",
      "To run disk encryption without interruption from background services"
    ],
    answer: 1,
    explanation: "Safe Mode boots Windows with only the minimum required drivers and services. If the system crashes normally but works in Safe Mode, the culprit is a driver or startup program — not a hardware failure. It is the key tool for diagnosing boot problems.",
    course: 3
  },
  {
    q: "Which command lets you view running processes and their resource usage interactively in Linux?",
    options: ["ps aux", "jobs -l", "top", "lsof"],
    answer: 2,
    explanation: "top shows a live, updating view of processes sorted by CPU usage. ps aux gives a static snapshot. htop is an improved interactive version of top. lsof lists open files, not processes by resource usage.",
    course: 3
  },
  {
    q: "What is mstsc.exe and what does it do?",
    options: [
      "Microsoft Security Center — manages Windows Defender settings",
      "Microsoft Terminal Services Client — opens Remote Desktop (RDP) connections to other machines",
      "Microsoft System Configuration — manages startup programs and services",
      "Microsoft Storage Console — manages disk partitions and volumes"
    ],
    answer: 1,
    explanation: "mstsc.exe (Microsoft Terminal Services Client) is the built-in Windows tool for making RDP connections. You enter the remote machine's IP or hostname and connect to its full graphical desktop.",
    course: 3
  },
  {
    q: "What does the man command do in Linux?",
    options: [
      "Manages user accounts and groups",
      "Opens the manual page for a command, showing its flags, usage, and description",
      "Monitors active network connections",
      "Displays available disk partitions"
    ],
    answer: 1,
    explanation: "man <command> opens the built-in manual page for that command. It is the authoritative reference for flags and behavior — faster than searching the web. Press q to quit, / to search within the page.",
    course: 3
  },

  /* ── Course 4 · System Administration ──────────────── */

  {
    q: "What is the hardware lifecycle stage that follows Procurement?",
    options: ["Maintenance", "Retirement", "Deployment", "Auditing"],
    answer: 2,
    explanation: "The four stages are Procurement → Deployment → Maintenance → Retirement. After purchasing hardware, the next step is setting it up and configuring it for use — Deployment.",
    course: 4
  },
  {
    q: "Why should you never test changes directly in the production environment?",
    options: [
      "Production servers run a different OS than test servers",
      "Production is the live environment end users depend on — a failed change causes real downtime",
      "Testing in production bypasses the change management process",
      "Production environments do not have logging enabled"
    ],
    answer: 1,
    explanation: "Production is where real users are. A failed or untested change there causes actual outages. Changes should be validated in a test environment — usually a VM mirroring production settings — before going live.",
    course: 4
  },
  {
    q: "What is a golden image in the context of OS deployment?",
    options: [
      "A backup copy of the production server stored offsite",
      "A pre-configured OS snapshot with standard software and settings, cloned to new machines",
      "A BIOS firmware update image distributed by the hardware vendor",
      "A read-only system partition created by Windows during install"
    ],
    answer: 1,
    explanation: "A golden image is a fully configured reference machine — OS, company software, drivers, and security settings all pre-installed. You capture a disk snapshot and clone it to any number of new machines, avoiding manual setup on each one.",
    course: 4
  },
  {
    q: "In a PXE boot deployment, which protocol actually delivers the OS image to the client machine?",
    options: ["SFTP", "TFTP", "HTTP", "SMB"],
    answer: 1,
    explanation: "TFTP (Trivial FTP) is used for PXE boot because it is extremely simple — no authentication, no encryption — which is exactly what you need when a bare-metal machine has no OS or credentials yet.",
    course: 4
  },
  {
    q: "What does LSDOU describe in Active Directory?",
    options: [
      "The four types of AD objects: Local, Site, Domain, OU",
      "The order in which Group Policy Objects are applied: Local → Site → Domain → OU",
      "The replication schedule between domain controllers",
      "The four AD group scopes: Local, Site, Domain, Organization-wide"
    ],
    answer: 1,
    explanation: "LSDOU is the GPO processing order. Later policies override earlier ones on conflicts, so an OU-linked GPO wins over a Domain-level GPO. This determines which settings actually apply to a user or computer.",
    course: 4
  },
  {
    q: "What is the difference between a GPO Policy and a GPO Preference?",
    options: [
      "Policies apply to computers; Preferences apply to users",
      "Policies are enforced and users cannot override them; Preferences are defaults users can change",
      "Preferences are applied first; Policies override them",
      "Policies require LDAP; Preferences use Kerberos"
    ],
    answer: 1,
    explanation: "Policies are enforced settings re-applied automatically every few minutes — users have no ability to change them. Preferences are template defaults that get applied once; users can modify them afterwards.",
    course: 4
  },
  {
    q: "What does the 3-2-1 backup rule specify?",
    options: [
      "3 daily backups, 2 weekly, 1 monthly",
      "3 copies of data, on 2 different media types, with 1 copy stored off-site",
      "3 full backups before switching to incremental, 2 off-site, 1 on-site",
      "Backups must complete within 3 hours, 2 retries allowed, 1 verification step"
    ],
    answer: 1,
    explanation: "The 3-2-1 rule: keep 3 total copies, stored on 2 different media types (e.g., disk + tape), with 1 copy off-site. This protects against single points of failure, media degradation, and site-wide disasters.",
    course: 4
  },
  {
    q: "Why is RAID not considered a backup solution?",
    options: [
      "RAID is too slow to be used for backup purposes",
      "RAID only works with identical drives, limiting flexibility",
      "RAID provides redundancy but all copies live together — ransomware, accidental deletion, or a site disaster destroys all copies simultaneously",
      "RAID requires a separate OS and cannot protect the primary system drive"
    ],
    answer: 2,
    explanation: "RAID mirrors or stripes data across drives for availability — but all drives are in the same machine. If a user deletes a file, all RAID copies reflect that deletion. A true backup is physically or logically separate.",
    course: 4
  },
  {
    q: "What is AAA in the context of centralized IT management?",
    options: [
      "Availability, Accountability, and Auditing",
      "Authentication, Authorization, and Accounting",
      "Access, Administration, and Alerting",
      "Active Directory, Apache, and Auditing"
    ],
    answer: 1,
    explanation: "AAA: Authentication (prove who you are), Authorization (determine what you're allowed to do), Accounting (log what you actually did). Directory services like Active Directory implement all three.",
    course: 4
  },
  {
    q: "What is a KVM switch and why is it critical for a sys admin?",
    options: [
      "A virtual machine manager that lets one server run multiple OS instances",
      "A device that lets one keyboard, monitor, and mouse control multiple servers — essential when the network is down",
      "A network switch that prioritizes keyboard and video traffic",
      "A remote access protocol used as an alternative to SSH"
    ],
    answer: 1,
    explanation: "KVM stands for Keyboard-Video-Mouse. A KVM switch lets one set of peripherals control many physical servers. It is critical when the network is down and SSH/RDP are unavailable — you still have direct console access.",
    course: 4
  },
  {
    q: "What is the difference between RPO and RTO?",
    options: [
      "RPO measures downtime; RTO measures data loss",
      "RPO is the max acceptable data loss measured in time; RTO is the max acceptable downtime",
      "RPO applies to cloud backups; RTO applies to on-site backups",
      "They are the same metric measured from different perspectives"
    ],
    answer: 1,
    explanation: "RPO (Recovery Point Objective) defines how much data you can afford to lose — e.g., RPO of 1 hour means backups every hour. RTO (Recovery Time Objective) defines how fast you must restore — e.g., RTO of 4 hours means systems back online within 4 hours of failure.",
    course: 4
  },
  {
    q: "What does the Linux command 'script session.log' do?",
    options: [
      "Runs a shell script and redirects output to session.log",
      "Records everything typed and displayed in the terminal session to session.log",
      "Backs up the current shell environment to a log file",
      "Monitors system calls and writes them to session.log"
    ],
    answer: 1,
    explanation: "The script command captures the entire terminal session — input and output — to a file. Sys admins use it to document exactly what they did during a change. Type exit to stop recording. Windows equivalent is Start-Transcript.",
    course: 4
  },
  {
    q: "What is a daemon in Linux?",
    options: [
      "A privileged user account with root access",
      "A background process that runs continuously, usually starting at boot",
      "A kernel module that handles hardware interrupts",
      "A system call for inter-process communication"
    ],
    answer: 1,
    explanation: "A daemon is a background service process — it runs silently without user interaction. Examples: NTP daemon syncing the clock, vsftpd serving FTP connections. Config files live in /etc; daemons start automatically at boot.",
    course: 4
  },
  {
    q: "What is the Kerberos clock skew limit, and what do you do when it is exceeded?",
    options: [
      "10 minutes; restart the domain controller",
      "5 minutes; sync the client clock with w32tm /resync",
      "1 minute; re-join the client to the domain",
      "30 seconds; reissue the user's Kerberos ticket manually"
    ],
    answer: 1,
    explanation: "Kerberos requires client and domain controller clocks to be within 5 minutes of each other. If the skew exceeds this, authentication fails. Fix it by running w32tm /resync on the client to sync its clock with the domain.",
    course: 4
  },
  {
    q: "What is the difference between a Security Group and a Distribution Group in Active Directory?",
    options: [
      "Security Groups are for administrators only; Distribution Groups are for all users",
      "Security Groups can be assigned resource permissions; Distribution Groups are email-only and cannot control access",
      "Distribution Groups inherit permissions from Security Groups",
      "Security Groups require a domain controller; Distribution Groups work in workgroups"
    ],
    answer: 1,
    explanation: "Security Groups are used to grant permissions to files, printers, and other resources. Distribution Groups exist only for email distribution lists — they cannot be used for access control at all.",
    course: 4
  },
  {
    q: "What does an unattended install answer file accomplish during OS deployment?",
    options: [
      "It applies GPOs before the user logs in for the first time",
      "It automates every setup prompt — language, disk layout, product key, admin password — so no human is needed during install",
      "It pre-loads device drivers after the OS has finished installing",
      "It connects the machine to the domain before the OS installer runs"
    ],
    answer: 1,
    explanation: "An answer file (unattend.xml on Windows, kickstart on Linux) pre-answers every interactive setup prompt. Combined with PXE boot, a technician can rack a machine, plug in a cable, and walk away — the machine configures itself end-to-end.",
    course: 4
  },
  {
    q: "What are the three types of disaster recovery sites?",
    options: [
      "Primary, Secondary, and Tertiary",
      "Hot, Warm, and Cold",
      "On-site, Off-site, and Cloud",
      "Active, Passive, and Standby"
    ],
    answer: 1,
    explanation: "Hot site: fully operational duplicate, fails over in minutes. Warm site: hardware is ready but data must be restored — hours to bring online. Cold site: just space and power — provisioning takes days to weeks. Cost and recovery speed are the main trade-offs.",
    course: 4
  },
  {
    q: "What is the difference between a differential and an incremental backup?",
    options: [
      "Differential backs up everything; incremental backs up only new files",
      "Differential copies all changes since the last full backup; incremental copies only changes since the last backup of any type",
      "Incremental requires a full restore first; differential does not",
      "They are identical — the terms are interchangeable"
    ],
    answer: 1,
    explanation: "Differential: grows over time, always copying from the last full — restore needs just the full + latest differential. Incremental: smallest daily backup, but restore needs the full + every incremental in sequence. Incremental is more efficient to store; differential is faster to restore.",
    course: 4
  },
  {
    q: "What does Dnsmasq provide in a single package?",
    options: [
      "SSH, FTP, HTTP, and DNS",
      "DNS, DHCP, TFTP, and PXE services",
      "LDAP, Kerberos, NTP, and DHCP",
      "Firewall, proxy, DNS, and VPN"
    ],
    answer: 1,
    explanation: "Dnsmasq bundles DNS resolution, DHCP IP assignment, TFTP file serving, and PXE network boot into one lightweight package — useful for small networks or lab setups where you want all these services without running separate servers.",
    course: 4
  },
  {
    q: "What is the difference between IaaS, PaaS, and SaaS?",
    options: [
      "IaaS = apps, PaaS = platforms, SaaS = raw infrastructure",
      "IaaS provides raw compute and storage; PaaS provides a runtime for developers; SaaS provides fully managed applications",
      "They are identical services offered at different price tiers",
      "IaaS is on-premise; PaaS and SaaS are always cloud-based"
    ],
    answer: 1,
    explanation: "IaaS (e.g., AWS EC2) gives you virtual hardware to manage yourself. PaaS (e.g., Heroku) gives you a platform to deploy code without managing servers. SaaS (e.g., Gmail) gives you a finished application — you just use it.",
    course: 4
  },
  {
    q: "What is the only email protocol used for sending mail?",
    options: ["IMAP", "POP3", "SMTP", "MAPI"],
    answer: 2,
    explanation: "SMTP (Simple Mail Transfer Protocol) is the sending protocol — used between mail clients and mail servers, and between mail servers. POP3 and IMAP are receiving protocols only.",
    course: 4
  },
  {
    q: "What do SPF, DKIM, and DMARC each protect against?",
    options: [
      "SPF blocks malware attachments; DKIM encrypts email bodies; DMARC manages spam folders",
      "SPF authorizes sending IPs for a domain; DKIM cryptographically signs messages; DMARC ties them together and tells receivers what to do with failures",
      "They are three names for the same email encryption standard",
      "SPF handles routing; DKIM handles delivery receipts; DMARC handles bounce messages"
    ],
    answer: 1,
    explanation: "SPF lists the IP addresses allowed to send mail for your domain. DKIM adds a cryptographic signature to outgoing mail so receivers can verify it wasn't tampered with. DMARC uses both to set a policy — reject, quarantine, or report — for mail that fails either check.",
    course: 4
  },
  {
    q: "What is the relationship between SSL and TLS?",
    options: [
      "SSL is the modern replacement for the deprecated TLS protocol",
      "TLS is the modern successor to SSL; SSL is deprecated and should never be used on new systems",
      "They are identical protocols with different names depending on the vendor",
      "SSL encrypts data; TLS only authenticates the server certificate"
    ],
    answer: 1,
    explanation: "SSL (Secure Sockets Layer) is the older, deprecated protocol. TLS (Transport Layer Security) replaced it — TLS 1.0 was essentially SSL 3.0 renamed. Modern systems use TLS 1.2 or 1.3. When people say 'SSL certificate' today they mean a TLS certificate.",
    course: 4
  },
  {
    q: "What are the three Active Directory group scopes?",
    options: [
      "Local, Regional, and Global",
      "Domain Local, Global, and Universal",
      "Site, Domain, and Forest",
      "Standard, Security, and Distribution"
    ],
    answer: 1,
    explanation: "Domain Local: grants permissions to resources within a specific domain. Global: groups accounts by role within a domain. Universal: groups roles across an entire AD forest. You pick scope based on how widely the group needs to be applied.",
    course: 4
  },
  {
    q: "What is an LDIF file and how is it used?",
    options: [
      "A binary export of an entire Active Directory database",
      "A plain-text file describing a directory entry or change, passed to ldapadd or ldapmodify to apply it",
      "A log file generated by the LDAP server recording all queries",
      "A config file that sets LDAP server connection settings"
    ],
    answer: 1,
    explanation: "LDIF (LDAP Data Interchange Format) is a plain-text format for describing directory entries and changes. You write the LDIF file, then pipe it to ldapadd (new entries), ldapmodify (changes), or ldapdelete (removals). It is the standard way to script bulk directory operations.",
    course: 4
  },
  {
    q: "What does rsync do and why is it useful for backups?",
    options: [
      "Encrypts files before transferring them to a remote server",
      "Efficiently syncs files between locations by transferring only data that has changed since the last sync",
      "Creates compressed archives of directories for long-term storage",
      "Monitors a directory for changes and immediately mirrors them to a backup location"
    ],
    answer: 1,
    explanation: "rsync compares source and destination and transfers only the differences — much faster than copying everything each time. It is widely used for incremental backups, especially over SSH (rsync -avz -e ssh), because it is efficient and resumable.",
    course: 4
  },
  {
    q: "When must you prepare a rollback plan according to IT Change Management best practices?",
    options: [
      "Within 24 hours after a change is deployed",
      "Only for high-risk changes flagged by the change advisory board",
      "Before making any change — the rollback steps are part of the change record",
      "After the change is validated in the test environment"
    ],
    answer: 2,
    explanation: "A rollback plan documents exactly how to undo a change if it causes problems. It must exist before the change is made — not after something goes wrong. It is a required section of any IT change management record.",
    course: 4
  },
  {
    q: "What is a proxy server and what are its two main uses in a company network?",
    options: [
      "A secondary DNS server that handles overflow queries",
      "An intermediary between clients and the internet used to provide privacy and regulate/filter employee access",
      "A server that caches static website content to reduce page load times",
      "A firewall that inspects packets at the application layer"
    ],
    answer: 1,
    explanation: "A proxy server sits between internal clients and the internet. Companies use it to anonymize outbound traffic (privacy) and to enforce content filtering policies — blocking certain sites or logging what employees access.",
    course: 4
  },
  {
    q: "What does autoscaling do in a cloud environment and when is it most valuable?",
    options: [
      "Automatically upgrades server hardware when performance degrades",
      "Automatically adds or removes compute instances based on real-time demand",
      "Distributes traffic evenly across all available servers at all times",
      "Scales storage capacity based on how much disk space is used"
    ],
    answer: 1,
    explanation: "Autoscaling monitors load and spins up extra instances when demand spikes, then removes them when traffic drops — so you only pay for capacity you actually need. It is most valuable for variable workloads like seasonal sales or viral traffic events.",
    course: 4
  },
  {
    q: "What are the five sections of a standard post-mortem report?",
    options: [
      "Summary, Root Cause, Timeline, Resolution, Lessons Learned",
      "Brief Summary, Detailed Timeline, Root Cause, Resolution & Recovery, Action Items",
      "Incident Log, Impact Assessment, Blame Report, Fix Description, Sign-off",
      "Problem Statement, Hypothesis, Test Results, Fix Applied, Follow-up"
    ],
    answer: 1,
    explanation: "A post-mortem documents: (1) Brief summary, (2) Detailed timeline, (3) Root cause, (4) Resolution & recovery steps, (5) Action items to prevent recurrence. The goal is learning — not blame.",
    course: 4
  },

  /* ── Course 5 · IT Security ─────────────────────────────── */

  {
    q: "What does the 'I' in the CIA Triad stand for, and what does it mean?",
    options: [
      "Identity — confirming who a user is before granting access",
      "Integrity — keeping data accurate and untampered with",
      "Isolation — separating sensitive data from public systems",
      "Interoperability — ensuring systems can communicate securely"
    ],
    answer: 1,
    explanation: "The CIA Triad is Confidentiality, Integrity, and Availability. Integrity means data stays accurate and hasn't been modified without authorization — a file that's been secretly altered has lost its integrity.",
    course: 5
  },
  {
    q: "What distinguishes a worm from a virus?",
    options: [
      "A worm only targets Windows; a virus is cross-platform",
      "A virus encrypts files; a worm only deletes them",
      "A worm can self-replicate and spread through networks without needing a host program",
      "A worm requires user interaction to activate; a virus does not"
    ],
    answer: 2,
    explanation: "A virus attaches to an executable and needs that program to run before spreading. A worm is self-contained and can propagate across networks on its own without human interaction or a host file.",
    course: 5
  },
  {
    q: "Which type of malware disguises itself as legitimate software but performs malicious actions once installed?",
    options: [
      "Worm",
      "Ransomware",
      "Trojan",
      "Rootkit"
    ],
    answer: 2,
    explanation: "A Trojan (Trojan Horse) appears to be a useful program — a game, utility, etc. — but secretly carries a malicious payload. Unlike viruses, Trojans don't self-replicate.",
    course: 5
  },
  {
    q: "What is a rootkit, and what makes it particularly dangerous?",
    options: [
      "Malware that only affects the boot sector of a hard drive",
      "A collection of tools that operate at the root/admin level, hiding processes from detection",
      "Software that locks files and demands a ransom to restore access",
      "A type of spyware that captures only network traffic"
    ],
    answer: 1,
    explanation: "A rootkit gains elevated (root) privileges on a system and hides its own processes, files, and activity from the OS and security tools — making it very hard to detect with normal scans.",
    course: 5
  },
  {
    q: "A hacker sends SYN packets to a server but never completes the TCP handshake. What type of attack is this?",
    options: [
      "Ping of Death",
      "DNS Cache Poisoning",
      "SYN Flood",
      "Man-in-the-Middle"
    ],
    answer: 2,
    explanation: "A SYN Flood overwhelms a server by sending many TCP SYN requests without ever sending the final ACK, leaving connections half-open. The server runs out of resources waiting for completions that never come.",
    course: 5
  },
  {
    q: "An attacker poisons a DNS server so that requests for a legitimate website resolve to a malicious IP. What attack is this?",
    options: [
      "Evil Twin",
      "DNS Cache Poisoning",
      "Rogue Access Point",
      "ARP Spoofing"
    ],
    answer: 1,
    explanation: "DNS Cache Poisoning injects a fake DNS record into a resolver's cache. When users look up the legitimate domain, they receive the attacker's IP and are sent to a compromised server instead.",
    course: 5
  },
  {
    q: "What is the difference between a DoS attack and a DDoS attack?",
    options: [
      "DoS targets the network layer; DDoS targets the application layer",
      "DoS uses one source; DDoS uses many distributed sources (often a botnet)",
      "DDoS only affects wireless networks; DoS works on wired networks",
      "DoS is always permanent; DDoS only disrupts temporarily"
    ],
    answer: 1,
    explanation: "A Denial-of-Service attack comes from a single machine. A Distributed DoS uses a botnet — many compromised machines attacking simultaneously — making it much harder to block by IP.",
    course: 5
  },
  {
    q: "Which attack intercepts and potentially alters communication between two parties without their knowledge?",
    options: [
      "SQL Injection",
      "Brute Force",
      "Man-in-the-Middle (MITM)",
      "Tailgating"
    ],
    answer: 2,
    explanation: "A MITM attack places the attacker between two communicating parties. They can read, modify, or inject data — for example, intercepting login credentials on an unencrypted Wi-Fi connection.",
    course: 5
  },
  {
    q: "What best describes a phishing attack?",
    options: [
      "Guessing passwords by brute force until one works",
      "Installing malware on a device by leaving a USB drive where it will be found",
      "A fraudulent message (usually email) impersonating a trusted source to steal credentials or install malware",
      "Physically following an authorized person into a restricted area"
    ],
    answer: 2,
    explanation: "Phishing is the most common social engineering attack. The attacker impersonates a trusted entity (bank, IT department, etc.) to trick the victim into clicking a malicious link or revealing credentials.",
    course: 5
  },
  {
    q: "A targeted phishing campaign is aimed specifically at the CFO of a company. What is this called?",
    options: [
      "Whaling / Spear Phishing",
      "Vishing",
      "Baiting",
      "Pretexting"
    ],
    answer: 0,
    explanation: "Spear Phishing (or 'whaling' when targeting high-level executives) customizes the attack to a specific individual or group using personal details, making it far more convincing than generic phishing.",
    course: 5
  },
  {
    q: "Which password attack tries common dictionary words rather than every possible character combination?",
    options: [
      "Brute Force",
      "Rainbow Table Attack",
      "Dictionary Attack",
      "Credential Stuffing"
    ],
    answer: 2,
    explanation: "A dictionary attack is more efficient than brute force — it tests a pre-built list of common words, phrases, and passwords. It works because many users choose simple, guessable passwords.",
    course: 5
  },
  {
    q: "A website accepts user input in a search field and passes it directly to its SQL database. What vulnerability does this create?",
    options: [
      "Cross-Site Scripting (XSS)",
      "SQL Injection",
      "DNS Cache Poisoning",
      "Buffer Overflow"
    ],
    answer: 1,
    explanation: "SQL Injection occurs when unsanitized user input is passed directly to a SQL query. An attacker can input SQL commands to dump the database, bypass authentication, or delete records. Always sanitize and parameterize inputs.",
    course: 5
  },

  /* ── Course 5 · Cryptography (Module 2) ────────────────── */

  {
    q: "According to Kerckhoffs's principle, what must remain secret for a cryptographic system to be secure?",
    options: [
      "The encryption algorithm used",
      "Only the key — the system should be secure even if everything else is public knowledge",
      "The cipher type (block vs stream)",
      "The length of the plaintext message"
    ],
    answer: 1,
    explanation: "Kerckhoffs's principle: a crypto system should remain secure even if everything about it is public, except the key. This directly opposes 'Security Through Obscurity,' which is considered a flawed design philosophy.",
    course: 5
  },
  {
    q: "Why is a random salt added to a password before hashing it?",
    options: [
      "Salting speeds up the hashing process for faster logins",
      "Salting extends the output hash to make it longer",
      "Salting makes each hash unique, rendering precomputed rainbow tables useless",
      "Salting allows the original password to be recovered if forgotten"
    ],
    answer: 2,
    explanation: "A salt is random data appended to the password before hashing. Two users with identical passwords get different hashes because their salts differ. This invalidates rainbow tables, which rely on precomputed hash → password mappings.",
    course: 5
  },
  {
    q: "During a TLS handshake, why does the protocol switch from asymmetric to symmetric encryption for the actual data transfer?",
    options: [
      "Asymmetric encryption is not secure enough for bulk data transfer",
      "Symmetric ciphers are far faster — asymmetric is only used to securely exchange the session key",
      "TLS certificates expire after the handshake phase completes",
      "Symmetric encryption provides stronger server authentication than asymmetric"
    ],
    answer: 1,
    explanation: "Asymmetric encryption (RSA/ECDH) is computationally expensive — ideal for securely exchanging a small session key but too slow for streaming data. Once the handshake establishes a shared secret, the connection switches to fast symmetric encryption (AES-GCM) for bulk transfer.",
    course: 5
  },
  {
    q: "What is the primary purpose of a digital certificate (e.g., an SSL/TLS server certificate)?",
    options: [
      "To encrypt the data sent between a client and server",
      "To prove that an entity owns a specific public key, verified by a trusted Certificate Authority",
      "To store the server's private key for use during the TLS handshake",
      "To define which cipher suite the web server will use"
    ],
    answer: 1,
    explanation: "A digital certificate binds a public key to an identity (domain name, organization) and is signed by a trusted CA. When your browser visits an HTTPS site, the certificate proves you're talking to the real server — not an imposter.",
    course: 5
  },
  {
    q: "Which hashing algorithm is currently recommended for security-sensitive use?",
    options: [
      "MD5 — fastest and most widely supported",
      "SHA-1 — the standard replacement for MD5",
      "SHA-256 (SHA-2 family) — current NIST recommendation",
      "DES — used when both hashing and encryption are needed"
    ],
    answer: 2,
    explanation: "MD5 and SHA-1 are both deprecated — susceptible to collision attacks. SHA-2 (SHA-256, SHA-512) and SHA-3 are the current standards recommended since 2010. DES is a symmetric encryption algorithm, not a hash function.",
    course: 5
  },

  /* ── Mixed · Additional Questions ───────────────────────── */

  {
    q: "A CPU is listed as having 6 cores and 12 threads. What technology enables two threads per core?",
    options: [
      "Turbo Boost",
      "Hyper-Threading (SMT)",
      "Out-of-order execution",
      "Overclocking"
    ],
    answer: 1,
    explanation: "Hyper-Threading (Intel) / SMT (AMD) allows each physical core to present itself as two logical processors. The OS can schedule two threads simultaneously per core, improving throughput for parallel workloads.",
    course: 1
  },
  {
    q: "What is the key advantage of UEFI over legacy BIOS?",
    options: [
      "UEFI uses less power during the boot process",
      "UEFI supports drives larger than 2 TB, faster boot times, and Secure Boot",
      "UEFI allows the OS to load without a bootloader",
      "UEFI replaces RAM with firmware-based memory during POST"
    ],
    answer: 1,
    explanation: "Legacy BIOS uses MBR, which caps bootable drive size at 2 TB and has no security features. UEFI uses GPT (no size limit), boots faster, and supports Secure Boot — which verifies that bootloader code hasn't been tampered with.",
    course: 1
  },
  {
    q: "A host has IP 192.168.10.50/26. What is the network address of its subnet?",
    options: [
      "192.168.10.0",
      "192.168.10.32",
      "192.168.10.48",
      "192.168.10.64"
    ],
    answer: 0,
    explanation: "/26 = 255.255.255.192, giving blocks of 64: .0, .64, .128, .192. Host .50 falls in the .0–.63 block, so the network address is 192.168.10.0 and the broadcast is 192.168.10.63.",
    course: 2
  },
  {
    q: "What does the ARP protocol do, and at which OSI layer does it operate?",
    options: [
      "Translates domain names to IP addresses; Layer 7",
      "Maps IP addresses to MAC addresses so frames can be delivered on a local network; Layer 2/3 boundary",
      "Assigns IP addresses automatically to devices on a network; Layer 3",
      "Encrypts traffic between two hosts on the same subnet; Layer 4"
    ],
    answer: 1,
    explanation: "ARP (Address Resolution Protocol) resolves a known IP address to the MAC address needed to build an Ethernet frame. It sits at the Layer 2/3 boundary — it uses IP addresses as input but produces a Layer 2 MAC address as output.",
    course: 2
  },
  {
    q: "A Linux file shows permissions -rwxr-x---. Who can execute this file?",
    options: [
      "Everyone on the system",
      "The owner and members of the file's group",
      "Only the owner",
      "The owner and all others, but not the group"
    ],
    answer: 1,
    explanation: "Permissions break into owner (rwx), group (r-x), others (---). The owner can read/write/execute; the group can read/execute; others have no access. So both the owner and group members can execute it.",
    course: 3
  },
  {
    q: "What is the Windows Registry and what is it used for?",
    options: [
      "A log file that tracks all login attempts and system errors",
      "A hierarchical database storing OS and application configuration settings",
      "A list of all installed software packages managed by Windows Update",
      "A backup of the MBR and boot sector created during OS installation"
    ],
    answer: 1,
    explanation: "The Windows Registry is a centralized hierarchical database (HKEY_* hives) that stores configuration for the OS, hardware, and applications. Settings like startup programs, file associations, and user preferences all live here.",
    course: 3
  },
  {
    q: "What are the four steps of the DHCP lease process in order?",
    options: [
      "Discover → Offer → Request → Acknowledge",
      "Request → Offer → Discover → Acknowledge",
      "Offer → Discover → Acknowledge → Request",
      "Discover → Request → Offer → Acknowledge"
    ],
    answer: 0,
    explanation: "DORA: the client broadcasts a Discover; the server responds with an Offer; the client sends a Request for that offer; the server sends an Acknowledge confirming the lease. The client now has a valid IP for the lease duration.",
    course: 4
  },
  {
    q: "A server uses RAID 5 across 4 drives of 2 TB each. How much usable storage is available?",
    options: [
      "8 TB",
      "6 TB",
      "4 TB",
      "2 TB"
    ],
    answer: 1,
    explanation: "RAID 5 uses one drive's worth of space for distributed parity regardless of the number of drives. With 4 × 2 TB = 8 TB raw, 2 TB is reserved for parity, leaving 6 TB usable. It can survive one drive failure.",
    course: 4
  },
  {
    q: "An attacker sets up a Wi-Fi network named 'CoffeeShop_Free' that mimics the real café network. Users connect and their traffic is intercepted. What two attack types are in play?",
    options: [
      "Rogue AP and DNS Cache Poisoning",
      "Evil Twin and Man-in-the-Middle",
      "SYN Flood and Phishing",
      "Tailgating and Spear Phishing"
    ],
    answer: 1,
    explanation: "The fake network mimicking a legitimate one is an Evil Twin attack. Once users connect, the attacker can intercept all traffic — a Man-in-the-Middle attack. These two are commonly combined: the evil twin creates the position; MITM is what the attacker does with it.",
    course: 5
  },

  /* ── A+ / Mixed · Hardware, Networking & OS ─────────────── */

  {
    q: "What is the key difference between single-mode and multi-mode fiber optic cable?",
    options: [
      "Single-mode uses electrical signals; multi-mode uses light pulses",
      "Single-mode has a smaller core (~9 µm) and supports much longer runs; multi-mode has a larger core and is used inside buildings",
      "Multi-mode supports 10 Gbps maximum; single-mode tops out at 1 Gbps",
      "Single-mode uses copper at its core; multi-mode is pure glass"
    ],
    answer: 1,
    explanation: "Single-mode fiber (SMF) carries one light ray down its tiny ~9 µm core, reaching tens of kilometers — used for WAN and inter-building links. Multi-mode (MMF) has a larger ~50–62.5 µm core for up to ~550m and is common inside data centers and office buildings.",
    course: 2
  },
  {
    q: "What IEEE standard defines Wi-Fi 6, and what is its primary improvement over Wi-Fi 5 in dense environments?",
    options: [
      "802.11ac; Wi-Fi 6 doubles range by using lower frequencies",
      "802.11ax; Wi-Fi 6 uses OFDMA to split channels and serve multiple clients simultaneously",
      "802.11n; Wi-Fi 6 adds MU-MIMO but drops backward compatibility",
      "802.11ad; Wi-Fi 6 operates exclusively on the 60 GHz band"
    ],
    answer: 1,
    explanation: "Wi-Fi 6 = 802.11ax (Wi-Fi 5 = 802.11ac). OFDMA (Orthogonal Frequency Division Multiple Access) subdivides a channel into smaller sub-channels, letting one transmission serve multiple devices at once — a major efficiency gain in offices, stadiums, and apartments.",
    course: 2
  },
  {
    q: "You need maximum read/write speed for video editing scratch disks and are not concerned about data redundancy. Which RAID level is most appropriate?",
    options: [
      "RAID 1 — mirroring provides the fastest write speeds",
      "RAID 5 — parity protection maximizes throughput on reads",
      "RAID 0 — striping splits data across all drives for maximum speed with zero overhead",
      "RAID 6 — dual parity enables the fastest rebuilds after failure"
    ],
    answer: 2,
    explanation: "RAID 0 stripes data across all drives — reads and writes are split simultaneously, maximizing throughput. The trade-off: zero redundancy. If any drive fails, all data is lost. Chosen purely for speed when data is ephemeral or backed up elsewhere.",
    course: 4
  },
  {
    q: "What is the purpose of QoS (Quality of Service) on a network?",
    options: [
      "To encrypt sensitive traffic and give it a dedicated tunnel",
      "To prioritize latency-sensitive traffic (e.g., VoIP, video) so it gets bandwidth and low latency even under congestion",
      "To monitor all traffic and alert administrators to unusual patterns",
      "To balance load evenly across all connected devices regardless of traffic type"
    ],
    answer: 1,
    explanation: "QoS marks and prioritizes traffic classes. VoIP and video conferencing are latency-sensitive — even 200ms of jitter makes calls degrade. QoS ensures those packets skip the queue under congestion while bulk downloads can wait, improving user experience without adding bandwidth.",
    course: 2
  },
  {
    q: "A Windows machine crashes and displays a blue screen with a stop code like PAGE_FAULT_IN_NONPAGED_AREA. What does this indicate?",
    options: [
      "A POST failure — the hardware check at startup found a critical error before the OS loaded",
      "A BSOD (Stop Error) — the Windows kernel hit an unrecoverable error and halted to prevent data corruption",
      "A kernel panic — exclusive to Linux systems running Windows apps in compatibility mode",
      "A memory dump only — Windows automatically restarts immediately with no lasting effect"
    ],
    answer: 1,
    explanation: "A BSOD (Blue Screen of Death / Stop Error) means the Windows kernel encountered a critical, unrecoverable error — usually a faulty driver, hardware failure, or memory corruption. The system halts immediately. The stop code identifies the root cause for troubleshooting.",
    course: 3
  }
];
