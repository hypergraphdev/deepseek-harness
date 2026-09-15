---
description: "微信能力（`ctx.weixin`）的 Service Definition 与 Provider：经 iLink Bot 线协议连接一个扫码绑定的微信账号——绑定（`startLink`、`status`、`unlink`）、入站投递（`weixin/message`）与出站文本（`send`）。"
kind: "package-reference"
---

# @deepseek-ai/dsh-weixin

[English](README.md) | 中文

## 概述

微信能力（`ctx.weixin`）的 Service Definition 与 Provider：经 iLink Bot 线协议连接一个扫码绑定的微信账号——绑定（`startLink`、`status`、`unlink`）、入站投递（`weixin/message`）与出站文本（`send`）。

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
| `retryDelayMs` | 单次轮询失败后的重试延迟（默认 2000）。 |
| `backoffDelayMs` | 连续三次失败后的退避延迟（默认 30000）。 |

绑定是一次性动作：扫码产出的 bot token 以 0600 权限存放在 harness home 下，重启后无需再次扫码即可继续接收。`status()` 报告已绑定的账号或待渲染的扫码挑战；未绑定时的任何发送都抛出携带 `WEIXIN_NOT_LINKED` 代码的 `WeixinError`，线协议侧的拒绝携带 `WEIXIN_API`。服务端会话过期会解绑账号并以 `false` 发出 `weixin/link`，人由此得知需要重新扫码。接收游标在投递前持久化，崩溃后是重投而不是跳过。

-----

<a id="model-experience"></a>
## Model Experience

无，因为该微信连接服务不注册任何提示词、schema 或结果；模型可见的对话由 dsh-weixin-agent 负责。

#### KV Cache effect

无影响；该服务不向模型请求添加任何内容。

## Known Limitations and Deferred Work

<a id="known-limitations-and-deferred-work"></a>

- 仅支持文本消息：图片、语音与文件没有媒体管线，非文本入站内容在边界处丢弃。
- 每个 harness home 只能绑定一个账号；凭据文件只保存一条链接。
- 仅支持私聊：群聊既不接收也不可寻址。
- bot token 以 0600 普通文件存放在 harness home 下，而不是经由 `ctx.credentials`。

<a id="dev-note"></a>
### 开发备注

<details>
<summary>维护者的工作上下文——点击展开</summary>

无。

</details>

**运行时不变式：** 不发布伴生入口。该服务不追加会话事件；入站消息经不落盘的 `weixin/message` Cordis 事件交给消费方。
