import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const DiaryItem = ({ id, emotion, content, date }) => {
  const navigate = useNavigate();
  const strDate = new Date(parseInt(date)).toLocaleDateString();

  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <Wrapper>
      <ImgWrapper emotion={emotion}>
        <img
          src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}
          alt="감정 이미지"
        />
      </ImgWrapper>
      <InfoWapper onClick={goDetail}>
        <DiaryDate>{strDate}</DiaryDate>
        <DiaryContentPrivew>{content.slice(0, 25)}</DiaryContentPrivew>
      </InfoWapper>
      <BtnWarpper>
        <MyButton text="수정하기" onClick={goEdit} />
      </BtnWarpper>
    </Wrapper>
  );
};

export default React.memo(DiaryItem);

const emotionsColor = {
  1: "#64c964",
  2: "#9dd772",
  3: "#fece17",
  4: "#fd8446",
  5: "#fd565f",
};

const Wrapper = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  justify-content: space-between;
`;
const ImgWrapper = styled.div`
  cursor: pointer;
  min-width: 120px;
  height: 80px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  background-color: ${({ emotion }) => emotionsColor[emotion]};

  & img {
    width: 50%;
  }
`;

const InfoWapper = styled.div`
  cursor: pointer;
  flex-grow: 1;
  margin-left: 20px;
`;

const DiaryDate = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 5px;
`;

const DiaryContentPrivew = styled.div`
  font-size: 18px;
`;

const BtnWarpper = styled.div`
  min-width: 70px;
`;
