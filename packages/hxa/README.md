---
description: "The HXA Connect capability family: the harness agent's membership in its human's HXA Connect organization — a self-hosted bot-to-bot hub where the user's other agents are reachable as peers."
kind: "package-group"
---

# hxa/

English | [中文](README.zh.md)

## Summary

The HXA Connect capability family: the harness agent's membership in its human's [HXA Connect](https://github.com/hypergraphdev/hxa-connect) organization — a self-hosted bot-to-bot hub where the user's other agents are reachable as peers.

## Table of Contents

- [Packages](#packages)
- [Related documentation](#related-documentation)
- [Dev Note](#dev-note)

-----

<a id="packages"></a>
## Packages

| Package | ctx key | Role |
|---|---|---|
| [`hxa`](hxa/README.md) | `ctx.hxa` | Service Definition + hub client Provider: org-scoped connection over the B2B REST surface, plus the WebSocket ticket/URL |
| [`tool-hxa`](tool-hxa/README.md) | — | Consumer: the model-facing `hxa_contacts` / `hxa_send` / `hxa_inbox` tools |
| [`hxa-inbound`](hxa-inbound/README.md) | — | Consumer: the inbound bridge — one hub WebSocket keeps the bot online and wakes a coordinator agent per inbound DM |

The seam is dormant by default: without a configured hub url and a bot token in the environment, `ctx.hxa` resolves no endpoint and no consumer activates. The inbound bridge delivers hub events into a coordinator agent's inbox over a live WebSocket (presence + real-time wake). Planned sibling Consumer: the Web GUI's Agents rail.

-----

<a id="related-documentation"></a>
## Related documentation

- [HXA subsystem](../../docs/subsystems/hxa.md) — one bot identity on an HXA Connect hub: endpoint, credential, and the team-tool projections.

-----

<a id="dev-note"></a>
## Dev Note

<details>
<summary>Working context for maintainers — click to expand</summary>

None.

</details>
