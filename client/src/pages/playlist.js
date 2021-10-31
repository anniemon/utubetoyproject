import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Thumbnail from "../components/Thumbnail";


const Body = styled.div`
  padding-bottom: 100px;
  h1 {
    margin: 10px 50px 0 50px;
  }
`;

const Playlist = styled.div`
  border-top: 1px solid;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 50px 0 50px;
  .link {
    text-decoration: none;
    color: black;
  }
`;

export default function PlayList({ handleClick, videoInfo, imgs }) {

  return (
    <Body>
      <br />
      <h1>Recommended</h1>
      <Playlist>
        {imgs.map((thumbnail) => (
          <Link to="/main" className="link">
            <Thumbnail
              style={false}
              key={thumbnail.id}
              thumbnail={thumbnail}
              handleClick={handleClick}
            />
          </Link>
        ))}
      </Playlist>
    </Body>
  );
}
