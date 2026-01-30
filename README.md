# ArchiFree | Enterprise Architecture OS

ArchiFree is a professional, open-source Enterprise Architecture (EA) tool designed for large-scale enterprise architects to model, govern, and align business strategy with IT execution. Built with a modern tech stack and powered by Google Gemini AI, it provides high-level visibility across the entire enterprise landscape.

## 🚀 Key Features

### 📊 Executive Dashboard
*   **Real-time Metrics:** High-level snapshots of artifact inventory, strategic alignment, and project health.
*   **Live Analytics:** Interactive charts for artifact distribution by layer (Business, Data, Application, Technology).
*   **Governance Pulse:** Quick view of enterprise compliance and recent architecture modifications.

### 🗺️ Strategy Visualizer
*   **Multi-Layer Modeling:** Interactive canvas for mapping capabilities, system dependencies, and infrastructure nodes.
*   **Smart Toolbar:** Professional diagramming tools including pan, zoom, and node manipulation.
*   **Export Capabilities:** High-resolution PDF export for stakeholder presentations.

### 🧠 AI Architecture Assistant
*   **Gemini-Powered Insights:** Leverage Google Gemini 3 Flash to perform complex architecture analysis.
*   **Impact Analysis:** Understand how changes in one layer (e.g., Technology) ripple through to Strategy.
*   **Gap Analysis & Risk Assessment:** Automatically identify single points of failure and missing business capabilities.

### 🗄️ Enterprise Repository
*   **Structured Metadata:** Detailed tracking of owners, status (Active, Proposed, Sunset), and tags.
*   **Cross-Layer Search:** Unified search and filtering to find any artifact across the enterprise stack.
*   **Data Governance:** Built-in tracking for PII, GDPR compliance, and technical criticality.

---

## 📸 Application Screenshots

### 🖥️ Dashboard View
![Dashboard Placeholder](https://placehold.co/1200x600/1e293b/white?text=Enterprise+Overview+Dashboard+-+Interactive+Charts+and+Stats)
*The centralized hub showing the health of the enterprise landscape and strategic alignment.*

### 🎨 Architecture Visualizer
![Visualizer Placeholder](https://placehold.co/1200x600/6366f1/white?text=Interactive+Strategy+Visualizer+-+Cross-Layer+Modeling)
*A professional modeling environment for visualizing complex system dependencies and capability maps.*

### 🤖 AI Insights
![AI Insights Placeholder](https://placehold.co/1200x600/4f46e5/white?text=AI+Architecture+Assistant+-+Gemini+Powered+Analysis)
*Deep-dive analysis using Generative AI to identify risks and provide strategic recommendations.*

---

## 🛠️ Tech Stack

*   **Frontend:** React 19 (ES6+), Tailwind CSS
*   **AI Engine:** Google Gemini API (`gemini-3-flash-preview`)
*   **Icons:** Lucide React
*   **Charts:** Recharts (D3-based)
*   **Type Safety:** TypeScript
*   **Styling:** Modern Inter Font & Slate/Indigo design language

## 🛠️ Development

### Architecture Layers
ArchiFree follows the standard enterprise architecture layers:
1.  **Strategy:** Goals, Outcomes, and Roadmaps.
2.  **Business:** Processes, Capabilities, and Roles.
3.  **Application:** Software services and logical components.
4.  **Data:** Data objects, flows, and sovereignty policies.
5.  **Technology:** Infrastructure, cloud nodes, and physical networks.

### AI Integration
The `geminiService.ts` handles communication with Google's Generative AI. It uses structured JSON outputs to provide:
*   Executive Summaries
*   Risk Scores (1-100)
*   Actionable Recommendations

## 📄 License

ArchiFree is open-source and released under the MIT License. Designed for the community, by architects.
