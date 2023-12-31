import { Role } from "../../components/role";
import { useRoleList } from "../../service";

export default function RoleBox() {
  const roleList = useRoleList();

  return (
    <div className='flex flex-col items-center mb-0.5'>
      {roleList.map((role) => (
        <Role key={role.name} role={role} />
      ))}
    </div>
  );
}
