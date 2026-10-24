---
description: "The WeChat capability family: the harness agent reachable from its human's WeChat — a QR scan links one account, and messages to it become turns for an agent that answers in the chat."
kind: "package-group"
---

# weixin/

English | [中文](README.zh.md)

## Summary

The WeChat capability family: the harness agent reachable from its human's WeChat — a QR scan links one account, and messages to it become turns for an agent that answers in the chat.

## Table of Contents

- [Packages](#packages)
- [Related documentation](#related-documentation)
- [Dev Note](#dev-note)

-----

<a id="packages"></a>
## Packages

| Package | ctx key | Role |
|---|---|---|
| [`weixin`](weixin/README.md) | `ctx.weixin` | Service Definition + iLink client Provider: QR login, the durable credential, the long-poll receive loop, and text send |
| [`weixin-agent`](weixin-agent/README.md) | — | Consumer: the conversation bridge — an inbound message wakes a dedicated agent, whose closing assistant text is sent back to the sender |

The seam is dormant until an account is linked: with no credential under the harness home, `ctx.weixin` receives nothing and no consumer activates. Linking happens once, through the settings page's QR panel; a restart resumes from the stored credential without another scan.

-----

<a id="related-documentation"></a>
## Related documentation

- [WeChat subsystem](../../docs/subsystems/weixin.md) — one QR-linked WeChat account: linking, durable credential, receive loop, and outbound text.

-----

<a id="dev-note"></a>
## Dev Note

<details>
<summary>Working context for maintainers — click to expand</summary>

None.

</details>
