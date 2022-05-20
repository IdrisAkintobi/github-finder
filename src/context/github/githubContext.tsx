import React, { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

type Props = {
  children?: React.ReactNode;
};

type ContextProp = {
  users: any;
  user: any;
  repos: any;
  loading?: boolean;
  searchUser?: (text: string) => Promise<void>;
  getUser?: (text: string) => Promise<void>;
  clearUser?: () => void;
};

const GithubContext = createContext<ContextProp>({
  users: [],
  user: {},
  repos: {},
  loading: false,
});

const githubUrl = process.env.REACT_APP_GH_API;
const githubToken = process.env.REACT_APP_TOKEN;

export const GithubProvider: React.FC<Props> = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUser = async (text: string) => {
    setLoading();
    // const params = new URLSearchParams({ q: text });
    const searchResult = await fetch(`${githubUrl}/search/users?q=${text}`, {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    });
    const { items } = await searchResult.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  const getUser = async (text: string) => {
    setLoading();
    // const params = new URLSearchParams({ q: text });
    const searchResult = await fetch(`${githubUrl}/users/${text}`, {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    });

    if (searchResult.status === 404) {
      window.location.href = "/notfound";
    } else {
      const item = await searchResult.json();
      dispatch({
        type: "GET_USER",
        payload: item,
      });
      const repoResult = await fetch(`${item.repos_url}`, {
        headers: {
          Authorization: `token ${githubToken}`,
        },
      });
      const repoData = await repoResult.json();
      dispatch({
        type: "GET_REPO",
        payload: repoData,
      });
    }
  };

  //Set loading...
  const setLoading = () => dispatch({ type: "SET_LOADING" });
  const clearUser = () => dispatch({ type: "CLEAR_USER" });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        searchUser,
        getUser,
        clearUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
