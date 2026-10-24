---
description: "The WeChat settings section: link an account by scanning a QR code, and unlink one that is already linked."
kind: "package-reference"
---

# @deepseek-ai/dsh-client-ui-settings-weixin

English | [中文](README.zh.md)

## Summary

The WeChat settings section: link an account by scanning a QR code, and unlink one that is already linked. The browser half registers the section into a `settings.section` seat (declared by [dsh-client-ui-settings](../ui-settings/README.md); id `messaging`, order 40) and registers the `weixin` locale namespace; the node half is an empty `apply` that only makes the plugin mountable from a host cordis.yml, with the browser bundle discovered through the package.json `dsh.client` declaration.

## Table of Contents

- [Use this package](#use-this-package)
- [Model Experience](#model-experience)
- [Known Limitations and Deferred Work](#known-limitations-and-deferred-work)
- [Dev Note](#dev-note)

-----

<a id="use-this-package"></a>
## Use this package

The section consumes the host's `/api/weixin/status`, `/api/weixin/link`, and `/api/weixin/unlink` routes, served by the [web-app bundle](../../bundle/web-app/README.md) over the `ctx.weixin` service of [dsh-weixin](../../weixin/weixin/README.md). A host without the WeChat capability answers 404 and the section renders nothing. While no account is linked the section offers a link button; a started challenge shows the QR code and polls status every 2 seconds until the scan confirms or the challenge lapses; a linked account shows its id and an unlink control. The QR code is encoded in the panel as an inline SVG — sending the login payload to an image service would hand a third party the credential the scan carries — with a plain link as the fallback for a screen that cannot be scanned.

-----

<a id="model-experience"></a>
## Model Experience

Indirectly, through the link mutations this section posts to the host; dsh-weixin owns the model-visible WeChat message path that a linked account enables.

#### KV Cache effect

None directly; messages from a linked account enter the WeChat agent's session through dsh-weixin-agent, whose README describes their cache effect.

## Known Limitations and Deferred Work

<a id="known-limitations-and-deferred-work"></a>

- **Unlink failures are silent** — the unlink action posts and refreshes without inspecting the response, so a failed unlink leaves the linked state on screen with no error message; only the link action reports errors.
- **A lapsed challenge resets without notice** — when a pending QR code expires on the host, the next status poll simply returns the section to the link button; the user is never told the code expired.
- **Single account** — the status route models exactly one linked account, and the section offers no multi-account management.

<a id="dev-note"></a>
### Dev Note

<details>
<summary>Working context for maintainers — click to expand</summary>

None.

</details>

**Runtime invariant:** No companion is published. The section is a single slot registration with no durable state of its own.
