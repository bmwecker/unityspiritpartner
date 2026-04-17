import type { ServicePageData } from "@/pages/ServicePage";

export const aiAutomationData: ServicePageData = {
  badge: "🚀 10–14 Day Pilot Programs",
  title: "AI-Powered Workflow Automation That Eliminates",
  titleHighlight: "Repetitive Operations",
  subtitle: "Deploy intelligent automation systems that handle order processing, data entry, document routing, and system integrations—delivering measurable ROI in weeks, not months.",
  description: "Our AI automation systems integrate directly with your existing tools and workflows. We build production-grade automation infrastructure with monitoring, logging, security controls, and documentation from day one.",
  capabilities: [
    { title: "Process Orchestration", desc: "End-to-end workflow automation that connects systems, routes data, and executes multi-step business processes without manual intervention.", icon: "⚙️" },
    { title: "Intelligent Decision-Making", desc: "AI-driven routing, classification, and decision logic that handles exceptions and edge cases your rule-based systems can't.", icon: "🧠" },
    { title: "Real-Time Monitoring", desc: "24/7 system health dashboards, error alerting, and performance metrics so you always know your automation is running.", icon: "📊" },
    { title: "Security-First Architecture", desc: "Least privilege access, credential vaulting, audit logging, and encrypted data handling built into every automation.", icon: "🔒" },
  ],
  useCases: [
    { label: "Order Processing", before: "Manual data entry from emails and PDFs into ERP. 4-6 hours daily, frequent errors, delayed fulfillment.", after: "Automated extraction, validation, and ERP entry. Orders processed in minutes with 99.5% accuracy.", impact: "85% time reduction · 95% fewer errors" },
    { label: "Invoice Reconciliation", before: "Staff manually matching invoices to POs across multiple systems. 3 days per cycle, audit risk.", after: "Automated 3-way matching with exception flagging. Same-day reconciliation with full audit trail.", impact: "90% faster processing · Complete audit compliance" },
    { label: "Ticket Routing & Triage", before: "Support tickets manually read, categorized, and assigned. Slow response, inconsistent routing.", after: "AI classification and priority scoring with auto-assignment to correct teams within seconds.", impact: "70% faster first response · 40% fewer misroutes" },
  ],
  processSteps: [
    { step: "Discovery & Audit", days: "Days 1-3", desc: "Map your current workflows, identify automation opportunities, and build a prioritized roadmap." },
    { step: "Architecture & Design", days: "Days 4-6", desc: "Design the automation architecture with security controls, error handling, and monitoring." },
    { step: "Pilot Build", days: "Days 7-10", desc: "Build and test your first automation with real data in a secure staging environment." },
    { step: "Validation & Handoff", days: "Days 11-13", desc: "Validate results, document the system, and train your team on monitoring." },
    { step: "Go Live & Monitor", days: "Day 14+", desc: "Deploy to production with full monitoring, alerting, and support." },
  ],
  techStack: [
    { title: "Integration Layer", items: ["REST APIs", "Webhooks", "Database connectors", "File system watchers", "Email parsers", "ERP integrations"] },
    { title: "AI/ML Processing", items: ["Document OCR", "NLP classification", "Entity extraction", "Sentiment analysis", "Pattern recognition", "Anomaly detection"] },
    { title: "Orchestration", items: ["Workflow engines", "Queue management", "Retry logic", "Error handling", "Parallel processing", "State management"] },
    { title: "Security & Monitoring", items: ["Credential vaulting", "Audit logging", "Encryption at rest/transit", "Role-based access", "Health dashboards", "Alerting systems"] },
  ],
  whyChoose: [
    { title: "Production-Grade Systems", desc: "Not scripts. Not demos. Full production automation with monitoring, logging, documentation, and support." },
    { title: "Security-First Always", desc: "Every automation includes least privilege access, credential vaulting, audit logging, and encrypted handling." },
    { title: "Rapid Time to Value", desc: "First automation delivered in 10-14 days. See measurable ROI within the first month." },
    { title: "Long-Term Partnership", desc: "Systems designed to scale with your operations. We're your automation infrastructure partner." },
  ],
  faqs: [
    { q: "How long does the first automation take?", a: "Our pilot programs deliver the first production automation in 10-14 days, including discovery, build, testing, and deployment." },
    { q: "Will this work with our existing systems?", a: "Yes. We integrate with your current ERP, CRM, databases, email systems, and other tools. No rip-and-replace required." },
    { q: "How do you handle sensitive data?", a: "Security is built in from day one: credential vaulting, least privilege access, audit logging, encryption, and environment separation." },
    { q: "What happens if the automation breaks?", a: "Every system includes real-time monitoring, automated alerting, error handling with retry logic, and documented escalation procedures." },
    { q: "What's the typical ROI?", a: "Clients typically see 30-70% time savings on automated processes. Most achieve full ROI within 3 months of deployment." },
    { q: "How is pricing structured?", a: "Engagements range from $25,000 to $100,000+ depending on scope. We provide detailed proposals after the initial audit." },
  ],
};

