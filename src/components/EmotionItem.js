import styled from "@emotion/styled";
import React from "react";

const EmotionItem = ({
  emotion_id,
  emotion_img,
  emotion_descript,
  onClick,
  isSelected,
}) => {
  return (
    <Wrapper
      onClick={() => {
        onClick(emotion_id);
      }}
      isSelected={isSelected}
      emotion_id={emotion_id}
    >
      <img src={emotion_img} alt="감정 이미지" />
      <span>{emotion_descript}</span>
    </Wrapper>
  );
};

export default React.memo(EmotionItem);

const emotionsColor = {
  1: "#64c964",
  2: "#9dd772",
  3: "#fece17",
  4: "#fd8446",
  5: "#fd565f",
};

const Wrapper = styled.div`
  cursor: pointer;
  border-radius: 5px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    width: 50%;
    margin-bottom: 10px;
  }

  & span {
    font-size: 18px;
  }

  background-color: ${({ isSelected, emotion_id }) =>
    isSelected ? emotionsColor[emotion_id] : "#ececec"};

  color: ${({ isSelected }) => (isSelected ? "white" : "null")};
`;
