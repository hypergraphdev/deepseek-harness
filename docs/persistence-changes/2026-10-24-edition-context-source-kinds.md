---
description: "Records a persistence type transition and its compatibility acknowledgement."
kind: persistence-change
---

# 2026-10-24-edition-context-source-kinds

English | [中文](2026-10-24-edition-context-source-kinds.zh.md)

## Summary

Adds three producer-declared MessageSource kinds to user/message: web-surface-browser-page carries the extension panel's active-tab snapshot, hxa-inbound carries one teammate DM, and weixin-agent carries one inbound WeChat message.

## Table of Contents

- [Declaration](#declaration)
- [Compatibility](#compatibility)
- [Verification](#verification)
- [Dev Note](#dev-note)

<a id="declaration"></a>
## Declaration

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
## Compatibility

MessageSource is a merge-extensible union, so a build that does not know these kinds falls through its documented default and keeps the recorded text; no reader refuses the log. Each kind pins its own form, so the snapshot carries sections and the two notices carry a bounded summary. Nothing already recorded changes meaning, and no earlier kind is removed or renamed.

<a id="verification"></a>
## Verification

pnpm exec vitest run: the hxa-inbound, weixin-agent, and web-app suites pass, including the assertion that pins the inbound bridge's source kind and its notice form; pnpm run typecheck passes, which is what rejects a source literal outside the declared union.

<a id="dev-note"></a>
## Dev Note

None.