export const customBotsData: ServicePageData = {
  badge: "🤖 24/7 Intelligent Operations",
  title: "Custom Bots That Run Your",
  titleHighlight: "Operations",
  subtitle: "Purpose-built bots for data collection, process automation, customer interactions, and system monitoring—running 24/7 with enterprise security.",
  description: "Our bots aren't off-the-shelf chat widgets. They're custom-built operational systems designed for your specific workflows, integrated with your existing infrastructure, and monitored around the clock.",
  capabilities: [
    { title: "Data Collection Bots", desc: "Automated data gathering from websites, portals, APIs, and documents with validation and deduplication.", icon: "📥" },
    { title: "Process Automation Bots", desc: "Multi-step workflow bots that handle approvals, notifications, data routing, and system updates.", icon: "🔄" },
    { title: "Integration Bots", desc: "Bots that bridge legacy systems with modern platforms, syncing data and triggering actions across your stack.", icon: "🔗" },
    { title: "Monitoring & Alert Bots", desc: "Real-time system monitoring with intelligent alerting, escalation, and automated incident response.", icon: "🔔" },
  ],
  useCases: [
    { label: "Competitor Price Monitoring", before: "Manual competitor research. Weekly spreadsheets, outdated data, missed price changes.", after: "Automated daily price capture across 50+ competitors with trend analysis and instant alerts.", impact: "Real-time intelligence · 100% coverage" },
    { label: "Document Processing Bot", before: "Staff manually reviewing 200+ documents daily. Slow processing, inconsistent categorization.", after: "Bot reads, classifies, extracts key data, and routes documents to the right team in seconds.", impact: "95% faster processing · 99% classification accuracy" },
    { label: "System Health Monitor", before: "Reactive troubleshooting after users report issues. Downtime costs revenue and trust.", after: "24/7 monitoring bot checks system health every 60 seconds, auto-restarts services, escalates issues.", impact: "99.9% uptime · 80% fewer support tickets" },
  ],
  processSteps: [
    { step: "Requirements Workshop", days: "Days 1-2", desc: "Define bot objectives, data sources, integration points, and success metrics." },
    { step: "Bot Architecture", days: "Days 3-5", desc: "Design bot logic, error handling, rate limiting, and security controls." },
    { step: "Development & Testing", days: "Days 6-10", desc: "Build the bot with comprehensive testing against real-world scenarios." },
    { step: "Staging Deployment", days: "Days 11-12", desc: "Deploy to staging environment for validation with your team." },
    { step: "Production Launch", days: "Days 13-14", desc: "Go live with full monitoring, alerting, and documentation." },
  ],
  techStack: [
    { title: "Bot Frameworks", items: ["Headless browsers", "API clients", "Queue processors", "Scheduler engines", "State machines", "Event handlers"] },
    { title: "Data Processing", items: ["HTML parsing", "PDF extraction", "Image recognition", "Text classification", "Data normalization", "Deduplication"] },
    { title: "Infrastructure", items: ["Container orchestration", "Auto-scaling", "Load balancing", "Health checks", "Log aggregation", "Metric collection"] },
    { title: "Security", items: ["Proxy rotation", "Rate limiting", "Credential vaulting", "IP allowlisting", "Audit trails", "Encryption"] },
  ],
  whyChoose: [
    { title: "Custom-Built, Not Off-the-Shelf", desc: "Every bot is purpose-built for your specific operational needs, not a generic template." },
    { title: "Production Reliability", desc: "Built for 24/7 operation with monitoring, auto-recovery, and guaranteed uptime SLAs." },
    { title: "Ethical & Compliant", desc: "All bots respect rate limits, terms of service, and data privacy regulations." },
    { title: "Scalable Architecture", desc: "Bots designed to scale from handling 100 to 100,000+ operations without architecture changes." },
  ],
  faqs: [
    { q: "Can bots work with legacy systems?", a: "Yes. Our bots can interact with any system that has a web interface, API, database, file system, or email integration." },
    { q: "How do you handle bot failures?", a: "Every bot includes retry logic, error handling, dead letter queues, automated alerting, and documented escalation procedures." },
    { q: "Are bots compliant with data regulations?", a: "Yes. We build compliance into the architecture with data handling policies, access controls, and audit logging." },
    { q: "Can I monitor what my bots are doing?", a: "Absolutely. Every bot includes real-time dashboards showing status, throughput, errors, and performance metrics." },
    { q: "What if our requirements change?", a: "Bots are built with modular architectures that allow quick updates to logic, data sources, and integrations." },
    { q: "How fast can a bot be deployed?", a: "Simple bots can be live in 5-7 days. Complex multi-system bots typically take 10-14 days." },
  ],
};

