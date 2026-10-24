/** `agents` namespace dictionaries (the sidebar team panel's copy). */

/** Simplified Chinese dictionary (the key-set source of truth). */
export const zh = {
  'panel.title': 'AI 团队',
  'panel.empty': '暂无队友',
  'bot.online': '在线',
  'bot.offline': '离线',
} satisfies Record<string, string>

/** The agents namespace key union. */
export type AgentsKey = keyof typeof zh

/** English dictionary, checked complete against the zh key set. */
export const en = {
  'panel.title': 'Agents',
  'panel.empty': 'No teammates yet',
  'bot.online': 'online',
  'bot.offline': 'offline',
} satisfies Record<AgentsKey, string>

/** Japanese dictionary, checked complete against the zh key set. */
export const ja = {
  'panel.title': 'エージェント',
  'panel.empty': 'チームメイトはまだいません',
  'bot.online': 'オンライン',
  'bot.offline': 'オフライン',
} satisfies Record<AgentsKey, string>

/** Spanish dictionary, checked complete against the zh key set. */
export const es = {
  'panel.title': 'Agentes',
  'panel.empty': 'Aún no hay compañeros',
  'bot.online': 'en línea',
  'bot.offline': 'sin conexión',
} satisfies Record<AgentsKey, string>

/** French dictionary, checked complete against the zh key set. */
export const fr = {
  'panel.title': 'Agents',
  'panel.empty': 'Aucun coéquipier pour le moment',
  'bot.online': 'en ligne',
  'bot.offline': 'hors ligne',
} satisfies Record<AgentsKey, string>

/** German dictionary, checked complete against the zh key set. */
export const de = {
  'panel.title': 'Agenten',
  'panel.empty': 'Noch keine Teammitglieder',
  'bot.online': 'online',
  'bot.offline': 'offline',
} satisfies Record<AgentsKey, string>

/** Russian dictionary, checked complete against the zh key set. */
export const ru = {
  'panel.title': 'Агенты',
  'panel.empty': 'Пока нет участников команды',
  'bot.online': 'в сети',
  'bot.offline': 'не в сети',
} satisfies Record<AgentsKey, string>

/** Portuguese dictionary, checked complete against the zh key set. */
export const pt = {
  'panel.title': 'Agentes',
  'panel.empty': 'Ainda sem colegas de equipe',
  'bot.online': 'online',
  'bot.offline': 'offline',
} satisfies Record<AgentsKey, string>
