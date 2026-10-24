---
description: "Service Definition and Provider for the WeChat capability (`ctx.weixin`): one QR-linked WeChat account over the iLink Bot wire protocol — linking (`startLink`, `status`, `unlink`), inbound delivery (`weixin/message`), and outbound text (`send`)."
kind: "package-reference"
---

# @deepseek-ai/dsh-weixin

English | [中文](README.zh.md)

## Summary

Service Definition and Provider for the WeChat capability (`ctx.weixin`): one QR-linked WeChat account over the iLink Bot wire protocol — linking (`startLink`, `status`, `unlink`), inbound delivery (`weixin/message`), and outbound text (`send`).

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
| `retryDelayMs` | Delay before retrying after a failed poll (default 2000). |
| `backoffDelayMs` | Delay after three consecutive failures (default 30000). |

Linking is a one-time act: the scan yields a bot token stored 0600 under the harness home, so a restart resumes receiving without another QR. `status()` reports the linked account or the pending challenge to render; every send on an unlinked service throws `WeixinError` with code `WEIXIN_NOT_LINKED`, and wire refusals carry `WEIXIN_API`. A server-side session expiry unlinks the account and emits `weixin/link` with `false`, so a human knows to scan again. The receive cursor is persisted before delivery, so a crash redelivers rather than skips.

-----

<a id="model-experience"></a>
## Model Experience

None, as the WeChat connection service registers no prompt, schema, or result; dsh-weixin-agent owns the model-visible conversation.

#### KV Cache effect

No effect; the service adds nothing to model requests.

## Known Limitations and Deferred Work

<a id="known-limitations-and-deferred-work"></a>

- Text messages only: images, voice, and files have no media pipeline, so non-text inbound content is dropped at the boundary.
- One linked account per harness home; the credential file holds a single link.
- Direct messages only: group chats are not received or addressable.
- The bot token is stored as a plain 0600 file under the harness home rather than through `ctx.credentials`.

<a id="dev-note"></a>
### Dev Note

<details>
<summary>Working context for maintainers — click to expand</summary>

None.

</details>

**Runtime invariant:** No companion is published. The service appends no session event; inbound messages reach consumers through the unpersisted `weixin/message` Cordis event.