export const dataExtractionData: ServicePageData = {
  badge: "📊 Structured Data Pipelines",
  title: "Transform Unstructured Data Into",
  titleHighlight: "Operational Intelligence",
  subtitle: "Convert PDFs, emails, forms, and web data into structured, validated operational data that flows directly into your systems.",
  description: "We build data extraction pipelines that turn your unstructured chaos into clean, reliable data. PDF to ERP. Email to CRM. Forms to database. Web to dashboard. All with validation, error handling, and security built in.",
  capabilities: [
    { title: "Document Extraction", desc: "Intelligent extraction from PDFs, invoices, purchase orders, contracts, and scanned documents with OCR.", icon: "📄" },
    { title: "Email Parsing", desc: "Automated email processing that extracts structured data from messages, attachments, and forwarded chains.", icon: "📧" },
    { title: "Web Data Collection", desc: "Reliable data collection from websites, portals, and web applications with anti-fragility built in.", icon: "🌐" },
    { title: "Data Validation", desc: "Multi-layer validation with business rules, format checking, cross-referencing, and anomaly detection.", icon: "✅" },
  ],
  useCases: [
    { label: "PDF Order → ERP Entry", before: "Manually reading 100+ PDF orders daily, typing data into ERP. 6 hours of data entry, 5% error rate.", after: "Automated PDF extraction with validation, direct ERP integration. Orders processed in real-time.", impact: "95% time savings · 99.5% accuracy" },
    { label: "Email → CRM Updates", before: "Sales team manually copying email data into CRM fields. Inconsistent updates, missed opportunities.", after: "Automatic email parsing, contact extraction, and CRM field updates with deduplication.", impact: "100% capture rate · Zero manual entry" },
    { label: "Multi-Source Reporting", before: "Weekly reports compiled manually from 5+ systems. 2 days to produce, often outdated on delivery.", after: "Automated data aggregation and dashboard updates. Real-time reporting across all sources.", impact: "Real-time insights · 2 days saved weekly" },
  ],
  processSteps: [
    { step: "Data Source Audit", days: "Days 1-3", desc: "Map all data sources, formats, volumes, and quality issues. Identify extraction priorities." },
    { step: "Pipeline Design", days: "Days 4-6", desc: "Design extraction logic, validation rules, transformation mappings, and error handling." },
    { step: "Build & Test", days: "Days 7-10", desc: "Build extraction pipeline with comprehensive testing against sample data sets." },
    { step: "Integration & Validation", days: "Days 11-13", desc: "Connect to destination systems, validate end-to-end data flow, and verify accuracy." },
    { step: "Production Deploy", days: "Day 14+", desc: "Go live with monitoring, alerting, and data quality dashboards." },
  ],
  techStack: [
    { title: "Extraction Engines", items: ["OCR processing", "PDF parsers", "HTML extractors", "Email processors", "Image recognition", "Regex patterns"] },
    { title: "Validation & Transform", items: ["Schema validation", "Business rules", "Format normalization", "Deduplication", "Cross-referencing", "Anomaly detection"] },
    { title: "Delivery & Storage", items: ["API delivery", "Database writes", "File generation", "Queue messaging", "Batch processing", "Stream processing"] },
    { title: "Quality & Security", items: ["Data quality scores", "Audit logging", "Encryption", "Access controls", "Error tracking", "SLA monitoring"] },
  ],
  whyChoose: [
    { title: "End-to-End Pipelines", desc: "Not just extraction—full pipelines from raw source to validated data in your target system." },
    { title: "Anti-Fragile Design", desc: "Pipelines that handle format changes, missing fields, and edge cases without breaking." },
    { title: "Data Quality Guarantees", desc: "Multi-layer validation ensures your operational data is accurate, complete, and reliable." },
    { title: "Source Agnostic", desc: "Extract from any source: PDFs, emails, websites, APIs, databases, spreadsheets, and more." },
  ],
  faqs: [
    { q: "What document formats can you extract from?", a: "We handle PDFs, Excel, CSV, Word, images (via OCR), emails, HTML, JSON, XML, and most structured/unstructured formats." },
    { q: "How accurate is the extraction?", a: "Typical accuracy is 95-99.5% depending on source quality. Multi-layer validation catches and flags edge cases for review." },
    { q: "Can you handle high volumes?", a: "Yes. Pipelines are built with queue-based architectures that scale to handle thousands of documents per hour." },
    { q: "What if the source format changes?", a: "Anti-fragile extraction adapts to minor changes automatically. Major changes trigger alerts and quick updates." },
    { q: "How is extracted data secured?", a: "All data is encrypted in transit and at rest. Access is role-based with full audit logging." },
    { q: "Can you extract from scanned documents?", a: "Yes. We use advanced OCR with pre-processing to extract text from scanned documents and images." },
  ],
};

