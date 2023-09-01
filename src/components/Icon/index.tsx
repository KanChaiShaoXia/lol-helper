import { RoleType, SkillInfoType } from "../../constant";
import style from "./style.module.scss";

import { startTimer } from "../../service";
import { Images } from "../../static";
import { getTimeFormat } from "../../utils/tools";
import { cx } from "../../utils/classnames";

interface Props {
  skill: SkillInfoType;
  role: RoleType;
}
export function SkillIcon(props: Props) {
  const { skill, role } = props;
  const time = getTimeFormat(skill.time);

  return (
    <div
      className={cx(
        "w-8 h-8 overflow-hidden relative text-center bg-black",
        style.item,
        skill.time === 0 && style.active
      )}
      onClick={() => startTimer(role.name, skill.type)}
      onContextMenu={() => startTimer(role.name, skill.type, true)}
    >
      <img className={style.img} src={Images[skill.type]} />
      <div className={style.time}>{time}</div>
    </div>
  );
}
