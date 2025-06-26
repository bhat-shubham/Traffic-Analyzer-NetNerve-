# NetNerve: AI Powered Traffic Analyzer

[![NetNerve Live](https://img.shields.io/badge/Live-Demo-brightgreen?style=flat-square&logo=vercel)](https://netnerve.vercel.app/)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Overview

**NetNerve: Traffic Analyzer** is a modern web application that empowers users to analyze their internet traffic and detect suspicious activities with a single click. Designed for speed, security, and ease-of-use, NetNerve provides actionable insights into your network usage, helping you stay informed and secure.

- **Live Demo:** [https://netnerve.vercel.app/](https://netnerve.vercel.app/)
- **Repository:** [GitHub](https://github.com/bhat-shubham/Traffic-Analyzer-NetNerve-)

## Features

- **Real-time Traffic Analysis:** Instantly monitor and analyze your internet traffic.
- **Suspicious Activity Detection:** Detect unusual or potentially malicious network activities.
- **One-Click Operation:** Simple UI for quick scanning and results.
- **Modern Web Stack:** Built with [Next.js](https://nextjs.org/) and TypeScript for performance and reliability.
- **Open Source:** Freely available under the MIT License.

## Tech Stack 

- **Frontend**: React, TailwindCSS, React-Markdown
- **Backend**: FastAPI, Scapy, Groq (LLaMA 3 API)
- **Deployment**: Vercel (Frontend), Render/Savela (Backend)
- **AI**: LLaMA-3 (Groq API) for summary generation
- **Utilities**: dotenv, UUID, CORS Middleware

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)
- [Python](https://www.python.org/) (v3.13)


### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/bhat-shubham/Traffic-Analyzer-NetNerve-.git
cd Traffic-Analyzer-NetNerve-
npm install
# or
yarn install
# or
pnpm install
```

### Running Frontend Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Running Backend Locally

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
```

Create a .env file and add your Groq API key:
```bash
GROQ_API_KEY=your_key_here
```

Run the backend:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```


Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

- Navigate to the main dashboard.
- Upload Your Desired CAP/PCAP File.
- Click “Analyze Packet" to start monitoring.
- Review the results and alerts for any suspicious activity.

## Contribution
Contributions are welcome! Please open issues or submit pull requests to help improve NetNerve.

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).

## Citation & Media Guidelines

If you write about or share NetNerve in articles, blogs, or media, please mention:

- **Creator:** Shubham Bhat
- **Website:** [https://netnerve.vercel.app/](https://netnerve.vercel.app/)

**Suggested mention:**  
> NetNerve(Traffic Analyzer) by Shubham Bhat ([netnerve.vercel.app](https://netnerve.vercel.app/))

We appreciate your support and proper attribution!

## Contact

For support, questions, or suggestions, please open an [issue](https://github.com/bhat-shubham/Traffic-Analyzer-NetNerve-/issues) or reach out via [GitHub profile](https://github.com/bhat-shubham).

---

© 2025 Shubham Bhat. All rights reserved.