export const cybersecurityData: ServicePageData = {
  badge: "🛡️ Security-First Architecture",
  title: "Cybersecurity That Protects Your",
  titleHighlight: "Automation Infrastructure",
  subtitle: "Security architecture built into every layer of your automation systems—from credential management to audit logging to compliance controls.",
  description: "We don't bolt security on after the fact. Every automation system we build includes security architecture from day one: least privilege access, credential vaulting, audit logging, encryption, and environment separation.",
  capabilities: [
    { title: "Security Architecture", desc: "Comprehensive security design for your automation infrastructure including threat modeling and risk assessment.", icon: "🏗️" },
    { title: "Access Control", desc: "Least privilege access models, role-based permissions, and credential vaulting for all automation systems.", icon: "🔑" },
    { title: "Audit & Compliance", desc: "Complete audit logging, compliance reporting, and evidence collection for regulatory requirements.", icon: "📋" },
    { title: "Incident Response", desc: "Automated threat detection, alerting, and response procedures for your automation infrastructure.", icon: "🚨" },
  ],
  useCases: [
    { label: "Automation Security Audit", before: "Automation scripts running with admin credentials, no logging, no monitoring. Security blind spots.", after: "Full security audit with least privilege implementation, credential vaulting, and audit trail.", impact: "100% visibility · Zero shared credentials" },
    { label: "Compliance Automation", before: "Manual compliance evidence collection taking weeks. Gap analysis done annually, often outdated.", after: "Automated evidence collection, continuous monitoring, and real-time compliance dashboards.", impact: "90% faster audits · Continuous compliance" },
    { label: "Credential Management", before: "Passwords in code, shared accounts, no rotation. Major breach risk across automation systems.", after: "Centralized credential vault with automatic rotation, access logging, and least privilege.", impact: "Zero hardcoded credentials · Full audit trail" },
  ],
  processSteps: [
    { step: "Security Assessment", days: "Days 1-3", desc: "Audit existing automation security posture, identify vulnerabilities, and prioritize remediation." },
    { step: "Architecture Design", days: "Days 4-6", desc: "Design security architecture including access models, encryption strategy, and monitoring." },
    { step: "Implementation", days: "Days 7-10", desc: "Implement security controls, credential vaulting, audit logging, and monitoring systems." },
    { step: "Testing & Validation", days: "Days 11-13", desc: "Security testing, penetration testing concepts, and validation of all controls." },
    { step: "Documentation & Training", days: "Day 14+", desc: "Comprehensive documentation, team training, and ongoing monitoring setup." },
  ],
  techStack: [
    { title: "Identity & Access", items: ["RBAC implementation", "SSO integration", "MFA enforcement", "Service accounts", "API key management", "Session management"] },
    { title: "Data Protection", items: ["Encryption at rest", "Encryption in transit", "Key management", "Data classification", "PII handling", "Backup encryption"] },
    { title: "Monitoring & Detection", items: ["SIEM integration", "Log aggregation", "Anomaly detection", "Threat alerting", "Incident tracking", "Forensics tools"] },
    { title: "Compliance", items: ["Policy automation", "Evidence collection", "Audit reporting", "Risk scoring", "Vendor assessment", "Regulatory mapping"] },
  ],
  whyChoose: [
    { title: "Security by Design", desc: "Security built into architecture from day one, not bolted on after deployment." },
    { title: "NDA-Friendly Engagements", desc: "All engagements operate under NDA. Your data and systems are treated with absolute confidentiality." },
    { title: "Automation-Specific Security", desc: "We specialize in securing automation infrastructure—not generic IT security." },
    { title: "Practical, Not Theoretical", desc: "Actionable security controls that work in production, not checkbox compliance exercises." },
  ],
  faqs: [
    { q: "Is this a replacement for our IT security team?", a: "No. We specialize in securing automation infrastructure specifically. We complement your existing security team." },
    { q: "Do you do penetration testing?", a: "We provide security architecture and testing concepts for automation systems. For full penetration testing, we partner with specialized firms." },
    { q: "Can you help with compliance?", a: "Yes. We help automate compliance evidence collection and build continuous monitoring for regulatory requirements." },
    { q: "Do you sign NDAs?", a: "Absolutely. All engagements operate under NDA by default. Client confidentiality is non-negotiable." },
    { q: "What regulations do you support?", a: "We design controls that map to SOC 2, HIPAA, PCI-DSS, GDPR, and industry-specific frameworks." },
    { q: "How do you handle existing security gaps?", a: "We provide a prioritized remediation roadmap and can implement fixes as part of the engagement." },
  ],
};

