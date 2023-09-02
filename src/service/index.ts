import { create } from "zustand";
import { RoleName, RoleType, Skills, defaultRoleList } from "../constant";

export const $timerStore = create(() => ({
  roleList: defaultRoleList,
  openStatus: false,
}));

export const getRoleList = () => $timerStore.getState().roleList;

/** 当前选中的人物 */
export const $selectRole = create(() => defaultRoleList[0]);
export const useRoleList = () => $timerStore((state) => state.roleList);
export const useSelectRole = () => $selectRole((state) => state);

// 全局计时器
const globalTimer = {
  timer: 0 as unknown as NodeJS.Timeout,
  stop: () => clearInterval(globalTimer.timer),
  start: () => {
    globalTimer.timer = setInterval(() => {
      let next = false;
      const roleList = getRoleList().map((cur) => {
        cur.skill.map((item) => {
          if (item.time > 0) {
            item.time--;
            next = true;
          }
          return item;
        });
        return cur;
      });
      if (!next) {
        globalTimer.stop();
      }
      $timerStore.setState((pre) => ({ ...pre, roleList }), true);
    }, 1000);
  },
  reset: () => {
    globalTimer.stop();
    globalTimer.start();
  },
};

// 修改技能
export const changeTimer = (role: RoleType) => {
  const roleList = getRoleList();
  const result = roleList.map((item) => {
    if (item.name === role.name) {
      item = role;
    }
    return item;
  });
  $timerStore.setState((pre) => ({ ...pre, roleList: result }));
};

// 切换选中人物
export const checkActiveUser = (user: RoleType) => {
  $selectRole.setState(() => user);
};

// 开关
export const useOpenStatus = () => $timerStore((state) => state.openStatus);

// 切换开关
export const skillChange = () => {
  $timerStore.setState((pre) => ({ ...pre, openStatus: !pre.openStatus }));
};

// 开始技能倒计时
export const startTimer = (
  roleName: RoleName,
  skillType: Skills,
  rightClick = false
) => {
  const roleList = getRoleList().map((_item) => {
    const item = _item;
    if (item.name === roleName) {
      const curSkill = item.skill.find((s) => s.type === skillType);
      if (curSkill) {
        // 尚未冷却完毕，再次点击则快进5s
        if (curSkill.time > 0) {
          curSkill.time = curSkill.time - 5;
        } else {
          // 开始计时
          curSkill.time = curSkill.resetTime;
        }
        // 右键重置时间，或者快进到时间结束
        if (curSkill.time <= 0 || rightClick) {
          curSkill.time = 0;
        }
      }
    }
    return item;
  });

  globalTimer.reset();
  $timerStore.setState((pre) => ({ ...pre, roleList }));
};

export const resetTimer = () => {
  const roleList = getRoleList().map((item) => {
    item.skill.map((i) => (i.time = 0));
    return item;
  });

  globalTimer.reset();
  $timerStore.setState((pre) => ({ ...pre, roleList }));
};
