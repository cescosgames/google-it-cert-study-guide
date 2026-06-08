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
];
