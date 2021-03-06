import { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/AlertContext";

const UserSearch = () => {
  const { users, searchUser, clearUser } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (text.trim() === "") {
      setAlert("Please enter a word", "alert");
      setText("");
    } else {
      searchUser!(text);
      setText("");
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-8">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={text}
                  onChange={handleChange}
                  className="w-full pr-40 bg-gray-200 input input-lg text-black"
                />
                <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>
        {users.length > 0 && (
          <button onClick={clearUser} className="btn btn-ghost btn-lg w-24">
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
