import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DiaryEditor from "../components/DiaryEditor";
import { useDiaryState } from "../context/DiaryContext";

const Edit = () => {
  const [originData, setOriginData] = useState();
  const navigate = useNavigate();
  const diaryList = useDiaryState();
  const { id } = useParams();

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - ${id}번 일기 수정`;
  });

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        alert("없는 일기입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);
  return (
    <>{originData && <DiaryEditor isEdit={true} originData={originData} />}</>
  );
};

export default Edit;
