---
description: "侧边栏团队面板：只读展示用户 HXA 组织的成员名册，每个队友机器人一行，带在线状态圆点与可选角色。"
kind: "package-reference"
---

# @deepseek-ai/dsh-client-ui-agents

[English](README.md) | 中文

## 概述

侧边栏团队面板：只读展示用户 HXA 组织的成员名册，每个队友机器人一行，带在线状态圆点与可选角色。浏览器半侧占据侧边栏的 `sidebar.agents` 席位（由 [dsh-client-ui-sidebar](../ui-sidebar/README.zh.md) 声明），并注册 `agents` 语言包命名空间；node 半侧是空的 `apply`，仅让插件可以从 host cordis.yml 挂载，浏览器 bundle 经 package.json 的 `dsh.client` 声明被发现。

## 目录

- [使用本包](#use-this-package)
- [Model Experience](#model-experience)
- [Known Limitations and Deferred Work](#known-limitations-and-deferred-work)
- [开发备注](#dev-note)

-----

<a id="use-this-package"></a>
## 使用本包

名册数据来自 host 的 `/api/hxa/contacts` 路由，由 [web-app bundle](../../bundle/web-app/README.zh.md) 基于 `ctx.hxa` 提供，面板挂载期间每 20 秒轮询一次。404（未组合 HXA）或 host 不可达时渲染空内容，因此未配置的部署不为该席位付出任何像素；侧边栏折叠为图标栏时面板同样隐藏。

-----

<a id="model-experience"></a>
## Model Experience

无，因为这个浏览器端名册面板只读取宿主的 HXA 路由，不注册任何面向模型的内容。

#### KV Cache 影响

无影响；该面板不向模型请求添加任何内容。

## Known Limitations and Deferred Work

<a id="known-limitations-and-deferred-work"></a>

- **在线状态仅靠轮询** — 名册按固定 20 秒间隔刷新，没有推送通道，在线状态翻转最多滞后一个间隔；且只要面板保持挂载，即使 host 处于休眠也会持续轮询。
- **刷新失败会清空面板** — 任何 fetch 或解析失败都会把名册重置为未加载状态，整个面板随之消失，直到下一次轮询成功，而不是继续展示最近一次已知的名册。

<a id="dev-note"></a>
### 开发备注

<details>
<summary>维护者的工作上下文——点击展开</summary>

无。

</details>

**运行时不变式：** 不发布伴生入口。该面板只有一个插槽注册，没有自有的持久状态。
