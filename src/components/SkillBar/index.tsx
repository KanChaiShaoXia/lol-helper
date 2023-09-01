/* eslint-disable jsx-quotes */
import { useState } from "react";
import cx from "classnames";
import { skillChange, checkUser, changeTimer, useStore } from "../../store";
import { defaultSkill } from "../../constant";
import style from "./style.module.scss";
import { cloneDeep } from "lodash-es";

export default function SkillBar() {
  const { user } = useStore(checkUser);
  const [current, setCurrent] = useState(cloneDeep(user));
  const [active, setActive] = useState(null);

  const backClick = () => {
    setActive(null);
    setCurrent(cloneDeep(user));
    skillChange();
  };

  const saveClick = () => {
    changeTimer(current);
    backClick();
  };

  const skillClick = (item) => {
    if (active === item.type) return;
    let result = current.skill.map((i) => {
      if (i.type === active) i = item;
      return i;
    });
    if (result[0].type === result[1].type) {
      result = current.skill.reverse();
    }
    setCurrent({ name: current.name, skill: result });
    setActive(item.type);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.btns}>
        <div className={style.btn} onClick={backClick}>
          ✘
        </div>
        <div className={style.btn} onClick={saveClick}>
          ✓
        </div>
      </div>
      <div className={style.userBox}>
        {current.skill.map((item) => {
          return (
            <img
              key={item.type}
              className={cx(
                style.userAva,
                item.type === active && style.active
              )}
              src={item.path}
              onClick={() => setActive(item.type)}
            />
          );
        })}
      </div>
      <div className={style.skills}>
        {active &&
          defaultSkill.map((item) => {
            return (
              <img
                className={cx(
                  style.skillImg,
                  active === item.type && style.active
                )}
                key={item.type}
                src={item.path}
                onClick={() => skillClick(item)}
              />
            );
          })}
      </div>
    </div>
  );
}
