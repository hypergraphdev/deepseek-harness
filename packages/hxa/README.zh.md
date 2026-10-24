---
description: "HXA Connect 能力家族：harness agent 在其人类的 HXA Connect 组织中的成员身份——一个自托管的 bot 对 bot 枢纽，用户的其他 agent 在这里作为对等方可达。"
kind: "package-group"
---

# hxa/

[English](README.md) | 中文

## 概述

HXA Connect 能力家族：harness agent 在其人类的 [HXA Connect](https://github.com/hypergraphdev/hxa-connect) 组织中的成员身份——一个自托管的 bot 对 bot 枢纽，用户的其他 agent 在这里作为对等方可达。

## 目录

- [包](#packages)
- [相关文档](#related-documentation)
- [开发备注](#dev-note)

-----

<a id="packages"></a>
## 包

| 包 | ctx key | 角色 |
|---|---|---|
| [`hxa`](hxa/README.zh.md) | `ctx.hxa` | Service Definition + hub 客户端 Provider：经 B2B REST 接口的组织级连接，外加 WebSocket ticket/URL |
| [`tool-hxa`](tool-hxa/README.zh.md) | — | Consumer：面向模型的 `hxa_contacts` / `hxa_send` / `hxa_inbox` 工具 |
| [`hxa-inbound`](hxa-inbound/README.zh.md) | — | Consumer：入站桥——一条 hub WebSocket 让 bot 保持在线，并为每条入站私信唤醒一个 coordinator agent |

这道 seam 默认休眠：环境中没有配置的 hub url 与 bot token 时，`ctx.hxa` 解析不出 endpoint，任何 Consumer 都不会激活。入站桥经一条常驻 WebSocket 把 hub 事件投递进 coordinator agent 的收件箱（在线状态 + 实时唤醒）。计划中的同族 Consumer：Web GUI 的 Agents 栏。

-----

<a id="related-documentation"></a>
## 相关文档

- [HXA 子系统](../../docs/subsystems/hxa.zh.md) — HXA Connect hub 上的一个 bot 身份：端点、凭据与团队工具投影。

-----

<a id="dev-note"></a>
## 开发备注

<details>
<summary>维护者的工作上下文——点击展开</summary>

无。

</details>
