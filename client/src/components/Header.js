import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeadBox = styled.header`
  height: 50px;
  /* border-style: solid;
	border-width: 2px; */
  margin: 0 10px 0 10px;
  border-bottom: 1px solid;
  display: flex;
  align-items: center;
  .left {
    flex: 0.5 0 0;
  }
  .link {
    text-decoration: none;
    color: black;
    padding: 30px;
  }
  .mid {
    flex: 8 0 0;
  }
  .right {
    flex: 0.5 0 0;
  }
`;

const Img = styled.img`
  height: ${(props) => props.height || "30px"};
  width: ${(props) => props.width || "100px"};
`;

export default function Header({ pageRefresh }) {

  return (
    <HeadBox>
      <Link to="/" className="head left" onClick={pageRefresh}>
        <Img src="youtube.png" alt="Logo" />
      </Link>
      {/* <Link to="/subscription" className="head left link">
        Subscription
      </Link> */}
      <Link to="/subscriptions" className="head left link">
        Subscription
      </Link>
      <div className="mid"></div>
      <Link to="/upload">
        <Img
          width="50px"
          height="40px"
          className="upload right"
          src="upload.png"
          alt="Upload"
        />
      </Link>
      <div className="right">Logout</div>
    </HeadBox>
  );
}
