import { SkillBar } from "../../components";
import lng from "../../lng.json";
import { switchSkillStatus, timers, useStore } from "../../store";
import { getTimeFormat } from "../../utils/tools";
import "./index.scss";
import UserBox from "./userBox";

export default function Index() {
  const { openStatus } = useStore(switchSkillStatus);
  const { userList } = useStore(timers);

  const outList = () => {
    let result = "";
    for (let i = 0; i < userList.length; i++) {
      const user = userList[i];
      let str = ``;
      for (let j = 0; j < user.skill.length; j++) {
        const item = user.skill[j];
        if (item.time > 0) {
          const time = getTimeFormat(item.time);
          str += `${item.name} ${time} `;
        }
      }
      if (str) result += `|| ${user.name}: ${str}`;
    }
    navigator.clipboard.writeText(result);
  };

  return (
    <div className='wrapper' onContextMenu={(e) => e.preventDefault()}>
      <div className='moveBar' />
      <div className={`${!openStatus ? "skillOpen" : "skillClose"}`}>
        <UserBox userList={userList} />
      </div>
      <div className={`${openStatus ? "skillOpen" : "skillClose"}`}>
        {openStatus && <SkillBar />}
      </div>
      <div className='copy' onClick={outList}>
        {lng.chinese.copy}
      </div>
    </div>
  );
}
