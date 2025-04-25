---
sidebar_position: 6
sidebar_class_name: hiddenBecauseDeprecated
---
# Sync

Fireproof supports configurable syncing to remote storage through pluggable gateways, allowing users to replicate ledger updates wherever needed. By default, developers can invoke the connect() function to link with Fireproof Cloud, which uses Cloudflare for data hosting and Supabase for metadata handling. This seamless default works for most projects, particularly when developers want a quick and secure way to share data between clients. For more advanced setups, the same gateway model supports custom remote backends—such as a dedicated server running on AWS or a memory-only function in a serverless environment.

Under the hood, every time a client produces a new ledger file, it is registered with the selected gateway, sending only the minimal references needed to update remote metadata. When offline, Fireproof queues updates locally and merges them once a network connection is available. This offline-first approach, combined with content-addressed encryption, allows each participant to independently store data until sync resumes. All the while, the CRDT-based merge process ensures deterministic conflict resolution, so clients converge on the same final state without sacrificing correctness or data integrity.

The flexible architecture also makes partial syncing straightforward: a developer can configure multiple ledgers, each holding different subsets of the data. Because Fireproof uses verifiable content addressing, data can even be hosted on IPFS-like networks or appended to tamperproof logs without requiring a rewrite of the core logic. Memory-only gateways, often used in serverless or ephemeral contexts, provide the same functionality with no persistent storage. This makes it easier to scale or isolate certain processes while retaining the same data consistency guarantees as more permanent environments.

Live ledger collaboration is core to workloads like trade approval, supply chain transparency, and drone swarm management.

In Fireproof's architecture, we will introduce a standard sync gateway. This gateway will ensure that implementations do not need to be aware of the backend implementation running on the other end. These interfaces are designed to be composable, allowing different implementations and backends to run simultaneously. The gateway supports a protocol negotiation that enables transparent switching between HTTP and WS. All configuration is done via URLs, consistent with the rest of Fireproof's architecture. This approach simplifies integration and reduces the need for custom code, making it easier to leverage Fireproof's capabilities in various scenarios.
