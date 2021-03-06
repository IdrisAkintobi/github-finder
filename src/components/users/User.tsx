import { useEffect, useContext } from "react";
import { Spinners } from "../../utils/utils";
import RepoList from "../repo/RepoList";
import { useParams, Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";
import { FaCode, FaUserFriends, FaUsers } from "react-icons/fa";

const User = () => {
  const params = useParams();
  const { user, getUser, loading, repos } = useContext(GithubContext);

  useEffect(() => {
    getUser!(params.login as string);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    hireable,
  } = user;

  if (loading) {
    return <Spinners />;
  }
  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back to search
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="display_picture" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{name}</h2>
                <p className="flex-grow-0">{login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-mb bg-base-100 stats">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="stat-value text-lg">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <div className="stat-value text-lg">
                    <a
                      href={blog.startsWith("https") ? blog : `https://${blog}`}
                    >
                      Website
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="stat-value text-lg">
                    <a href={`https://twitter.com/${twitter_username}`}>
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title">Followers</div>
            <div className="stat-value text-3xl md:text-4xl">{followers}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title">Following</div>
            <div className="stat-value text-3xl md:text-4xl">{following}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCode className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title">Public repo</div>
            <div className="stat-value text-3xl md:text-4xl">
              {public_repos}
            </div>
          </div>
        </div>
        <RepoList repos={repos} />
      </div>
    </>
  );
};

export default User;
