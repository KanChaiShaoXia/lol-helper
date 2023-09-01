/* eslint-disable jsx-quotes */
import cx from "classnames";
import { useState } from "react";
import { SkillInfoType, Skills, defaultSkillList } from "../../constant";
import { changeTimer, skillChange, useSelectRole } from "../../service";
import { Images } from "../../static";
import style from "./style.module.scss";

export default function SkillBar() {
  const selectRole = useSelectRole();
  const [current, setCurrent] = useState(selectRole);
  const [active, setActive] = useState<Skills | null>(null);

  const backClick = () => {
    setActive(null);
    setCurrent(selectRole);
    skillChange();
  };

  const skillClick = (item: SkillInfoType) => {
    if (active === item.type) return;
    let result = current.skill.map((i) => {
      if (i.type === active) i = item;
      return i;
    });

    if (result[0].type === result[1].type) {
      result = current.skill.reverse();
    }

    setActive(item.type);
    changeTimer({ name: current.name, skill: result });
    backClick();
  };

  return (
    <div className={style.wrapper}>
      <div className={style.userBox}>
        {current.skill.map((item) => {
          return (
            <img
              key={item.type}
              className={cx(
                style.userAva,
                item.type === active && style.active
              )}
              src={Images[item.type]}
              onClick={() => setActive(item.type)}
            />
          );
        })}
      </div>
      <div className={style.skills}>
        {active &&
          defaultSkillList.map((item) => {
            return (
              <img
                className={cx(
                  style.skillImg,
                  active === item.type && style.active
                )}
                key={item.type}
                src={Images[item.type]}
                alt={item.type}
                onClick={() => skillClick(item)}
              />
            );
          })}
      </div>
    </div>
  );
}
