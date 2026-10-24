---
description: "记录持久化类型更改及其兼容性确认。"
kind: persistence-change
---

# 2026-10-24-edition-context-source-kinds

[English](2026-10-24-edition-context-source-kinds.md) | 中文

## 概述

为 user/message 新增三个由生产者自行声明的 MessageSource kind：web-surface-browser-page 承载扩展面板的活动标签页快照，hxa-inbound 承载一条队友私信，weixin-agent 承载一条入站微信消息。

## 目录

- [声明](#declaration)
- [兼容性](#compatibility)
- [验证](#verification)
- [开发备注](#dev-note)

<a id="declaration"></a>
## 声明

```yaml persistence-change
schemaVersion: 1
id: 2026-10-24-edition-context-source-kinds
baseline: false
changes:
  - root: "event:agent/inbox/spliced"
    previous: "2026-10-22-action-card-status"
    after: "702b659ba4ab8b45c269dc3578cc895e74a06741b65ef8d05b17012a4941447a"
    decision: same-version
  - root: "event:developer/message"
    previous: "2026-10-22-action-card-status"
    after: "0e5d05b65366f93546e32123935dcb053c092284e90411619d596555442434cf"
    decision: same-version
  - root: "event:session/title-llm-request"
    previous: "2026-10-22-action-card-status"
    after: "886deeec6658ca42cfaaa8643164de7c06113ef686285701c0c17e04f9ba1752"
    decision: same-version
  - root: "event:user/message"
    previous: "2026-10-22-action-card-status"
    after: "574f487d1dba6b8b038f2ca2f573ff4484727e97c62477c1325bb434e1c242b2"
    decision: same-version
```

<a id="compatibility"></a>
## 兼容性

MessageSource 是可合并扩展的联合类型，不认识这些 kind 的构建会走其文档化的默认分支并保留已记录的文本，没有读取方会拒绝该日志。每个 kind 固定自己的 form：快照携带 sections，两条通知各携带有界的 summary。已记录的内容语义不变，也没有移除或重命名任何既有 kind。

<a id="verification"></a>
## 验证

pnpm exec vitest run：hxa-inbound、weixin-agent 与 web-app 的测试套件通过，其中包含锁定入站桥来源 kind 及其 notice form 的断言；pnpm run typecheck 通过——正是它会拒绝落在已声明联合之外的 source 字面量。

<a id="dev-note"></a>
## 开发备注

无。
