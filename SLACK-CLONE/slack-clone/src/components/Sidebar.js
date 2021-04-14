import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { sidebarItemsData } from "../data/SidebarData";

import AddIcon from "@material-ui/icons/Add";
import db from "../firebase";
import { useHistory } from "react-router-dom";
function Sidebar(props) {
  const history = useHistory();
  const gotochannel = (id) => {
    if (id) {
      history.push(`/room/${id}`);
    }
  };

  const addchannel = () => {
    const promptname = prompt("Enter channel name");
    if (promptname) {
      db.collection("rooms").add({
        name: promptname,
      });
    }
  };

  return (
    <Container>
      <WorkSpaceContainer>
        <Name>Clever Programmer</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkSpaceContainer>
      <MainChannels>
        {sidebarItemsData.map((item) => (
          <MainChannelItems>
            {item.icon}
            {item.text}
          </MainChannelItems>
        ))}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>channel</div>
          <AddIcon onClick={addchannel} />
        </NewChannelContainer>
        <ChannelLists>
          {props.rooms.map((item) => (
            <Channel onClick={() => gotochannel(item.id)}>{item.name}</Channel>
          ))}
        </ChannelLists>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background: #3f0e40;
`;

const WorkSpaceContainer = styled.div`
  color: white;
  heightL64px;
  display:flex;
  align-items:center;
  padding-left:19px;
  justify-content:space-between;
  border-bottom:1px solid #532753;
`;
const Name = styled.div``;
const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;
const MainChannels = styled.div`
  padding-top: 20px;
`;

const MainChannelItems = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #350d36;
  }
`;

const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 10px;
`;
const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  padding-right: 12px;
`;

const ChannelLists = styled.div``;

const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;

  :hover {
    background: #350d36;
  }
`;
