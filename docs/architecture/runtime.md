---
sidebar_position: 5
---
# Runtime

The Fireproof runtime defaults to in-browser operation, letting developers begin with an empty database that requires no external services and sync when ready. On launch, the runtime checks for both local and (if connected) remote metadata. When a remote database is discovered, it merges updates into a consistent snapshot and then subscribes to live updates. This process optimizes cold starts through sync hints and working set priority, reducing the time to first interaction. Users expect consistency during normal page refreshes, so Fireproof writes locally and uses the browser cache or other platform features to speed up load times. In both cases, all data is written to a ledger as immutable encrypted objects, with configurable key management.

Fireproof’s runtime also supports large-scale use: a single ledger can handle 100k updates without extra configuration. Once this capacity is reached, developers may adjust gateway settings to balance storage constraints and sync performance. For concurrency, an upcoming background process or dedicated worker mode aims to offload the runtime logic, improving throughput and responsiveness. This model is designed to maintain the same straightforward API, preserving compatibility with in-browser and offline-first applications.

Although configuration can be minimal for most use cases, more advanced setups may include a memory-only runtime for serverless functions or remote-only storage in headless environments. Regardless of the underlying approach, the runtime always ensures a verifiable and secure ledger, building on the same content-addressed blockstore used elsewhere in Fireproof’s architecture. This consistency allows any Fireproof instance—browser tab, mobile app, or edge compute node—to merge updates seamlessly and produce a unified history.
