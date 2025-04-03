---
sidebar_position: 9
sidebar_class_name: hiddenBecauseDeprecated
---
# Tooling

Fireproof's tooling ecosystem supports developers from initial prototyping through to production on the server or edge, with specialized features for AI agent observability and interaction logging. The system can be installed directly via ESM imports for rapid prototyping, or through npm for traditional build processes. This flexibility allows developers to start building immediately in any JavaScript environment, with validated deployment targets including Cloudflare Durable Objects, Deno, Netlify, and AWS Lambda, with additional cloud marketplace integrations on the roadmap.

The development dashboard serves as a comprehensive observability platform for AI systems, providing specialized tooling for monitoring and analyzing agent behaviors, prompt chains, and interaction patterns. Its data copilot helps developers understand their data through AI analysis, suggesting context-aware React components like interactive visualizations, data collection forms, and spreadsheet-like interfaces with live previews. The Model Context Protocol enables seamless integration with local LLMs and client applications, allowing teams to capture, index, and analyze the complete history of agent interactions while maintaining cryptographic verification of all operations. The event viewer presents a developer-friendly interface for exploring causality in complex AI systems, making it easy to debug agent behavior, optimize prompt chains, and ensure compliance with operational guidelines.

Command-line tools complement the dashboard by enabling developers to run their own sync infrastructure. Teams requiring self-hosted deployments can leverage Fireproof Cloud's on-premises edition, which integrates with enterprise environments while providing production-ready tools for managing ledgers, verifying cryptographic integrity, and automating deployment processes. The CLI maintains the same content-addressed storage model used by the core system, ensuring consistent behavior across environments.

The entire toolchain is built on standard JavaScript packages and CLI tools, integrating with GitHub Actions for continuous integration and deployment. Cloud deployments leverage Clerk for authentication, with Cloudflare and Supabase providing the infrastructure backbone. This architecture enables seamless integration with existing development workflows while maintaining cryptographic verifiability across all environments.
