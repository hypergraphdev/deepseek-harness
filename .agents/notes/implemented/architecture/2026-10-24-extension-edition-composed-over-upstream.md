# Agent Note: Extension edition composed over the upstream tip

Status: implemented

English | [中文](2026-10-24-extension-edition-composed-over-upstream.zh.md)

## Problem

This edition owns four capabilities upstream does not provide — the browser side panel, page capture, the HXA team, and the WeChat entry point — alongside three that upstream now ships itself: composer dictation, local coding-CLI delegation, and settings-navigation labels. Carrying all seven forward costs conflicts on every upstream sync, and those conflicts sit away from the value: a direct merge of the upstream tip reports 57 conflicting paths, of which 29 are generated artifacts and the lock file, while `packages/preset/agent-presets` no longer exists upstream, so the merge leaves that package's three preset patches as orphans.

## Decision

**The edition composes over the upstream tip instead of merging it.** Every capability upstream has no path for lands as whole packages — `apps/extension`, `packages/hxa/*`, `packages/weixin/*`, `packages/client/ui-agents`, `packages/client/ui-settings-weixin` — which therefore carry no conflict surface. What remains is a bounded set of edits to upstream files, each one a mount point: bundle plugin rows, slot declaration and registration, CLI subcommands, the Remote prompt path, and the Web surface prompt.

**Generated artifacts are regenerated, never reconciled by hand.** The `doc-sync` generators own every catalog, graph, and schema this edition touches, and they learn the new packages through their own tables: `SERVICE_PAGE` and `TYPE_LINK_EXEMPTIONS` in `gen-cordis-catalog`, `SERVICE_ROLES` in `gen-doc-graphs`, `TOOL_PACKAGES` in `gen-tool-catalog`, and the Model Experience declarations in `verify-package-readme-model-experience`.

**Capabilities upstream now ships are dropped rather than maintained in parallel.** Dictation is upstream's `voice-input-bundle`, whose SenseVoice ONNX worker is local by construction and supersedes a Web Speech API button that needed a cross-origin bridge inside the panel. Local coding-CLI delegation is upstream's own `subagent-codex` and `subagent-claude-code`, reachable from the shipped presets without an edition-specific preset patch.

**The team roster keeps a declared sidebar seat of its own.** `sidebar.agents` is a single-occupant slot between the browsing region and the foot. `sidebar.panellist` addresses main panels through icon buttons, so routing the roster there would convert a resident list into a switchable panel. The seat costs one render call plus its contract and registration lines, and renders nothing while HXA is dormant.

**Every producer of injected context declares its own `MessageSource` kind.** `hxa-inbound`, `weixin-agent`, and the Web surface's browser-page context each merge one kind into `MessageSourceMap`, as upstream requires: there is no shared catch-all kind, so a producer that needs a durable source identity declares it in its own module.

## Alternatives considered

Merging the upstream tip into the edition branch means resolving 29 generated-artifact conflicts by hand and still deciding what a deleted package's preset patches become; the generators reproduce those 29 files from the source plane in one command, and the deleted package's patches have no successor to carry.

Keeping Web Speech dictation beside upstream's voice input would put two microphone paths with different processing locations into one composer toolbar, with no way for the user to tell which one a recording reached.

## Consequences

- An upstream sync rebases the mount-point edits and reruns the generators, so the conflict set is bounded by that list rather than by the size of the upstream delta.
- The Chinese counterpart of `docs/capability-seams.md` is authored, and its generator splices only `docs/event-producer-consumer.md`, so the seam table and mermaid block need the same rows applied by hand on that side.
- Dictation requires the user to enable upstream's voice bundle; this edition advertises no microphone path of its own.
- The three new `MessageSource` kinds are durable session content, declared under `docs/persistence-changes/`.
