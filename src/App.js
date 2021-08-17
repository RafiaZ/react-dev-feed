import React, { Fragment, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NewsFeed from "./Pages/NewsFeed/NewsFeed";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import { useSelector } from "react-redux";
import Homepage from "./Pages/Homepage/Homepage";
import MainNav from "./Components/MainNav/MainNav";
import BottomChatBar from "./Components/BottomChatBar/BottomChatBar";
import SettingsModal from "./Components/SettingsModal/SettingsModal";
import UserAccountPage from "./Pages/UserAccountPage/UserAccountPage";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  /*
  
  Functionality for the settings modal, At somepoint move this to it's own state slice.
  
  */
  const [settings, setSettings] = useState(false);
  const [hidingPosts, setHidingPosts] = useState(false);
  const [hidingComments, setHidingComments] = useState(false);
  const changeHidingPostsHandler = () => {
    setHidingPosts((prevState) => !prevState);
  };
  const changeHidingCommentsHandler = () => {
    setHidingComments((prevState) => !prevState);
  };
  const toggleSettings = () => {
    setSettings((prevState) => !prevState);
  };

  return (
    <Fragment>
      {isLoggedIn && <Redirect to="/news-feed" />}
      {isLoggedIn && <MainNav toggleSettings={toggleSettings} />}

      <SettingsModal
        changeHidingPostsHandler={changeHidingPostsHandler}
        changeHidingCommentsHandler={changeHidingCommentsHandler}
        hidingPosts={hidingPosts}
        hidingComments={hidingComments}
        show={settings}
        onClick={toggleSettings}
        settings={settings}
      />
      {isLoggedIn && <BottomChatBar />}

      <Switch>
        <Route exact path="/" component={Homepage} />
        <ProtectedRoute
          hidingComments={hidingComments}
          exact
          path="/news-feed"
          component={NewsFeed}
        />
        <ProtectedRoute exact path="/profile" component={ProfilePage} />
        <ProtectedRoute
          exact
          path="/users/account/:userID"
          component={UserAccountPage}
        />
      </Switch>
    </Fragment>
  );
}

export default App;
