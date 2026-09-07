import { KnowledgeDocument } from "@/types";

export const SAMPLE_DOCUMENTS: KnowledgeDocument[] = [
  {
    id: "doc-sla-2026",
    title: "CloudMesh Enterprise SLA & Service Level Agreement 2026",
    category: "Enterprise SLA",
    description: "Official enterprise infrastructure commitment covering 99.99% uptime, failover RTO/RPO, and financial credit formulas.",
    fileSize: "1.4 MB",
    pageCount: 3,
    updatedAt: "March 2026",
    pages: [
      {
        pageNumber: 1,
        title: "Section 1: Service Commitment & High Availability Topology",
        text: `1.1 Service Commitment & Scope
CloudMesh Inc. commits to providing an Annual Uptime Percentage of at least 99.99% for all production enterprise instances. Our global edge infrastructure is deployed across dual active-active multi-region clusters (us-east-1 and eu-central-1) fronted by Cloudflare Enterprise Anycast routing.

1.2 Scheduled Maintenance Windows
Planned system maintenance is strictly scheduled during off-peak hours on Sunday mornings between 02:00 UTC and 04:00 UTC. Customers will receive automated email notification at least 14 business days in advance. Scheduled maintenance is excluded from downtime calculations provided it does not exceed 120 minutes per calendar month.

1.3 Unscheduled Service Outages & Automatic Failover
In the event of an unscheduled compute degradation or database shard failure, CloudMesh automated health checkers trigger DNS failover within 120 seconds. Secondary replica clusters in alternate availability zones immediately assume read-write traffic without loss of transactional state.`,
        chunks: [
          {
            id: "chunk-sla-1",
            documentId: "doc-sla-2026",
            pageNumber: 1,
            paragraphIndex: 1,
            text: "CloudMesh Inc. commits to providing an Annual Uptime Percentage of at least 99.99% for all production enterprise instances. Our global edge infrastructure is deployed across dual active-active multi-region clusters (us-east-1 and eu-central-1) fronted by Cloudflare Enterprise Anycast routing.",
            tokenCount: 52,
          },
          {
            id: "chunk-sla-2",
            documentId: "doc-sla-2026",
            pageNumber: 1,
            paragraphIndex: 2,
            text: "Planned system maintenance is strictly scheduled during off-peak hours on Sunday mornings between 02:00 UTC and 04:00 UTC. Customers will receive automated email notification at least 14 business days in advance. Scheduled maintenance is excluded from downtime calculations provided it does not exceed 120 minutes per calendar month.",
            tokenCount: 64,
          },
          {
            id: "chunk-sla-3",
            documentId: "doc-sla-2026",
            pageNumber: 1,
            paragraphIndex: 3,
            text: "In the event of an unscheduled compute degradation or database shard failure, CloudMesh automated health checkers trigger DNS failover within 120 seconds. Secondary replica clusters in alternate availability zones immediately assume read-write traffic without loss of transactional state.",
            tokenCount: 48,
          },
        ],
      },
      {
        pageNumber: 2,
        title: "Section 2: Service Credit Tiers, RTO & RPO Penalties",
        text: `2.1 Service Credit Schedule
If CloudMesh fails to meet the Guaranteed Uptime Percentage in any calendar month, the customer is eligible to receive Service Credits applied toward their subsequent monthly billing invoice as follows:
- 99.90% to < 99.99% Uptime: 10% Service Credit of monthly recurring charges.
- 99.00% to < 99.90% Uptime: 25% Service Credit of monthly recurring charges.
- Less than 99.00% Uptime: 50% Service Credit of monthly recurring charges.

2.2 Disaster Recovery Objectives (RTO & RPO)
CloudMesh contracts specify strict Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO):
- Recovery Time Objective (RTO): Service must be fully restored within less than 15 minutes of an outage declaration.
- Recovery Point Objective (RPO): Data loss must not exceed 60 seconds of asynchronous write state under any circumstance.

2.3 Claim Submission Deadlines
To receive credits, customers must file a formal ticket with CloudMesh Technical Accounts within 30 days of the incident occurrence along with timestamped client telemetry logs.`,
        chunks: [
          {
            id: "chunk-sla-4",
            documentId: "doc-sla-2026",
            pageNumber: 2,
            paragraphIndex: 1,
            text: "If CloudMesh fails to meet the Guaranteed Uptime Percentage in any calendar month, the customer is eligible to receive Service Credits: 99.90% to < 99.99% Uptime grants a 10% Service Credit; 99.00% to < 99.90% Uptime grants a 25% Service Credit; Less than 99.00% Uptime grants a 50% Service Credit.",
            tokenCount: 62,
          },
          {
            id: "chunk-sla-5",
            documentId: "doc-sla-2026",
            pageNumber: 2,
            paragraphIndex: 2,
            text: "Disaster Recovery Objectives: Recovery Time Objective (RTO) requires service restoration within less than 15 minutes. Recovery Point Objective (RPO) dictates maximum allowable data loss cannot exceed 60 seconds of asynchronous state.",
            tokenCount: 43,
          },
          {
            id: "chunk-sla-6",
            documentId: "doc-sla-2026",
            pageNumber: 2,
            paragraphIndex: 3,
            text: "To receive credits, customers must file a formal ticket with CloudMesh Technical Accounts within 30 days of the incident occurrence along with timestamped client telemetry logs.",
            tokenCount: 34,
          },
        ],
      },
      {
        pageNumber: 3,
        title: "Section 3: Cryptographic Standards & Key Rotation",
        text: `3.1 Encryption at Rest & In Transit
All customer payload data, metadata, and blob storage objects are encrypted at rest using AES-256-GCM authenticated encryption. All external communications, API webhooks, and intra-cluster node traffic require TLS 1.3 encryption with ECDHE forward secrecy cipher suites.

3.2 KMS Master Key Rotation Cycles
Customer Master Keys (CMKs) stored in Cloud Hardware Security Modules (HSMs) FIPS 140-3 Level 3 undergo mandatory automated cryptographic rotation every 90 days. Customers opting for Bring-Your-Own-Key (BYOK) retain instant cryptographic revocation capability.

3.3 Security Audits and Vulnerability Scans
Third-party automated penetration tests run on a continuous daily schedule. Independent manual red-team assessments occur semi-annually with summaries published in the Customer Trust Center.`,
        chunks: [
          {
            id: "chunk-sla-7",
            documentId: "doc-sla-2026",
            pageNumber: 3,
            paragraphIndex: 1,
            text: "All customer payload data, metadata, and blob storage objects are encrypted at rest using AES-256-GCM authenticated encryption. All external communications, API webhooks, and intra-cluster node traffic require TLS 1.3 encryption with ECDHE forward secrecy cipher suites.",
            tokenCount: 46,
          },
          {
            id: "chunk-sla-8",
            documentId: "doc-sla-2026",
            pageNumber: 3,
            paragraphIndex: 2,
            text: "Customer Master Keys (CMKs) stored in Cloud Hardware Security Modules (HSMs) FIPS 140-3 Level 3 undergo mandatory automated cryptographic rotation every 90 days. Customers opting for Bring-Your-Own-Key (BYOK) retain instant cryptographic revocation capability.",
            tokenCount: 47,
          },
        ],
      },
    ],
  },
  {
    id: "doc-fintech-2026",
    title: "FinPulse SaaS Financial & Revenue Operations Report (FY2026)",
    category: "Financial & Metrics",
    description: "Executive investor overview of ARR progression, net revenue retention (NRR), CAC/LTV unit economics, and churn reduction.",
    fileSize: "840 KB",
    pageCount: 3,
    updatedAt: "February 2026",
    pages: [
      {
        pageNumber: 1,
        title: "Page 1: Annual Recurring Revenue (ARR) & Topline Trajectory",
        text: `1. ARR Growth Metrics
FinPulse concluded Fiscal Year 2026 achieving $28.6 Million in ending Annual Recurring Revenue (ARR), representing a +130.6% year-over-year expansion from $12.4 Million in FY2025. This surge was accelerated by the launch of the Enterprise Client Portal tier.

2. Net Revenue Retention (NRR) & Expansion
Net Revenue Retention (NRR) climbed to 134.2% (up from 118% in FY2025), driven by seat-tier expansions and automated document processing add-ons. Gross Revenue Retention (GRR) held firmly at 97.4%.

3. Gross Margin Profile
Non-GAAP Gross Margin expanded to 81.5% as infrastructure efficiency initiatives and edge server optimizations decreased cloud compute costs from 23% to 18.5% of total revenue.`,
        chunks: [
          {
            id: "chunk-fin-1",
            documentId: "doc-fintech-2026",
            pageNumber: 1,
            paragraphIndex: 1,
            text: "FinPulse concluded Fiscal Year 2026 achieving $28.6 Million in ending Annual Recurring Revenue (ARR), representing a +130.6% year-over-year expansion from $12.4 Million in FY2025. This surge was accelerated by the launch of the Enterprise Client Portal tier.",
            tokenCount: 51,
          },
          {
            id: "chunk-fin-2",
            documentId: "doc-fintech-2026",
            pageNumber: 1,
            paragraphIndex: 2,
            text: "Net Revenue Retention (NRR) climbed to 134.2% (up from 118% in FY2025), driven by seat-tier expansions and automated document processing add-ons. Gross Revenue Retention (GRR) held firmly at 97.4%.",
            tokenCount: 42,
          },
          {
            id: "chunk-fin-3",
            documentId: "doc-fintech-2026",
            pageNumber: 1,
            paragraphIndex: 3,
            text: "Non-GAAP Gross Margin expanded to 81.5% as infrastructure efficiency initiatives and edge server optimizations decreased cloud compute costs from 23% to 18.5% of total revenue.",
            tokenCount: 36,
          },
        ],
      },
      {
        pageNumber: 2,
        title: "Page 2: Unit Economics (CAC, LTV, Payback Period)",
        text: `1. Customer Acquisition Cost (CAC)
Blended CAC across inbound organic and outbound enterprise sales closed at $4,250 per paying organization. Inbound marketing motions via technical whitepapers achieved a low $1,800 CAC.

2. Customer Lifetime Value (LTV) and LTV:CAC Ratio
Based on average enterprise retention of 4.8 years, customer Lifetime Value (LTV) is estimated at $38,200. This delivers an outstanding LTV:CAC ratio of 8.9x, far exceeding the SaaS industry gold standard of 3.0x.

3. CAC Payback Period
The net CAC payback period compressed to 5.8 months, providing rapid capital recycling into targeted customer acquisition channels.`,
        chunks: [
          {
            id: "chunk-fin-4",
            documentId: "doc-fintech-2026",
            pageNumber: 2,
            paragraphIndex: 1,
            text: "Blended CAC across inbound organic and outbound enterprise sales closed at $4,250 per paying organization. Inbound marketing motions via technical whitepapers achieved a low $1,800 CAC.",
            tokenCount: 35,
          },
          {
            id: "chunk-fin-5",
            documentId: "doc-fintech-2026",
            pageNumber: 2,
            paragraphIndex: 2,
            text: "Customer Lifetime Value (LTV) is estimated at $38,200. This delivers an outstanding LTV:CAC ratio of 8.9x, far exceeding the SaaS industry gold standard of 3.0x.",
            tokenCount: 36,
          },
          {
            id: "chunk-fin-6",
            documentId: "doc-fintech-2026",
            pageNumber: 2,
            paragraphIndex: 3,
            text: "The net CAC payback period compressed to 5.8 months, providing rapid capital recycling into targeted customer acquisition channels.",
            tokenCount: 24,
          },
        ],
      },
      {
        pageNumber: 3,
        title: "Page 3: Logo Churn & Enterprise Contract Values",
        text: `1. Monthly Logo Churn Rate
Average monthly logo churn fell to a record low of 0.42% (5.04% annualized), primarily attributed to our multi-tenant document onboarding workflow which creates high switching barriers.

2. Average Contract Value (ACV) Expansion
Average Contract Value across mid-market and enterprise cohorts jumped 44% to $48,000 annually. Over 62 enterprise accounts now represent contracts over $100,000 ARR.`,
        chunks: [
          {
            id: "chunk-fin-7",
            documentId: "doc-fintech-2026",
            pageNumber: 3,
            paragraphIndex: 1,
            text: "Average monthly logo churn fell to a record low of 0.42% (5.04% annualized), primarily attributed to our multi-tenant document onboarding workflow which creates high switching barriers.",
            tokenCount: 35,
          },
          {
            id: "chunk-fin-8",
            documentId: "doc-fintech-2026",
            pageNumber: 3,
            paragraphIndex: 2,
            text: "Average Contract Value across mid-market and enterprise cohorts jumped 44% to $48,000 annually. Over 62 enterprise accounts now represent contracts over $100,000 ARR.",
            tokenCount: 33,
          },
        ],
      },
    ],
  },
  {
    id: "doc-soc2-2026",
    title: "NexusGuard SOC 2 Type II Compliance & Incident Response Standard",
    category: "Security & Compliance",
    description: "Detailed compliance manual outlining Trust Services Criteria, Okta MFA, P1-P4 triage severity matrix, and 72-hr GDPR notification rules.",
    fileSize: "2.1 MB",
    pageCount: 3,
    updatedAt: "January 2026",
    pages: [
      {
        pageNumber: 1,
        title: "Section 1: Trust Services Criteria & Zero Trust Architecture",
        text: `1.1 Scope of Audit
The SOC 2 Type II audit conducted by Ernst & Young evaluated NexusGuard's systems across Security, Availability, and Confidentiality Trust Services Criteria between January 1, 2025 and December 31, 2025.

1.2 Identity & Access Governance (Okta & FIDO2)
Access to internal production infrastructure requires Okta Adaptive MFA backed by FIDO2 WebAuthn hardware security keys (YubiKey 5 Series). SMS and voice OTP verification are explicitly prohibited across engineering and support environments.

1.3 Role-Based Access Control (RBAC) & Ephemeral Credentials
Production SSH and Kubernetes cluster access are provisioned via HashiCorp Boundary using just-in-time ephemeral certificates that automatically expire within 60 minutes.`,
        chunks: [
          {
            id: "chunk-soc-1",
            documentId: "doc-soc2-2026",
            pageNumber: 1,
            paragraphIndex: 1,
            text: "The SOC 2 Type II audit conducted by Ernst & Young evaluated NexusGuard's systems across Security, Availability, and Confidentiality Trust Services Criteria between January 1, 2025 and December 31, 2025.",
            tokenCount: 40,
          },
          {
            id: "chunk-soc-2",
            documentId: "doc-soc2-2026",
            pageNumber: 1,
            paragraphIndex: 2,
            text: "Access to internal production infrastructure requires Okta Adaptive MFA backed by FIDO2 WebAuthn hardware security keys (YubiKey 5 Series). SMS and voice OTP verification are explicitly prohibited across engineering and support environments.",
            tokenCount: 43,
          },
          {
            id: "chunk-soc-3",
            documentId: "doc-soc2-2026",
            pageNumber: 1,
            paragraphIndex: 3,
            text: "Production SSH and Kubernetes cluster access are provisioned via HashiCorp Boundary using just-in-time ephemeral certificates that automatically expire within 60 minutes.",
            tokenCount: 28,
          },
        ],
      },
      {
        pageNumber: 2,
        title: "Section 2: Incident Severity Matrix & SLA Timelines",
        text: `2.1 Triage Classification and Response SLAs
When a security anomaly or platform degradation is detected, the on-call Security Operations Center (SOC) engineer classifies the incident into one of four severity tiers:
- P1 (Critical): Confirmed unauthorized access to customer data or total platform downtime. Response SLA: 15 minutes. Resolution target: < 4 hours. War room established immediately.
- P2 (Major): Core feature failure with high business impact but no data compromise. Response SLA: 1 hour. Resolution target: < 12 hours.
- P3 (Moderate): Non-critical bugs or isolated user performance degradation. Response SLA: 8 hours. Resolution target: < 48 hours.
- P4 (Minor): Cosmetic bugs or minor documentation queries. Response SLA: 24 hours.

2.2 Automated PagerDuty Escalation
If a P1 alert is unacknowledged within 5 minutes, PagerDuty automatically triggers executive escalation alerting the VP of Engineering and Chief Information Security Officer (CISO).`,
        chunks: [
          {
            id: "chunk-soc-4",
            documentId: "doc-soc2-2026",
            pageNumber: 2,
            paragraphIndex: 1,
            text: "P1 (Critical): Confirmed unauthorized access to customer data or total platform downtime. Response SLA: 15 minutes. Resolution target: < 4 hours. P2 (Major): Core feature failure. Response SLA: 1 hour. P3 (Moderate): Response SLA: 8 hours. P4 (Minor): Response SLA: 24 hours.",
            tokenCount: 65,
          },
          {
            id: "chunk-soc-5",
            documentId: "doc-soc2-2026",
            pageNumber: 2,
            paragraphIndex: 2,
            text: "If a P1 alert is unacknowledged within 5 minutes, PagerDuty automatically triggers executive escalation alerting the VP of Engineering and Chief Information Security Officer (CISO).",
            tokenCount: 32,
          },
        ],
      },
      {
        pageNumber: 3,
        title: "Section 3: Breach Notification & Statutory Disclosures",
        text: `3.1 GDPR Article 33 Statutory Notification
In accordance with GDPR Article 33, any breach resulting in personal data exposure must be reported to the appropriate Supervisory Authority within 72 hours of becoming aware of the incident.

3.2 US SEC Cyber Incident Rule (Item 1.05 Form 8-K)
Material cybersecurity incidents must be formally disclosed to the SEC via Form 8-K within four (4) business days of determining materiality.

3.3 Customer Notification Protocols
Impacted enterprise clients receive direct written notification from the CISO via secure portal communication within 24 hours of confirmation, including root cause indicators and mitigation remediation steps.`,
        chunks: [
          {
            id: "chunk-soc-6",
            documentId: "doc-soc2-2026",
            pageNumber: 3,
            paragraphIndex: 1,
            text: "In accordance with GDPR Article 33, any breach resulting in personal data exposure must be reported to the appropriate Supervisory Authority within 72 hours of becoming aware of the incident.",
            tokenCount: 36,
          },
          {
            id: "chunk-soc-7",
            documentId: "doc-soc2-2026",
            pageNumber: 3,
            paragraphIndex: 2,
            text: "Material cybersecurity incidents must be formally disclosed to the SEC via Form 8-K within four (4) business days of determining materiality. Impacted enterprise clients receive written notice within 24 hours.",
            tokenCount: 39,
          },
        ],
      },
    ],
  },
];

export const DOCUMENT_QUESTIONS: Record<string, string[]> = {
  "doc-sla-2026": [
    "What is the Service Credit percentage if monthly uptime drops below 99.0%?",
    "What are our strict RTO and RPO targets during a disaster recovery declaration?",
    "What cryptographic standards and KMS key rotation cycles are enforced?",
  ],
  "doc-fintech-2026": [
    "What was our ending ARR for FY2026 and how much did it grow YoY?",
    "What is our LTV:CAC ratio and how long is the payback period?",
    "What is the current monthly logo churn rate and non-GAAP Gross Margin?",
  ],
  "doc-soc2-2026": [
    "What is the required response SLA for a P1 Critical security incident?",
    "Under GDPR Article 33, what is the notification deadline for a data breach?",
    "What multi-factor authentication (MFA) standards are required by Okta?",
  ],
};
