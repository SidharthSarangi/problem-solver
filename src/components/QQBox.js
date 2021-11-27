import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./QBox.css";

export default function QQBox() {
  const user = useSelector(selectUser);

  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar
          src={
            user.photo
              ? user.photo
              : "https://png.pngtree.com/png-clipart/20200701/original/pngtree-man-with-computer-sitting-on-chair-work-from-home-concept-png-image_5356036.jpg"
          }
          className="quoraBox__infoAvatar"
        />
        <h5>{user.displayName ? user.displayName : user.email}</h5>
      </div>
      <div className="quoraBox__quora">
        <p>What is your question or link?</p>
      </div>
    </div>
  );
}
