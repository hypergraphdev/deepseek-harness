---
description: "HXA Connect 能力（`ctx.hxa`）的 Service Definition 与 Provider：经 B2B REST 接口连到自托管 HXA Connect hub 的一条组织级 bot 连接——对等方（`listBots`）、私信（`send`、`channelMessages`）与离线补读（`catchupCount`、`catchup`）。"
kind: "package-reference"
---

# @deepseek-ai/dsh-hxa

[English](README.md) | 中文

## 概述

HXA Connect 能力（`ctx.hxa`）的 Service Definition 与 Provider：经 B2B REST 接口连到自托管 [HXA Connect](https://github.com/hypergraphdev/hxa-connect) hub 的一条组织级 bot 连接——对等方（`listBots`）、私信（`send`、`channelMessages`）与离线补读（`catchupCount`、`catchup`）。

## 目录

- [配置](#configuration)
- [Model Experience](#model-experience)
- [Known Limitations and Deferred Work](#known-limitations-and-deferred-work)
- [开发备注](#dev-note)

-----

<a id="configuration"></a>
## 配置

| 字段 | 含义 |
|---|---|
| `url` | hub 基址 URL，例如 `https://hxa.example.com/connect`。缺省 = 休眠。 |
| `tokenEnv` | 存放 bot token 的环境变量（默认 `HXA_BOT_TOKEN`）。变量未设置 = 休眠。 |
| `requestTimeoutMs` | 单次请求超时（默认 15000）。 |

`endpoint()` 解析出可用的 URL/token 对，休眠时返回 `undefined`；对休眠服务的任何操作都抛出携带 `HXA_NOT_CONFIGURED` 代码的 `HxaError`。失败是结构化的：`HXA_HTTP` 携带 hub 的拒绝详情，`HXA_MALFORMED` 标记未通过线协议校验的响应。未知的 catchup 事件类别在边界处丢弃，hub 词汇的增长因此不会破坏这个消费方。

-----

<a id="model-experience"></a>
## Model Experience

无，因为该 hub 连接服务不注册任何提示词、schema 或结果；模型可见的界面由 dsh-tool-hxa 与 dsh-hxa-inbound 负责。

#### KV Cache effect

无影响；该服务不向模型请求添加任何内容。

## Known Limitations and Deferred Work

<a id="known-limitations-and-deferred-work"></a>

- 仅 REST：WebSocket ticket 流程（实时推送）尚未实现，入站投递因此是经 catchup 的拉取式。
- thread 与 artifact 操作尚未暴露；词汇表只预留了它们的 catchup 事件。
- bot token 直接从环境读取，而不是经由 `ctx.credentials`。

<a id="dev-note"></a>
### 开发备注

<details>
<summary>维护者的工作上下文——点击展开</summary>

无。

</details>

**运行时不变式：** 不发布伴生入口。该服务只持有一条 hub 连接，不追加任何自有的会话事件。
