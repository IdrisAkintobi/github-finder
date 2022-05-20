// import UserResults from "../components/users/UserResults";
import Alert from "../components/layout/Alert";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";
function Home() {
  return (
    <div className="mx-12">
      <Alert />
      <UserSearch />
      <UserResults />
    </div>
  );
}

export default Home;
