import { useTranslation } from "react-i18next";
import SkillBar from "../../components/skill-bar";
import { useOpenStatus, useRoleList } from "../../service";
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
      className='overflow-hidden flex h-screen border-2 border-[#785a28] bg-gradient-body text-[#cdbe91] relative items-center justify-between px-2'
      onContextMenu={(e) => e.preventDefault()}
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
        onClick={onCopy}
      >
        {t("copy")}
      </div>
    </div>
  );
}
