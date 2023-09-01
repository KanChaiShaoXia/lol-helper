import { Icon } from "../index";
import { skillChange, checkActiveUser } from "../../store";
import lng from "../../lng.json";
import style from "./style.module.scss";

export default function User(props) {
  const { item } = props;
  console.log("item: ", item);
  const clickItem = () => {
    checkActiveUser(item);
    skillChange();
  };

  return (
    <div className={style.wrapper}>
      <div className={style.user}>
        <div className={style.change} onClick={clickItem}>
          {lng.chinese.change}
        </div>
        <div className={style.name}>{item.name}</div>
      </div>
      <div className={style.skillBox}>
        {item.skill.map((skill) => (
          <Icon skill={skill} uesr={item} key={skill.type} />
        ))}
      </div>
    </div>
  );
}
