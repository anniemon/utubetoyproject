import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Description = styled.div`
  width: 70vw;
  margin: 20px;
`;

const Like = styled.button`
  width: max-content;
  cursor: pointer;
  height: 50px;
  margin: 10px;
  font-size: 1rem;
  color: black;
  border: none;
  border-radius: 3px;
  flex: 1 0 0;
  .fas::before {
    margin: 0.4rem;
  }
`;

const DisLike = styled(Like)`
  color: black;
  flex: 1 0 0;
`;

const ContentInfo = styled.div`
  margin: 10px 0 0 10px;
  display: flex;
  align-items: center;
  img {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
  .info {
    margin-left: 10px;
    font-size: 13px;
    flex: 8 0 0;
    .info_name {
      font-size: 15px;
      font-weight: bold;
      padding-bottom: 5px;
    }
  }
`;

const Subscribe = styled(Like)`
  background: red;
  color: white;
`;

const unSubscribe = styled(Like)`
  background: gray;
  color: white;
`;

function VideoInfo({ videoInfo, subscription, pageRefresh, setSubscription }) {
  const [subscriptionIds, setSubscriptionIds] = useState(subscription.map(x => x.subscriberId));

  const handleSubscription = () => {
    if (subscriptionIds.includes(videoInfo.userId)) {
      //구독 취소

      axios
        .post(
          "http://localhost:4000/subscriptions/delete",
          { username: 1, subscribername: videoInfo.userId },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then((res) => {
          alert(res.data.message);
          console.log(res.data);
          const rest = subscriptionIds.filter(id => id !== res.data.data);
          setSubscriptionIds(rest)
        })
        .catch((err) => alert(err));
    } else {
      //구독
      axios
        .post(
          "http://localhost:4000/subscriptions/add",
          { username: 1, subscribername: videoInfo.userId },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then((res) => {
          // console.log("-----", res.data);
          alert(res.data.message);
          console.log(res.data);
          setSubscriptionIds([...subscriptionIds, res.data.data]);
        })
        .catch((err) => alert(err));
    }
    pageRefresh();
  };

  return (
    <div>
      <ContentInfo>
        <img src={videoInfo.user.picture} alt="프로필 마크"></img>
        <div className="info">
          <div className="info_name">{videoInfo.title}</div>
          <div>{videoInfo.user.username}</div>
          <div>
            {videoInfo.views} views - {videoInfo.createdAt.slice(0, 10)}
          </div>
        </div>
        <Like>
          <i className="fas fa-thumbs-up">{videoInfo.total_likes}</i>
        </Like>
        <DisLike>
          <i className="fas fa-thumbs-down">1,00</i>
        </DisLike>

        {/* 실험용 버튼 */}
        <button
          onClick={handleSubscription}
          style={{ backgroundColor: `${subscriptionIds.includes(videoInfo.userId) ? "#808080" : "#ff0000"}` }}
        >
          {subscriptionIds.includes(videoInfo.userId) ? "구독중" : "구독"}
        </button>
        {/* 나중에 주석풀기 */}
        {/* <Subscribe subscribe onClick={handleSubscription}>
          {subscribed ? "구독중" : "구독"}
        </Subscribe> */}
        {/* 나중에 주석풀기 */}
      </ContentInfo>
      <Description>{videoInfo.description}</Description>
    </div>
  );
}

export default VideoInfo;
