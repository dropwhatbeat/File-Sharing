import React from "react";
import { useLocation, Route, Switch } from "react-router-dom";
import LoginPage from "views/LoginPage"

function Guest(props) {
  return (
    <>
      <div className="wrapper">
            <div className="content">
                <LoginPage />
            </div>
      </div>
    </>
  );
}

export default Guest;