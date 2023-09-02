import cx from "classnames";
import { useState } from "react";
import { SkillInfoType, Skills, defaultSkillList } from "../../constant";
import { changeTimer, skillChange, useSelectRole } from "../../service";
import { Images } from "../../static";
import style from "./style.module.scss";

export default function SkillBar() {
  const selectRole = useSelectRole();
  const [current, setCurrent] = useState(selectRole);
  const [active, setActive] = useState<Skills>(selectRole.skill[0].type);

  const backClick = () => {
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
    <div className={"flex flex-col space-y-2 items-center justify-between"}>
      <div className={"flex space-x-1"}>
        {current.skill.map((item) => (
          <img
            key={item.type}
            className={cx(
              "cursor-pointer w-7 h-7 border border-p1 rounded-full transition-all brightness-50 hover:brightness-100",
              style.userAva,
              item.type === active && style.active
            )}
            src={Images[item.type]}
            onClick={() => setActive(item.type)}
          />
        ))}
      </div>
      <div className={"grid grid-cols-2 gap-2"}>
        {active &&
          defaultSkillList.map((item) => {
            return (
              <img
                className={cx(
                  "object-cover",
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
