---
date: '2025-11-13'
title: 'API Design for Extensible Platforms'
slug: '/posts/api-design-extensible-platforms'
tags:
  - API
  - Design
  - Platforms
---

APIs are the surface area products expose to users and partners. Designing them for extensibility is a leadership problem as much as a technical one.

Principles I follow:

- Keep backward compatibility sacrosanct. Versioning is not an excuse for breaking changes; design evolutions via additive fields and feature flags.
- Prefer intent-based endpoints over CRUD explosions. Model verbs that match business intent; it's easier to evolve intent than to refactor object graphs.
- Provide strong contracts (OpenAPI + examples) and client generation when possible. Shipping machine-readable contracts reduces integration friction.
- Design for observability: surface request metadata, latencies, and consumer error rates. APIs without telemetry are effectively throttled-in-the-dark.
- Make extension points explicit: webhooks, event streams, and SDKs are first-class citizens when you expect integrations.

Designing extensible APIs requires humility: assume others will depend on your decisions for years. Small, careful choices now save costly migrations later.
