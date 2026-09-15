---
description: "微信能力族：让 harness agent 能从其主人的微信触达——扫一次码绑定一个账号，发给它的消息成为 agent 的回合，agent 在聊天里作答。"
kind: "package-group"
---

# weixin/

[English](README.md) | 中文

## 概述

微信能力族：让 harness agent 能从其主人的微信触达——扫一次码绑定一个账号，发给它的消息成为 agent 的回合，agent 在聊天里作答。

## 目录

- [包](#packages)
- [相关文档](#related-documentation)
- [开发备注](#dev-note)

-----

<a id="packages"></a>
## 包

| 包 | ctx 键 | 角色 |
|---|---|---|
| [`weixin`](weixin/README.zh.md) | `ctx.weixin` | Service Definition + iLink 客户端 Provider：扫码登录、持久凭据、长轮询接收循环与文本发送 |
| [`weixin-agent`](weixin-agent/README.zh.md) | — | Consumer：会话桥——入站消息唤醒专属 agent，其收尾的 assistant 文本回送给发信人 |

seam 在绑定账号前保持休眠：harness home 下没有凭据时，`ctx.weixin` 收不到任何东西，Consumer 也不会激活。绑定只做一次，通过设置页的扫码面板完成；重启后从存储的凭据恢复，无需再次扫码。

-----

<a id="related-documentation"></a>
## 相关文档

- [微信子系统](../../docs/subsystems/weixin.zh.md) — 一个扫码绑定的微信账号：绑定、持久凭据、接收循环与出站文本。

-----

<a id="dev-note"></a>
## 开发备注

<details>
<summary>维护者的工作上下文——点击展开</summary>

无。

</details>
