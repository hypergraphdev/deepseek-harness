---
description: "微信设置区块：扫码关联一个账号，或解除已关联的账号。"
kind: "package-reference"
---

# @deepseek-ai/dsh-client-ui-settings-weixin

[English](README.md) | 中文

## 概述

微信设置区块：扫码关联一个账号，或解除已关联的账号。浏览器半侧把该区块注册进一个 `settings.section` 席位（由 [dsh-client-ui-settings](../ui-settings/README.zh.md) 声明；id 为 `messaging`，order 为 40），并注册 `weixin` 语言包命名空间；node 半侧是空的 `apply`，仅让插件可以从 host cordis.yml 挂载，浏览器 bundle 经 package.json 的 `dsh.client` 声明被发现。

## 目录

- [使用本包](#use-this-package)
- [Model Experience](#model-experience)
- [Known Limitations and Deferred Work](#known-limitations-and-deferred-work)
- [开发备注](#dev-note)

-----

<a id="use-this-package"></a>
## 使用本包

区块消费 host 的 `/api/weixin/status`、`/api/weixin/link` 与 `/api/weixin/unlink` 路由，由 [web-app bundle](../../bundle/web-app/README.zh.md) 基于 [dsh-weixin](../../weixin/weixin/README.zh.md) 的 `ctx.weixin` 服务提供。host 未组合微信能力时路由回答 404，区块渲染空内容。未关联账号时区块提供关联按钮；发起挑战后展示二维码，并每 2 秒轮询状态，直到扫码确认或挑战失效；已关联的账号展示其 id 与解除关联控件。二维码在面板内编码为内联 SVG——把登录 payload 发给图片服务，等于把扫码承载的凭证交给第三方——并为无法扫描的屏幕提供一个纯链接兜底。

-----

<a id="model-experience"></a>
## Model Experience

间接影响：该区块向宿主提交绑定变更；绑定账号后开启的模型可见微信消息路径由 dsh-weixin 负责。

#### KV Cache 影响

本包不直接影响；绑定账号的消息经 dsh-weixin-agent 进入微信 agent 的会话，其缓存影响见该包 README。

## Known Limitations and Deferred Work

<a id="known-limitations-and-deferred-work"></a>

- **解除关联失败是静默的** — 解除关联操作发出请求并刷新，但不检查响应；失败时界面仍停留在已关联状态，且没有任何错误提示，只有关联操作会报告错误。
- **挑战失效时不作提示** — 待扫的二维码在 host 侧过期后，下一次状态轮询只是把区块退回关联按钮；用户永远不会被告知二维码已过期。
- **单账号** — 状态路由只建模一个已关联账号，区块也不提供多账号管理。

<a id="dev-note"></a>
### 开发备注

<details>
<summary>维护者的工作上下文——点击展开</summary>

无。

</details>

**运行时不变式：** 不发布伴生入口。该区块只有一个插槽注册，没有自有的持久状态。
