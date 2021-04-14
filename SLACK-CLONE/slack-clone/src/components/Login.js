import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
function Login(props) {
  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const newuser = {
          name: result.user.displayName,
          photo: result.user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(newuser));
        props.setUsers(newuser);
        console.log(newuser.name);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <Container>
      <Content>
        <SlackImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F48487%2Fscreenshots%2F1400899%2Fattachments%2F203337%2FSlack-flat.png&f=1&nofb=1" />
        <h1>Sign In Slack</h1>
        <SigninButton onClick={() => signin()}>Signin with google</SigninButton>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjooinn.com%2Fimages%2Fbackground-27.png&f=1&nofb=1");
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  background-color: white;
  padding: 100px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
`;
const SlackImg = styled.img`
  height: 100px;
`;
const SigninButton = styled.button`
  margin-top: 50px;
  background-color: #0a8d48;
  color: white;
  border: none;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
`;
