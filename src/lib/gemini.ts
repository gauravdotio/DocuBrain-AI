import { Citation, DocumentChunk } from "@/types";
import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `You are DocuBrain AI, an elite enterprise document intelligence engine.
You are given verified excerpts from an enterprise knowledge document.
Your task is to answer the user's question accurately, concisely, and factually based ONLY on the provided context.

Formatting Guidelines:
1. Always cite your sources explicitly in the text using bracketed format with exact page and section references, e.g., **[Doc 1, p. 2]**.
2. Structure your answer with clear markdown bullet points, bold keywords, and concise executive summary phrasing.
3. If the provided context does not contain the answer, state that clearly rather than hallucinating.
4. Keep the tone professional, authoritative, and audit-ready.`;

export async function* streamGeminiResponse(
  apiKey: string,
  query: string,
  chunks: DocumentChunk[],
  citations: Citation[]
): AsyncGenerator<string, void, unknown> {
  const genAI = new GoogleGenerativeAI(apiKey);
  // Default to gemini-1.5-flash for maximum speed and sub-second token latency
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: SYSTEM_PROMPT,
  });

  const contextText = chunks
    .map(
      (c, i) =>
        `[Excerpt ${i + 1} | Page ${c.pageNumber} | Paragraph ${c.paragraphIndex}]\n${c.text}`
    )
    .join("\n\n---\n\n");

  const prompt = `Context Information:\n${contextText}\n\nQuestion: ${query}\n\nPlease provide an authoritative answer citing [Page X, Para Y] appropriately:`;

  const result = await model.generateContentStream(prompt);

  for await (const chunk of result.stream) {
    const chunkText = chunk.text();
    if (chunkText) {
      yield chunkText;
    }
  }
}

/**
 * Intelligent simulation generator for zero-friction evaluation
 * Crafts a precise, contextual answer using the retrieved chunks and streams word-by-word
 */
