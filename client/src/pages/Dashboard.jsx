import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext";


export default function Dashboard() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const username = userInfo?.username;

  const logout = () => {
    // Implement logout functionality here
  };

  return (
    <header>
      <Link to="/" className="logo">Code Chronicles</Link>
      <nav>
          <>
            <Link to="/create-post">Create new post</Link>
            <Link to="/delete-post">Delete post</Link>
            <Link to="/edit-post">Edit Post</Link>
            <button onClick={logout}>Logout ({username})</button>
          </>
      </nav>
    </header>
  );
}