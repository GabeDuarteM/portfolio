import React from "react"
import userAvatar from "../../static/img/windows/user-avatar.png"

const Menu = ({ open }) => (
  <div className="menu-root">
    <div className="header">
      <img className="user-avatar" src={userAvatar} alt="User avatar" />
      <span className="user-name">Visitor</span>
    </div>
    <div className="content">
      <div className="column one" />
      <div className="column two" />
    </div>
    <div className="footer" />
    <style jsx>{`
      .menu-root {
        display: ${open ? "flex" : "none"};
        position: absolute;
        background: white;
        height: 520px;
        width: 370px;
        bottom: 30px;
        flex-direction: column;
        box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.7);
        border-radius: 10px 10px 0 0;
      }
      .header {
        height: 70px;
        border-radius: 9px 9px 0 0;
        background: rgb(0, 105, 213);
        background: linear-gradient(
          to bottom,
          rgba(0, 105, 213, 1) 0%,
          rgba(59, 146, 239, 1) 97%
        );
        border-bottom: solid 1px #006bd4;
        align-items: center;
        display: flex;
      }
      .user-avatar {
        margin: 0 8px;
        border: solid 2px white;
        border-radius: 4px;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.7);
      }
      .user-name {
        color: white;
        font-weight: 700;
      }
      .content {
        flex: auto;
        display: flex;
      }
      .column {
        flex: auto;
      }
      .column.two {
        background-color: #d2e5fb;
        border-left: solid 1px #92bdf0;
      }
      .footer {
        height: 50px;
        background: rgb(22, 84, 191);
        background: linear-gradient(
          to right,
          rgba(22, 84, 191, 1) 0%,
          rgba(4, 107, 224, 1) 10%,
          rgba(27, 117, 226, 1) 20%,
          rgba(27, 117, 226, 1) 90%,
          rgba(4, 107, 224, 1) 95%,
          rgba(23, 87, 198, 1) 100%
        );
      }
    `}</style>
  </div>
)

export default Menu