export const technicalSeoData: ServicePageData = {
  badge: "🔍 Automated Search Optimization",
  title: "Technical SEO Integrated With Your",
  titleHighlight: "Digital Infrastructure",
  subtitle: "Automated technical SEO monitoring, optimization, and reporting at scale—integrated directly into your operations workflow.",
  description: "Technical SEO shouldn't be a manual monthly task. We build automated SEO monitoring and optimization systems that continuously analyze, report, and improve your search performance with zero manual effort.",
  capabilities: [
    { title: "Technical Auditing", desc: "Automated crawling and analysis of your site architecture, performance, schema markup, and indexability.", icon: "🔎" },
    { title: "Performance Optimization", desc: "Core Web Vitals monitoring, image optimization, caching strategies, and load time improvements.", icon: "⚡" },
    { title: "Schema & Structured Data", desc: "Automated schema markup generation, validation, and deployment for rich search results.", icon: "📐" },
    { title: "Monitoring & Alerts", desc: "24/7 SEO health monitoring with instant alerts for ranking drops, crawl errors, and technical issues.", icon: "📈" },
  ],
  useCases: [
    { label: "Automated SEO Monitoring", before: "Monthly manual SEO audits. Issues discovered weeks after they start impacting rankings.", after: "Real-time monitoring catches issues within hours. Automated alerts trigger before ranking impact.", impact: "24/7 monitoring · 90% faster issue detection" },
    { label: "Schema Automation", before: "Manual schema markup creation and updates. Inconsistent implementation across 1000+ pages.", after: "Automated schema generation from product data, validated and deployed across all pages.", impact: "100% schema coverage · Zero manual markup" },
    { label: "Competitive Intelligence", before: "Quarterly competitor analysis done manually. Static reports, delayed insights.", after: "Continuous competitor monitoring with automated ranking comparisons and gap analysis.", impact: "Real-time intelligence · Weekly strategy updates" },
  ],
  processSteps: [
    { step: "Technical Audit", days: "Days 1-3", desc: "Complete technical SEO audit of your site covering 200+ ranking factors and technical elements." },
    { step: "Strategy & Prioritization", days: "Days 4-5", desc: "Prioritize improvements by impact and effort. Build optimization roadmap." },
    { step: "Implementation", days: "Days 6-10", desc: "Deploy technical fixes, monitoring systems, and automation infrastructure." },
    { step: "Monitoring Setup", days: "Days 11-12", desc: "Configure dashboards, alerts, and automated reporting systems." },
    { step: "Optimization Loop", days: "Day 13+", desc: "Continuous monitoring, automated optimization, and monthly performance reviews." },
  ],
  techStack: [
    { title: "Crawling & Analysis", items: ["Custom crawlers", "Lighthouse automation", "Log file analysis", "Sitemap processing", "Redirect chain detection", "Duplicate content analysis"] },
    { title: "Performance Tools", items: ["Core Web Vitals", "Image optimization", "CDN configuration", "Cache management", "Code splitting", "Resource prioritization"] },
    { title: "Data & Reporting", items: ["Search Console API", "Analytics integration", "Custom dashboards", "Automated reports", "Trend analysis", "Forecasting models"] },
    { title: "Automation", items: ["Schema generators", "Meta tag automation", "Sitemap management", "Redirect automation", "Content optimization", "Link monitoring"] },
  ],
  whyChoose: [
    { title: "Automation, Not Agency Work", desc: "We build SEO systems that run automatically, not monthly retainer work that depends on human effort." },
    { title: "Integrated With Operations", desc: "SEO monitoring integrated into your existing operations dashboards and alerting systems." },
    { title: "Data-Driven Decisions", desc: "Every recommendation backed by data. No guesswork, no vanity metrics." },
    { title: "Scalable Infrastructure", desc: "SEO automation that scales from 100 pages to 100,000+ without additional manual effort." },
  ],
  faqs: [
    { q: "Do you do content SEO or just technical?", a: "We specialize in technical SEO and the automation infrastructure around it. Content strategy is handled by your team or marketing partners." },
    { q: "How fast will we see ranking improvements?", a: "Technical fixes typically show impact within 2-8 weeks depending on crawl frequency and competition." },
    { q: "Can you integrate with our existing analytics?", a: "Yes. We integrate with Google Search Console, Analytics, and your existing reporting tools." },
    { q: "What's the difference from an SEO agency?", a: "We build automated systems, not manual monthly work. Our systems run 24/7 and scale without adding headcount." },
    { q: "Do you guarantee rankings?", a: "No one can guarantee specific rankings. We guarantee production-grade SEO infrastructure that maximizes your technical performance." },
    { q: "How do you handle multi-language sites?", a: "Our systems handle hreflang, localized sitemaps, and multi-region technical requirements automatically." },
  ],
};
