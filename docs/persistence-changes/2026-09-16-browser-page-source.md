---
description: "Records a persistence type transition and its compatibility acknowledgement."
kind: persistence-change
---

# 2026-09-16-browser-page-source

English | [中文](2026-09-16-browser-page-source.zh.md)

## Summary

Add the optional `browserPage` field to the `user-rpc` message source, which records the active tab the dsh browser extension panel reported with a prompt.

## Table of Contents

- [Declaration](#declaration)
- [Compatibility](#compatibility)
- [Verification](#verification)
- [Dev Note](#dev-note)

<a id="declaration"></a>
## Declaration

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
## Compatibility

Existing logs omit `browserPage`, which readers treat as no extension report, so they stay readable and replay unchanged. The field is optional and lives only in message source metadata, which never reaches a model request; the active-page text a model reads is a separate plugin `user/message`. The `agent/inbox/spliced` and `session/title-llm-request` paths embed the same message source type, so they change with it. Event envelopes and the Session format version are unchanged.

<a id="verification"></a>
## Verification

`pnpm run typecheck` passes. A focused `vitest run` over `packages/api/session-controller`, `packages/bundle/web-app`, `packages/client/ui-settings-general`, and `packages/client/ui-settings-weixin` passes 821 tests in 48 files.

<a id="dev-note"></a>
## Dev Note

None.
