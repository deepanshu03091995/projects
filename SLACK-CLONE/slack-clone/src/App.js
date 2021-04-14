import React, { useEffect, useState } from "react";
import Chat from "./components/Chat";
import Login from "./components/Login";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import db, { auth } from "./firebase";

function App() {
  const [rooms, setRooms] = useState([]);
  const [user, setUsers] = useState(JSON.parse(localStorage.getItem("user")));
  const getChannels = () => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  };
  useEffect(() => {
    getChannels();
  }, []);

  const signout = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");

      setUsers(null);
    });
  };

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login setUsers={setUsers} />
        ) : (
          <Container>
            <Header signOut={signout} user={user} />
            <Main>
              <Sidebar rooms={rooms} />
              <Switch>
                <Route path="/room/:channelId">
                  <Chat user={user} />
                </Route>
                <Route path="/">select or create channel</Route>
              </Switch>
            </Main>
          </Container>
        )}
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
`;
const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;
