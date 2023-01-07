import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import { useDiaryState } from "../context/DiaryContext";
import { getStringDate } from "../utils/date";
import { emotionList } from "../utils/emotion";

const Diary = () => {
  const { id } = useParams();
  const diaryList = useDiaryState();
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - ${id}번 일기`;
  });

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      if (targetDiary) {
        setData(targetDiary);
      } else {
        alert("없는 일기입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div>로딩중입니다...</div>;
  } else {
    const currentEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );

    return (
      <Wrapper>
        <MyHeader
          headText={`${getStringDate(new Date(data.date))} 기록`}
          leftChild={
            <MyButton text="< 뒤로가기" onClick={() => navigate(-1)} />
          }
          rightChild={
            <MyButton
              text="수정하기"
              onClick={() => navigate(`/edit/${data.id}`)}
            />
          }
        />
        <article>
          <section>
            <h4>오늘의 감정</h4>
            <DiaryImgWrapper emotion_id={currentEmotionData.emotion_id}>
              <img
                src={currentEmotionData.emotion_img}
                alt="오늘의 감정 이미지"
              />
              <EmotionDescript>
                {currentEmotionData.emotion_descript}
              </EmotionDescript>
            </DiaryImgWrapper>
          </section>
          <section>
            <h4>오늘의 일기</h4>
            <DiaryContentWrapper>
              <p>{data.content}</p>
            </DiaryContentWrapper>
          </section>
        </article>
      </Wrapper>
    );
  }
};

export default Diary;

const emotionsColor = {
  1: "#64c964",
  2: "#9dd772",
  3: "#fece17",
  4: "#fd8446",
  5: "#fd565f",
};

const Wrapper = styled.div`
  & section {
    width: 100%;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & h4 {
    font-size: 22px;
    font-weight: bold;
  }
`;

const DiaryImgWrapper = styled.div`
  background-color: #ececec;
  width: 250px;
  height: 250px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ emotion_id }) => emotionsColor[emotion_id]};
`;

const EmotionDescript = styled.div`
  font-size: 25px;
  color: white;
`;

const DiaryContentWrapper = styled.div`
  width: 100%;
  background-color: #ececec;
  border-radius: 5px;
  word-break: keep-all;
  overflow-wrap: break-word;

  & p {
    padding: 20px;
    text-align: left;
    font-size: 20px;
    font-family: "Noto Serif KR", serif;
    font-weight: 400;
    line-height: 2.5;
  }
`;
