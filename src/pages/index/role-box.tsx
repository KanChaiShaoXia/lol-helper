import { Role } from "../../components/role";
import { useRoleList } from "../../service";

export default function RoleBox() {
  const roleList = useRoleList();

  return (
    <div className='flex items-center mb-0.5 space-x-2'>
      {roleList.map((role) => (
        <Role key={role.name} role={role} />
      ))}
    </div>
  );
}
