import RepoItem from "./RepoItem";
type Repos = {
  repos: [];
};

const RepoList: React.FC<Repos> = ({ repos }) => {
  return (
    <div className="card rounded-lg shadow lg bg-base-100">
      <div className="card-body">
        <h2 className="card-title font-bold text-3xl my-4">
          Latest Repositories
        </h2>
        {!!repos &&
          repos.map((repo: any) => <RepoItem key={repo.id} repo={repo} />)}
      </div>
    </div>
  );
};

export default RepoList;
