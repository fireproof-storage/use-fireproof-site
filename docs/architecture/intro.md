---
sidebar_position: 1
sidebar_class_name: hiddenBecauseDeprecated
---
# Intro

"Realtime database, runs anywhere!" — in my solutions engineering days, I was always amazed by how fast the technical environment can change. You might be building on one cloud provider, but have the client move to another vendor days before the deadline. Building apps and features amongst all that churn is a constant challenge. I designed Fireproof to allow anyone to build trustworthy, reliable interactive applications even when the platform is uncertain and shifting.

Fireproof offers a zero-setup developer experience so a few lines of code enable a local database API with provable ledger semantics. This allows anyone who can wield JavaScript to write enterprise-critical apps for point-of-sale, IoT, supply chain, trading compensation, etc. that take advantage of friendly defaults for live sync, sharing, collaboration, audit, and cloud archive. Fireproof is designed so you can start in the browser, but write wide-ranging distributed applications that show up anywhere, whether as a tamperproof log of your AI agent interactions, trading desk collaboration, restaurant orders, or drone swarm goal management.

The status quo requires complex stacks of cloud services to accomplish centralized versions of these tasks. The cloud plays a role in Fireproof deployments but is secondary to the local client and the data structures, so sync works even without the client sharing the encryption key with the cloud, and replication can run device to device, opening up even more flexibility while maintaining ledger integrity.

The lightweight ESM-Module/NPM compatible package can drop into any brownfield front-end and back-end, regardless of the framework or build process, bringing greenfield agility so developers can add chat, collaboration, and sharing to existing production applications, without depending on changes to the legacy backend.

As an embedded ledger(database), Fireproof’s Merkle integrity enforces cryptographic causal integrity, so its data structures can always be validated and the complete historical record of a ledger’s state transitions can be reconstructed. This allows workloads to start in the browser (or any edge environment) and migrate seamlessly to the data center.

Fireproof uses a local-first content-addressed persistence layer to ensure verifiable sync between any local or remote storage gateway. While the zero-config default works for most developers, the architecture is configurable for deployment anywhere JavaScript runs. Read on to learn more.

*This document represents a target architecture, most features are implemented but certain roadmap items are under development or to be prioritized. The document is primarily aimed at developers and technical team leads who need to understand how Fireproof works under the hood. While we use specific technical terms to describe our implementation of CRDTs, Merkle trees, and distributed systems concepts, the core ideas are straightforward: Fireproof is an embedded database that works offline, syncs automatically, and maintains a verifiable history. Each section dives deeper into these fundamentals, explaining how they come together to create a reliable system for building collaborative applications.*