export async function* streamSimulatedResponse(
  query: string,
  chunks: DocumentChunk[],
  citations: Citation[]
): AsyncGenerator<string, void, unknown> {
  const queryLower = query.toLowerCase();
  const primaryChunk = chunks[0] || null;
  const primaryCitation = citations[0] || null;
  const secondaryCitation = citations[1] || null;

  let responseBody = "";

  if (queryLower.includes("credit") || queryLower.includes("uptime") || queryLower.includes("99.0")) {
    responseBody = `Based on the **CloudMesh Enterprise SLA Agreement [p. 2]**, here is the exact financial credit breakdown:

- **99.90% to < 99.99% Uptime**: Grants an automatic **10% Service Credit** on monthly recurring fees.
- **99.00% to < 99.90% Uptime**: Grants an automatic **25% Service Credit**.
- **Less than 99.00% Uptime**: Triggers the maximum **50% Service Credit** for the affected billing cycle **[Doc 1, p. 2]**.

Additionally, disaster recovery guarantees enforce an **RTO of under 15 minutes** and **RPO of less than 60 seconds** across dual multi-region clusters **[Doc 1, p. 1]**. Claims must be submitted within 30 days of the incident.`;
  } else if (queryLower.includes("rto") || queryLower.includes("rpo") || queryLower.includes("disaster")) {
    responseBody = `According to **Section 2.2: Disaster Recovery Objectives [Doc 1, p. 2]**:

1. **Recovery Time Objective (RTO)**: Full service restoration must be achieved within **< 15 minutes** following formal outage declaration.
2. **Recovery Point Objective (RPO)**: Allowable data loss cannot exceed **60 seconds** of asynchronous write state.
3. **Automated Failover**: Health checkers trigger automated DNS failover to standby replica zones within **120 seconds** **[Doc 1, p. 1]**.`;
  } else if (queryLower.includes("encryption") || queryLower.includes("key") || queryLower.includes("kms")) {
    responseBody = `According to **Section 3: Cryptographic Standards & Key Rotation [Doc 1, p. 3]**:

- **Data at Rest**: Encrypted using **AES-256-GCM** authenticated encryption across all payload objects and metadata **[Doc 1, p. 3]**.
- **Data in Transit**: Mandates **TLS 1.3** with ECDHE forward secrecy cipher suites.
- **Customer Master Keys (CMKs)**: Stored in FIPS 140-3 Level 3 Hardware Security Modules (HSMs) and undergo **automated rotation every 90 days** **[Doc 1, p. 3]**.`;
  } else if (queryLower.includes("arr") || queryLower.includes("growth") || queryLower.includes("revenue")) {
    responseBody = `According to the **FinPulse Financial & Revenue Operations Report [p. 1]**:

- **Ending ARR (FY2026)**: Reached **$28.6 Million**, reflecting a **+130.6% year-over-year surge** from $12.4 Million in FY2025 **[Doc 2, p. 1]**.
- **Net Revenue Retention (NRR)**: Expanded to **134.2%** (up from 118%), driven by client portal expansions.
- **Gross Margin**: Expanded to **81.5%** due to edge routing efficiencies reducing compute expenditure **[Doc 2, p. 1]**.`;
  } else if (queryLower.includes("ltv") || queryLower.includes("cac") || queryLower.includes("payback")) {
    responseBody = `Based on **Section 2: Unit Economics [Doc 2, p. 2]**:

- **Customer Lifetime Value (LTV)**: **$38,200** based on average enterprise retention of 4.8 years **[Doc 2, p. 2]**.
- **Blended CAC**: **$4,250** per paying enterprise (with organic inbound achieving $1,800).
- **LTV:CAC Ratio**: **8.9x**, nearly triple the 3.0x industry benchmark.
- **Payback Period**: Compressed to **5.8 months**, enabling rapid reinvestment of working capital **[Doc 2, p. 2]**.`;
  } else if (queryLower.includes("churn") || queryLower.includes("acv")) {
    responseBody = `Per **Page 3: Logo Churn & Enterprise Contract Values [Doc 2, p. 3]**:

- **Monthly Logo Churn**: Dropped to a record low of **0.42%** (approx. 5.04% annualized) **[Doc 2, p. 3]**.
- **Average Contract Value (ACV)**: Increased 44% to **$48,000 annually**, with 62+ accounts generating over $100k ARR **[Doc 2, p. 3]**.`;
  } else if (queryLower.includes("p1") || queryLower.includes("severity") || queryLower.includes("critical")) {
    responseBody = `Per the **NexusGuard Incident Severity Matrix [Doc 3, p. 2]**:

- **P1 (Critical Incident)**: Defined as confirmed unauthorized customer data exposure or total infrastructure outage.
  - **Response SLA**: **15 minutes** (with immediate war room activation) **[Doc 3, p. 2]**.
  - **Resolution Target**: < 4 hours.
  - **Escalation Trigger**: If unacknowledged within **5 minutes**, PagerDuty automatically escalates to the VP of Engineering and CISO.`;
  } else if (queryLower.includes("gdpr") || queryLower.includes("breach") || queryLower.includes("notification")) {
    responseBody = `According to **Section 3: Breach Notification & Statutory Disclosures [Doc 3, p. 3]**:

- **GDPR Article 33**: Mandatory notification to the relevant Supervisory Authority within **72 hours** of breach confirmation **[Doc 3, p. 3]**.
- **US SEC Rule (Form 8-K)**: Material cybersecurity incidents must be reported within **4 business days**.
- **Enterprise Client Notice**: CISO issues written notice within **24 hours** detailing root cause analysis and remediation.`;
  } else if (queryLower.includes("mfa") || queryLower.includes("okta") || queryLower.includes("fido2")) {
    responseBody = `According to **Section 1.2: Identity & Access Governance [Doc 3, p. 1]**:

- **Authentication Mandate**: Requires **Okta Adaptive MFA** backed by **FIDO2 WebAuthn hardware security keys** (YubiKey 5 Series) **[Doc 3, p. 1]**.
- **Prohibited Methods**: SMS and voice OTP verifications are strictly barred.
- **Just-In-Time Credentials**: Production SSH and Kubernetes access are restricted via ephemeral certificates expiring in **60 minutes** **[Doc 3, p. 1]**.`;
  } else {
    // Dynamic synthesis based on actual retrieved chunk
    const excerpt = primaryChunk?.text || "Document information analyzed.";
    const pageRef = primaryCitation ? `[Doc ${primaryCitation.documentId === 'doc-sla-2026' ? '1' : primaryCitation.documentId === 'doc-fintech-2026' ? '2' : '3'}, p. ${primaryCitation.pageNumber}]` : '[Source]';
    
    responseBody = `Based on the verified document context ${pageRef}:

- **Verified Passage**: "${excerpt.slice(0, 180)}..." ${pageRef}.
- **Key Takeaway**: The queried topic is governed by explicit operational policies and compliance controls documented in **Page ${primaryCitation?.pageNumber || 1}**.

All documented procedures require strict adherence to system SLA guarantees and audit logging.`;
  }

  // Split into tokens/words and stream with realistic typewriter intervals
  const words = responseBody.split(/(\s+)/);
  for (const word of words) {
    yield word;
    // Tiny delay between 15-30ms for smooth fluid streaming feel
    await new Promise((resolve) => setTimeout(resolve, 18));
  }
}
