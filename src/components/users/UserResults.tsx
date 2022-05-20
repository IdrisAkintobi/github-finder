import { Spinners } from "../../utils/utils";
import { useContext } from "react";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/githubContext";

const UserResults = () => {
  const { users, loading } = useContext(GithubContext);

  return loading ? (
    <Spinners />
  ) : (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users.map((e: any) => (
        <UserItem user={e} key={e.login} />
      ))}
    </div>
  );
};

export default UserResults;
