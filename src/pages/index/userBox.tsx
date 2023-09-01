import { User } from "../../components";

export default function UserBox(props) {
  const { userList } = props;

  return (
    <div className='list'>
      {userList.map((item) => {
        return (
          <div className='listItem' key={item.name}>
            <User {...{ item }} />
          </div>
        );
      })}
    </div>
  );
}
