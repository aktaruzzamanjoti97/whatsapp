import { Avatar } from "@material-ui/core";
import React from "react";

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar src="https://avatars.dicebear.com/api/human/a23.svg" />
      <div className="sidebarChat_info">
        <h2>Room name</h2>
        <p>Last message</p>
      </div>
    </div>
  );
};

export default SidebarChat;
