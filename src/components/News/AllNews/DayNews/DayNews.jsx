import { useState, useEffect } from "react";
import NewsFactor from "../../NewsFactor/NewsFactor";
import Calender from "./Calender/Calender";
import {
  NewsContainer,
  NewsCategory,
  NewsLink
} from "../AllNewsStyle";

const DayNews = () => {
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date()); // 날짜 상태 추가

  const fetchStaticData = async (date) => {
    try {
      const formattedDate = date.toISOString().split("T")[0]; // YYYY-MM-DD 형식으로 변환
      const response = await fetch(`서버 URL?date=${formattedDate}`);
      const staticData = await response.json();
      setData(staticData);
    } catch (error) {
      const localResponse = await fetch("/DummyData/News/Day.json");
      const localStaticData = await localResponse.json();
      setData(localStaticData);
    }
  };

  useEffect(() => { // 날짜가 변경될 때마다 데이터 가져오기
    fetchStaticData(selectedDate);
  }, [selectedDate]);

  const handleDateChange = (date) => { // 날짜 변경 핸들러
    setSelectedDate(date);
    alert("날짜를 변경하였습니다. 데이터를 다시 가져옵니다.")
  };

  return (
    <NewsContainer>
      <NewsCategory>
        날짜별 뉴스
      </NewsCategory>
      <Calender selectedDate={selectedDate} onDateChange={handleDateChange} />
      <NewsLink>
        {data.map((item, index) => (
          <NewsFactor key={index} item={item} />
        ))}
      </NewsLink>
    </NewsContainer>
  );
}

export default DayNews;