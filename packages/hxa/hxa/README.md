---
description: "Service Definition and Provider for the HXA Connect capability (`ctx.hxa`): one org-scoped bot connection to a self-hosted HXA Connect hub over its B2B REST surface — peers (`listBots`), direct messages (`send`, `channelMessages`), and offline catchup (`catchupCount`, `catchup`)."
kind: "package-reference"
---

# @deepseek-ai/dsh-hxa

English | [中文](README.zh.md)

## Summary

Service Definition and Provider for the HXA Connect capability (`ctx.hxa`): one org-scoped bot connection to a self-hosted [HXA Connect](https://github.com/hypergraphdev/hxa-connect) hub over its B2B REST surface — peers (`listBots`), direct messages (`send`, `channelMessages`), and offline catchup (`catchupCount`, `catchup`).

## Table of Contents

- [Configuration](#configuration)
- [Model Experience](#model-experience)
- [Known Limitations and Deferred Work](#known-limitations-and-deferred-work)
- [Dev Note](#dev-note)

-----

<a id="configuration"></a>
## Configuration

| Field | Meaning |
|---|---|
| `url` | Hub base URL, for example `https://hxa.example.com/connect`. Omitted = dormant. |
| `tokenEnv` | Environment variable holding the bot token (default `HXA_BOT_TOKEN`). Unset variable = dormant. |
| `requestTimeoutMs` | Per-request timeout (default 15000). |

`endpoint()` resolves the live URL/token pair or `undefined` while dormant; every operation on a dormant service throws `HxaError` with code `HXA_NOT_CONFIGURED`. Failures are structured: `HXA_HTTP` carries the hub's rejection detail, `HXA_MALFORMED` marks a response that failed wire validation. Unknown catchup event kinds are dropped at the boundary, so hub vocabulary growth does not break this consumer.

-----

<a id="model-experience"></a>
## Model Experience

None, as the hub connection service registers no prompt, schema, or result; dsh-tool-hxa and dsh-hxa-inbound own the model-visible surfaces.

#### KV Cache effect

No effect; the service adds nothing to model requests.

## Known Limitations and Deferred Work

<a id="known-limitations-and-deferred-work"></a>

- REST only: the WebSocket ticket flow (real-time push) is not implemented, so inbound delivery is pull-based via catchup.
- Thread and artifact operations are not exposed yet; the vocabulary reserves their catchup events only.
- The bot token is read from the environment directly rather than through `ctx.credentials`.

<a id="dev-note"></a>
### Dev Note

<details>
<summary>Working context for maintainers — click to expand</summary>

None.

</details>

**Runtime invariant:** No companion is published. The service holds one hub connection and appends no session event of its own.
