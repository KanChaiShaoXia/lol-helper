import { useTranslation } from "react-i18next";
import SkillBar from "../../components/skill-bar";
import { skillChange, useOpenStatus, useRoleList } from "../../service";
import { getTimeFormat } from "../../utils/tools";
import "./index.scss";
import RoleBox from "./role-box";

export default function Index() {
  const openStatus = useOpenStatus();
  const roleList = useRoleList();
  const { t } = useTranslation();

  const onCopy = () => {
    const result: string[] = [];

    // [辅助: 闪现'4:34 虚弱'3:14]
    roleList.map((role) => {
      const inUse = role.skill
        .filter((s) => s.time !== 0)
        .map((i) => `${t(i.type)}'${getTimeFormat(i.time)}`);
      if (inUse.length) {
        result.push(`[${t(role.name)}: ${inUse.join(" ")}]`);
      }
    });

    navigator.clipboard.writeText(result.join("\n"));
  };

  return (
    <div
      className='overflow-hidden flex h-screen border-2 border-p1 bg-gradient-body text-p2 relative items-center justify-between p-2 flex-col'
      onContextMenu={(e) => e.preventDefault()}
      style={{
        backgroundImage: "linear-gradient(#010A13, #010F19)",
      }}
    >
      <div className='moveBar' />
      <div className={!openStatus ? "opacity-100" : "hidden"}>
        <RoleBox />
      </div>
      <div className={openStatus ? "opacity-100" : "hidden"}>
        {openStatus && <SkillBar />}
      </div>
      <div
        className='w-7 text-xs text-center cursor-pointer transition-all duration-100 hover:brightness-150 whitespace-nowrap'
        onClick={openStatus ? skillChange : onCopy}
      >
        {t(openStatus ? "back" : "export")}
      </div>
    </div>
  );
}
