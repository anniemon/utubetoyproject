import React, { useState } from "react";
import styled from "styled-components";
import { dummyData } from "../assets/state";


const StyledBody = styled.div`
  margin: 20px 50px 10px 10px;
  padding-bottom: auto;

  label {
    margin: 30px 0px 10px 5px;
    display: block;
    font-size: 20px;
  }
  textarea {
    font-size: 20px; 
    width: 500px;
    height: 60px;
  }
`;

const Commentlist = styled.div`
  border-top: 1px solid;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 100px 0 50px;
 
`;

export default function Comments() {
  const [comment, setComment] = useState()
  const dummyCommit = dummyData.comment;
  console.log(dummyCommit);

  const inputComment = (e) => {
    // console.log(e.target.value)
    setComment(e.target.value);
  };

  return (<>{/* todo에서 입력, 삭제 icon 가져오기 */}


    < StyledBody >
      <label>댓글</label>
      <textarea className="react-player" value={comment} type="text" placeholder="설명을 입력하세요" onChange={inputComment}></textarea>
    </StyledBody >
    <Commentlist>
      {/* {dummyCommit.map((el) => <h2>{el.comment}</h2>)} */}
    </Commentlist>
  </>)
}
