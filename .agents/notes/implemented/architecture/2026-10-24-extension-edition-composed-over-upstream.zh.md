# Agent Note: 增强版在上游最新提交之上组装

Status: implemented

[English](2026-10-24-extension-edition-composed-over-upstream.md) | 中文

## Problem

本版持有四项上游未提供的能力——浏览器侧边栏、页面读取、HXA 团队、微信接入——同时还带着三项上游已自行发布的能力：输入框听写、本机编码 CLI 委派、设置页导航标签。把七项一起往前带，每次同步上游都要付出冲突代价，而这些冲突恰恰不在价值所在之处：直接合并上游最新提交会报 57 条冲突路径，其中 29 条是生成产物与锁文件；而 `packages/preset/agent-presets` 在上游已不存在，合并后该包的三份预设补丁成为无主文件。

## Decision

**本版在上游最新提交之上组装，而非把上游合并进来。** 凡上游没有对应路径的能力都以整包落地——`apps/extension`、`packages/hxa/*`、`packages/weixin/*`、`packages/client/ui-agents`、`packages/client/ui-settings-weixin`——因此完全不产生冲突面。剩下的是对上游文件的一组有界改动，每一处都是挂载点：bundle 插件行、槽位声明与注册、CLI 子命令、Remote 提问通路、Web 界面提示词。

**生成产物一律重新生成，不手工对账。** 本版触及的目录、关系图与 schema 全部由 `doc-sync` 的生成器拥有，生成器通过自己的表认识新包：`gen-cordis-catalog` 的 `SERVICE_PAGE` 与 `TYPE_LINK_EXEMPTIONS`、`gen-doc-graphs` 的 `SERVICE_ROLES`、`gen-tool-catalog` 的 `TOOL_PACKAGES`，以及 `verify-package-readme-model-experience` 中的 Model Experience 声明。

**上游已发布的能力就此退出本版，不并行维护。** 听写交由上游 `voice-input-bundle`，其 SenseVoice ONNX worker 在构造上即为本地处理，取代了需要在面板内做跨源桥接的 Web Speech API 按钮。本机编码 CLI 委派交由上游自带的 `subagent-codex` 与 `subagent-claude-code`，从出厂预设即可触及，无需本版专有的预设补丁。

**团队花名册保留自己声明的侧边栏座位。** `sidebar.agents` 是浏览区与脚部之间的单占位槽位。`sidebar.panellist` 以图标按钮寻址主面板，把花名册接到那里会让常驻列表变成可切换面板。该座位的代价是一次渲染调用加上契约与注册各一处，HXA 休眠时不渲染任何内容。

**每个注入上下文的生产者各自声明 `MessageSource` kind。** `hxa-inbound`、`weixin-agent` 与 Web 界面的浏览器页面上下文各向 `MessageSourceMap` 合并一个 kind，这正是上游的要求：不存在共享的兜底 kind，需要持久来源标识的生产者在自己的模块里声明。

## Alternatives considered

把上游最新提交合并进本版分支，意味着手工解决 29 条生成产物冲突，并且仍要决定一个已删除包的预设补丁该如何处置；而生成器一条命令就能从源平面重建那 29 个文件，已删除包的补丁也没有后继者可以承接。

在上游语音输入旁边保留 Web Speech 听写，会把处理位置不同的两条麦克风通路放进同一个输入框工具栏，用户无从分辨某次录音去了哪一条。

## Consequences

- 同步上游时，把挂载点改动重放一遍并重跑生成器即可，冲突集合由该清单界定，而不随上游增量规模增长。
- `docs/capability-seams.md` 的中文对侧是人工撰写的，其生成器只拼接 `docs/event-producer-consumer.md`，因此 seam 表与 mermaid 块需在中文侧手工补上相同的行。
- 听写需要用户自行启用上游的语音 bundle；本版不公布任何自带的麦克风通路。
- 三个新的 `MessageSource` kind 属于持久会话内容，已在 `docs/persistence-changes/` 下声明。
