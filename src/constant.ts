export const data = new Map();

export enum Skills {
  /** 治疗 */
  Heal = "Heal",
  /** 幽灵疾步 */
  Haste = "Haste",
  Barrier = "Barrier",
  Exhaust = "Exhaust",
  Mana = "Mana",
  Teleport = "Teleport",
  Boost = "Boost",
  Dot = "Dot",
  Smite = "Smite",
  Snowball = "Snowball",
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
};

export const defaultSkill1 = [
  {
    resetTime: 300,
    type: Skills.Flash,
    time: 0,
  },
  {
    resetTime: 180,
    type: Skills.Dot,
    time: 0,
  },
  {
    resetTime: 420,
    type: Skills.Teleport,
    time: 0,
  },
  {
    resetTime: 180,
    type: Skills.Haste,
    time: 0,
  },
  {
    resetTime: 240,
    type: Skills.Heal,
    time: 0,
  },
  {
    resetTime: 180,
    type: Skills.Barrier,
    time: 0,
  },
  {
    resetTime: 210,
    type: Skills.Exhaust,
    time: 0,
  },
  {
    resetTime: 240,
    type: Skills.Mana,
    time: 0,
  },
  {
    resetTime: 210,
    type: Skills.Boost,
    time: 0,
  },
  {
    resetTime: 15,
    type: Skills.Smite,
    time: 0,
  },
];

defaultSkill.forEach((item) => {
  data.set(item.type, `./static/icon/${item}.png`);
});
