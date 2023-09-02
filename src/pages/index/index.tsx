import { LogicalSize, appWindow } from "@tauri-apps/api/window";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SkillBar from "../../components/skill-bar";
import {
  resetTimer,
  skillChange,
  useOpenStatus,
  useRoleList,
} from "../../service";
import { getTimeFormat } from "../../utils/tools";
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

  useEffect(() => {
    void appWindow.setSize(new LogicalSize(80, 320));
  }, []);

  return (
    <div
      className='overflow-hidden flex h-screen border-2 border-p1 text-p2 relative items-center justify-between pb-2 flex-col'
      style={{
        backgroundImage: "linear-gradient(#010A13, #010F19)",
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div
        className='cursor-move fixed z-10 w-full top-0 left-0 h-1.5'
        data-tauri-drag-region
      />
      <div className={!openStatus ? "opacity-100" : "hidden"}>
        <RoleBox />
      </div>
      <div className={openStatus ? "opacity-100" : "hidden"}>
        {openStatus && <SkillBar />}
      </div>
      <div className='text-xs text-center whitespace-nowrap space-y-1'>
        <div className='click' onClick={openStatus ? skillChange : onCopy}>
          {t(openStatus ? "back" : "call")}
        </div>
        <div hidden={openStatus} className='click' onClick={resetTimer}>
          {t("reset")}
        </div>
      </div>
    </div>
  );
}
