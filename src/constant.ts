export const data = new Map();

export enum Skills {
  /** 治疗 */
  Heal = "Heal",
  /** 幽灵疾步 */
  Haste = "Haste",
  /** 屏障 */
  Barrier = "Barrier",
  /** 虚弱 */
  Exhaust = "Exhaust",
  /** 清晰术 */
  Mana = "Mana",
  /** 传送 */
  Teleport = "Teleport",
  /** 净化 */
  Boost = "Boost",
  /** 引燃 */
  Dot = "Dot",
  /** 惩戒 */
  Smite = "Smite",
  /** 标记 */
  Snowball = "Snowball",
  /** 闪现 */
  Flash = "Flash",
}

export enum UserName {
  Top = "top",
  Ap = "ap",
  Sup = "sup",
  Jg = "jg",
  Adc = "adc",
}

export const defaultSkill = {
  [Skills.Flash]: { resetTime: 300, type: Skills.Flash, time: 0 },
  [Skills.Dot]: { resetTime: 180, type: Skills.Dot, time: 0 },
  [Skills.Teleport]: { resetTime: 420, type: Skills.Teleport, time: 0 },
  [Skills.Haste]: { resetTime: 180, type: Skills.Haste, time: 0 },
  [Skills.Heal]: { resetTime: 240, type: Skills.Heal, time: 0 },
  [Skills.Barrier]: { resetTime: 180, type: Skills.Barrier, time: 0 },
  [Skills.Exhaust]: { resetTime: 210, type: Skills.Exhaust, time: 0 },
  [Skills.Mana]: { resetTime: 240, type: Skills.Mana, time: 0 },
  [Skills.Boost]: { resetTime: 210, type: Skills.Boost, time: 0 },
  [Skills.Smite]: { resetTime: 15, type: Skills.Smite, time: 0 },
};
