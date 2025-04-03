---
sidebar_position: 3
---
# Gateway

Fireproof's gateway architecture handles data persistence and synchronization. The system writes encrypted objects identically across all storage backends, allowing applications to bridge between different infrastructure solutions while maintaining cryptographic integrity. Developers can stack multiple gateways to create storage topologies – running in-memory locally while asynchronously writing to cloud APIs, or using network-attached blobs as primary storage in edge functions.

The gateway interface implements GET, PUT, and DELETE operations, with built-in handling for messages and HTTP-style requests. This standardization lets Fireproof treat all storage backends uniformly, whether they're local IndexedDB instances, cloud object stores like S3/R2, or custom implementations. The gateway layer maintains separate endpoints for meta and data operations, where meta provides a live API for tracking the latest updates while data handles the immutable, encrypted content blocks.

Each gateway implementation can optimize for its use case while adhering to the content-addressed storage contract. The system includes support for browser-native storage through IndexedDB, cloud object storage via S3-compatible APIs, and SQL databases through PostgreSQL integration. These built-in options cover deployment scenarios from offline-capable web applications to server-backed enterprise systems. The gateway interface allows custom implementations to connect with existing services for storage, streaming, and authentication.

The architecture can work with peer-to-peer mesh networks and Matrix-style double ratchet channels. Because all data is content-addressed and encrypted, gateways can redistribute blocks through any available transport mechanism. This enables sync topologies where updates flow through multiple intermediaries while maintaining cryptographic verifiability. The upcoming roadmap includes support for streaming updates through Bundle Protocol Version 7, WebSocket, and Server-Sent Events, allowing applications to maintain live connections when needed while falling back to polling when appropriate.

Storage behavioral guarantees are enforced through idempotent operations keyed by content IDs, ensuring that concurrent writers converge to consistent states regardless of network conditions or gateway implementation details. This approach allows Fireproof to maintain its ledger semantics when operating across storage systems or unreliable networks. The gateway layer serves as both an operational abstraction and core component of Fireproof's distributed capabilities, providing verified, secure data persistence across deployment topologies.
