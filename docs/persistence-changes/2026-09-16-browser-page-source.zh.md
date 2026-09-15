---
description: "记录持久化类型更改及其兼容性确认。"
kind: persistence-change
---

# 2026-09-16-browser-page-source

[English](2026-09-16-browser-page-source.md) | 中文

## 概述

为 `user-rpc` 消息来源新增可选字段 `browserPage`，记录 dsh 浏览器扩展面板随某条提示一起上报的活动标签页。

## 目录

- [声明](#declaration)
- [兼容性](#compatibility)
- [验证](#verification)
- [开发备注](#dev-note)

<a id="declaration"></a>
## 声明

```yaml persistence-change
schemaVersion: 1
id: 2026-09-16-browser-page-source
baseline: false
changes:
  - root: "event:agent/inbox/spliced"
    previous: "2026-09-14-image-offload"
    after: "40972d0ee4160f612b82b8c77ba6f087dd328aa739c9cfeae0ced8fb67e283f9"
    decision: same-version
  - root: "event:session/title-llm-request"
    previous: "2026-09-14-image-offload"
    after: "1f3ebc4bbfee4f226c4dcfcd147deb269cf70bfbc939da8c975ab54da7060480"
    decision: same-version
  - root: "event:user/message"
    previous: "2026-09-14-image-offload"
    after: "4a13de9bd4a11d0104f1d3e82e2947c4ddf12a412cf84362b6a6530ce1e7ece7"
    decision: same-version
```

<a id="compatibility"></a>
## 兼容性

既有日志不含 `browserPage`，读取方将其视为没有扩展上报，因此仍可读取，重放结果不变。该字段是可选的，只存在于消息来源元数据中，而来源元数据不会进入模型请求；模型读到的活动页面文本是另一条插件来源的 `user/message`。`agent/inbox/spliced` 与 `session/title-llm-request` 路径内嵌同一消息来源类型，因此随之变化。事件信封与 Session 格式版本不变。

<a id="verification"></a>
## 验证

`pnpm run typecheck` 通过。针对 `packages/api/session-controller`、`packages/bundle/web-app`、`packages/client/ui-settings-general` 与 `packages/client/ui-settings-weixin` 的定向 `vitest run` 共 48 个文件、821 个测试全部通过。

<a id="dev-note"></a>
## 开发备注

无。
