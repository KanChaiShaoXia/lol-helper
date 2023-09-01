import { useTranslation } from "react-i18next";
import { RoleType } from "../../constant";
import { checkActiveUser, skillChange } from "../../service";
import { SkillIcon } from "../Icon";

interface Props {
  role: RoleType;
}
export function Role(props: Props) {
  const { t } = useTranslation();
  const { role } = props;
  const clickItem = () => {
    checkActiveUser(role);
    skillChange();
  };

  return (
    <div>
      <div className='group transition-colors duration-100 bg-[#011c2f] text-center cursor-pointer relative text-xs py-1'>
        <div
          className='absolute z-10 w-full transition-all duration-100 opacity-0 group-hover:opacity-100'
          onClick={clickItem}
        >
          {t("change")}
        </div>
        <div className='transition-opacity duration-100 opacity-100 group-hover:opacity-0'>
          {t(role.name)}
        </div>
      </div>
      <div className='flex'>
        {role.skill.map((skill) => (
          <SkillIcon skill={skill} role={role} key={skill.type} />
        ))}
      </div>
    </div>
  );
}
