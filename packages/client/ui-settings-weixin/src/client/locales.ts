/** `weixin` namespace dictionaries (the WeChat settings section's copy). */

/** Simplified Chinese dictionary (the key-set source of truth). */
export const zh = {
  nav: '消息渠道',
  lead: '扫码后，微信里发来的消息由本机智能体回答，回复直接发回聊天。只需关联一次。',
  'state.linked': '已关联',
  'action.link': '生成二维码',
  'action.linking': '正在生成…',
  'action.unlink': '解除关联',
  'qr.alt': '微信登录二维码',
  'qr.hint': '用微信扫描二维码，并在手机上确认。',
  'qr.scanned': '已扫码，请在微信中确认。',
  'qr.fallback': '无法扫描？在浏览器中打开链接',
  'error.link': '无法获取二维码，请稍后重试。',
} satisfies Record<string, string>

/** The weixin namespace key union. */
export type WeixinKey = keyof typeof zh

/** English dictionary, checked complete against the zh key set. */
export const en = {
  nav: 'Messaging',
  lead: 'Scan once to link an account: messages sent to it are answered by this workstation\'s agent, and replies go straight back to the chat.',
  'state.linked': 'Linked',
  'action.link': 'Show QR code',
  'action.linking': 'Requesting…',
  'action.unlink': 'Unlink',
  'qr.alt': 'WeChat login QR code',
  'qr.hint': 'Scan with WeChat, then confirm on your phone.',
  'qr.scanned': 'Scanned — confirm in WeChat to finish.',
  'qr.fallback': 'Cannot scan? Open the link in a browser',
  'error.link': 'Could not obtain a QR code; try again shortly.',
} satisfies Record<WeixinKey, string>

/** Japanese dictionary, checked complete against the zh key set. */
export const ja = {
  nav: 'メッセージ',
  lead: '一度スキャンして連携すると、届いたメッセージにこのワークステーションのエージェントが答え、返信はそのままチャットに戻ります。',
  'state.linked': '連携済み',
  'action.link': 'QR コードを表示',
  'action.linking': '要求中…',
  'action.unlink': '連携を解除',
  'qr.alt': 'WeChat ログイン QR コード',
  'qr.hint': 'WeChat でスキャンし、スマートフォンで確認してください。',
  'qr.scanned': 'スキャン済み — WeChat で確認して完了します。',
  'qr.fallback': 'スキャンできない場合はブラウザーでリンクを開いてください',
  'error.link': 'QR コードを取得できませんでした。しばらくしてからもう一度お試しください。',
} satisfies Record<WeixinKey, string>

/** Spanish dictionary, checked complete against the zh key set. */
export const es = {
  nav: 'Mensajería',
  lead: 'Escanea una vez para vincular una cuenta: el agente de esta estación de trabajo responde los mensajes que reciba y las respuestas vuelven directamente al chat.',
  'state.linked': 'Vinculada',
  'action.link': 'Mostrar código QR',
  'action.linking': 'Solicitando…',
  'action.unlink': 'Desvincular',
  'qr.alt': 'Código QR de inicio de sesión de WeChat',
  'qr.hint': 'Escanéalo con WeChat y confirma en tu teléfono.',
  'qr.scanned': 'Escaneado: confirma en WeChat para terminar.',
  'qr.fallback': '¿No puedes escanear? Abre el enlace en un navegador',
  'error.link': 'No se pudo obtener un código QR; inténtalo de nuevo en breve.',
} satisfies Record<WeixinKey, string>

/** French dictionary, checked complete against the zh key set. */
export const fr = {
  nav: 'Messagerie',
  lead: 'Scannez une seule fois pour lier un compte : l\'agent de ce poste de travail répond aux messages reçus et les réponses repartent directement dans la conversation.',
  'state.linked': 'Lié',
  'action.link': 'Afficher le code QR',
  'action.linking': 'Demande en cours…',
  'action.unlink': 'Dissocier',
  'qr.alt': 'Code QR de connexion WeChat',
  'qr.hint': 'Scannez avec WeChat, puis confirmez sur votre téléphone.',
  'qr.scanned': 'Scanné — confirmez dans WeChat pour terminer.',
  'qr.fallback': 'Impossible de scanner ? Ouvrez le lien dans un navigateur',
  'error.link': 'Impossible d\'obtenir un code QR ; réessayez dans un instant.',
} satisfies Record<WeixinKey, string>

/** German dictionary, checked complete against the zh key set. */
export const de = {
  nav: 'Nachrichten',
  lead: 'Einmal scannen, um ein Konto zu verknüpfen: Der Agent dieser Workstation beantwortet eingehende Nachrichten, und Antworten gehen direkt zurück in den Chat.',
  'state.linked': 'Verknüpft',
  'action.link': 'QR-Code anzeigen',
  'action.linking': 'Wird angefordert…',
  'action.unlink': 'Verknüpfung aufheben',
  'qr.alt': 'WeChat-Anmelde-QR-Code',
  'qr.hint': 'Mit WeChat scannen und auf dem Telefon bestätigen.',
  'qr.scanned': 'Gescannt – in WeChat bestätigen, um abzuschließen.',
  'qr.fallback': 'Scannen nicht möglich? Link im Browser öffnen',
  'error.link': 'QR-Code konnte nicht abgerufen werden; bitte in Kürze erneut versuchen.',
} satisfies Record<WeixinKey, string>

/** Russian dictionary, checked complete against the zh key set. */
export const ru = {
  nav: 'Сообщения',
  lead: 'Отсканируйте один раз, чтобы привязать аккаунт: агент этой рабочей станции отвечает на присланные сообщения, а ответы уходят прямо в чат.',
  'state.linked': 'Привязан',
  'action.link': 'Показать QR-код',
  'action.linking': 'Запрос…',
  'action.unlink': 'Отвязать',
  'qr.alt': 'QR-код для входа в WeChat',
  'qr.hint': 'Отсканируйте в WeChat и подтвердите на телефоне.',
  'qr.scanned': 'Отсканировано — подтвердите в WeChat, чтобы завершить.',
  'qr.fallback': 'Не удаётся отсканировать? Откройте ссылку в браузере',
  'error.link': 'Не удалось получить QR-код; повторите попытку чуть позже.',
} satisfies Record<WeixinKey, string>

/** Portuguese dictionary, checked complete against the zh key set. */
export const pt = {
  nav: 'Mensagens',
  lead: 'Faça a leitura uma vez para vincular uma conta: o agente desta estação de trabalho responde às mensagens recebidas, e as respostas voltam direto para a conversa.',
  'state.linked': 'Vinculada',
  'action.link': 'Mostrar código QR',
  'action.linking': 'Solicitando…',
  'action.unlink': 'Desvincular',
  'qr.alt': 'Código QR de login do WeChat',
  'qr.hint': 'Leia com o WeChat e confirme no seu telefone.',
  'qr.scanned': 'Lido — confirme no WeChat para concluir.',
  'qr.fallback': 'Não consegue ler? Abra o link em um navegador',
  'error.link': 'Não foi possível obter um código QR; tente novamente em instantes.',
} satisfies Record<WeixinKey, string>
