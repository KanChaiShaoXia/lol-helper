import cx from "classnames";
import { data } from "../../constant";
import style from "./style.module.scss";

import { resetTimer } from "../../store";
import { getTimeFormat } from "../../utils/tools";

export default function Icon(props) {
  const { skill, uesr } = props;
  const time = getTimeFormat(skill.time);

  return (
    <div
      className={cx(style.item, skill.time === 0 && style.active)}
      onClick={() => resetTimer(uesr, skill)}
      onContextMenu={() => resetTimer(uesr, skill, true)}
    >
      <img className={style.img} src={data.get(skill.type)} />
      <div className={style.time}>{time}</div>
    </div>
  );
}
