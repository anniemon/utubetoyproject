import React from "react";
import styled from "styled-components";

const ThumbnailBox = styled.div`
  /* border-style: solid;
	border-width: 1px; */
  display: ${(props) => (props.className === "main" ? "flex" : null)};
  padding: ${(props) => (props.className === "main" ? "10px" : null)};
  /* border: ${(props) =>
    props.className === "main" ? "1px solid gray" : null}; */

  img {
    margin: 10px 10px 0 10px;
    position: relative;
    cursor: pointer;
    width: ${(props) => (props.className === "main" ? "80px" : "320px")};
    height: ${(props) => (props.className === "main" ? "140px" : "220px")};
  }
`;

const ContentInfo = styled.div`
  /* border-style: solid;
	border-width: 1px; */
  margin: 10px 0 0 10px;
  display: flex;
  img {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
  .info {
    margin-left: 10px;
    font-size: 13px;
    .info_name {
      font-size: 15px;
      font-weight: bold;
      padding-bottom: 5px;
    }
  }
`;

export default function Thumbnail({ thumbnail, handleClick, style }) {
  return (
    <ThumbnailBox
      className={style ? "main" : null}
      onClick={() => {
        handleClick(thumbnail);
      }}
    >
      <img
        src={`http://localhost:4000/${thumbnail.image}`}
        alt={thumbnail.title}
        className={style ? "main" : null}
      />
      <ContentInfo>
        <img src={thumbnail.user.picture} alt="프로필 마크"></img>
        <div className="info">
          <div className="info_name">{thumbnail.title}</div>
          <div>{thumbnail.user.username}</div>
          <div>
            {thumbnail.views} views - {thumbnail.createdAt.slice(0, 10)}
          </div>
        </div>
      </ContentInfo>
    </ThumbnailBox>
  );
}
