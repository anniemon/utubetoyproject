import React from "react";
import ReactPlayer from "react-player/lazy";
import styled from "styled-components";
import Thumbnail from "../components/Thumbnail";
import { Link } from "react-router-dom";
import VideoInfo from "../components/VideoInfo";
import Comments from "../components/Comments";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
`;

const Container = styled.section`
  display: flex;
}
  `;

const PlayerWrapper = styled.div`
  flex: 0 1 auto;
  position: relative;
  height: 80vh;
  width: 75vw;
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
const StyledPlaylist = styled.div`
  flex: 0 1 500px;
  /* border-style: solid;
  border-width: 2px; */
  display: flex;
  flex-direction: column;
  .link {
    text-decoration: none;
    color: black;
  }
`;

export default function Main({ videoInfo, handleClick, imgs, subscription, pageRefresh, setSubscription }) {

  return (
    <>
      <Container>
        <div>
          <StyledMain>
            <PlayerWrapper>
              <ReactPlayer
                className="react-player"
                width="100%"
                height="100%"
                controls
                url={`http://localhost:4000/${videoInfo.video}`}
                playing={true}
              />
            </PlayerWrapper>
            <VideoInfo videoInfo={videoInfo} setSubscription={setSubscription} subscription={subscription} pageRefresh={pageRefresh} />
          </StyledMain>
          <Comments />
        </div>
        <StyledPlaylist>
          {imgs.map((thumbnail) => (
            <Link to="/main" key={thumbnail.id} className="link">
              <Thumbnail
                style={true}
                key={thumbnail.id}
                thumbnail={thumbnail}
                handleClick={handleClick}
              />
            </Link>
          ))}
        </StyledPlaylist>
      </Container>
    </>
  );
}
