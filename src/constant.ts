import { cloneDeep, values } from "lodash-es";

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

export enum RoleName {
  Top = "top",
  Mid = "mid",
  Sup = "support",
  Jg = "jungle",
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

export const defaultSkillList = values(defaultSkill);

export type SkillInfoType = (typeof defaultSkillList)[number];

export const defaultRoleList = [
  {
    name: RoleName.Top,
    skill: [defaultSkill.Flash, defaultSkill.Teleport],
  },
  {
    name: RoleName.Jg,
    skill: [defaultSkill.Flash, defaultSkill.Smite],
  },
  {
    name: RoleName.Mid,
    skill: [defaultSkill.Flash, defaultSkill.Dot],
  },
  {
    name: RoleName.Adc,
    skill: [defaultSkill.Flash, defaultSkill.Heal],
  },
  {
    name: RoleName.Sup,
    skill: [defaultSkill.Flash, defaultSkill.Exhaust],
  },
].map((i) => cloneDeep(i));

export type RoleType = (typeof defaultRoleList)[number];
