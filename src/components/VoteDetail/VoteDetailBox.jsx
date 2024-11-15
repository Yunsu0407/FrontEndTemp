import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export const VoteDetailContainer = styled.div`
  display: flex;
  padding: 0 0 2em 0;
  flex-direction: column;
  align-items: center;
`

export const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 0.2em solid gray;
  width: 70%;
  margin: 0 0 1em 0;
  height: 100%;
  `

export const Title = styled.h1`
  text-align: center;
  padding: 0.5em 0;
  font-size: 1.5em;
  background-color: gray;
  width: 100%;
`

export const Content = styled.div`
  white-space: pre-line;
  width: 90%;
  text-align: left;
  padding-bottom: 2em;
`

export const GoList = styled.button`
  width: 7vw;
  height: 4vh;
  border-radius: 5%;
  font-size: 1em;
  background-color: #6A8EF3;
`

const VoteDetailBox = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {title, content} = location.state || {};

  const handleGoList = () => {
    navigate("/voteinfo"); // /voteinfo로 이동
  };
  
  return (
    <VoteDetailContainer>
      <h1>공직선거제도</h1>
      <DetailBox>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </DetailBox>
      <GoList onClick={handleGoList}>목록</GoList>
    </VoteDetailContainer>
  );
}

/*VoteDetailBox.defaultProps ={
  title: "선거권",
  content: `선거권

선거에 참여하여 투표할 수 있는 권리

- 대통령 및 국회의원선거

선거일 현재 18세 이상의 국민

단 지역구국회의원 선거권은 선거인명부작성기준일 현재로 다음의 자에 한해서만 인정됩니다.

① 「주민등록법」 제6조제1항제1호(거주자) 또는 제2호(거주불명자)에 해당하는 사람으로서 해당 국회의원지역선거구 안에 주민등록이 되어 있는 사람
② 「주민등록법」 제6조제1항제3호(재외국민)에 해당하는 사람으로서 주민등록표에 3개월 이상 계속하여 올라 있고 해당 국회의원지역선거구 안에 주민등록이 되어 있는 사람

- 지방자치단체의 장 및 의회의원선거

선거일 현재 18세 이상인 자로 선거인명부작성기준일 현재로 다음의 자에 한해서 인정됩니다.

① 「주민등록법」 제6조제1항제1호(거주자) 또는 제2호(거주불명자)에 해당하는 사람으로서 해당 국회의원지역선거구 안에 주민등록이 되어 있는 사람
② 「주민등록법」 제6조제1항제3호(재외국민)에 해당하는 사람으로서 주민등록표에 3개월 이상 계속하여 올라있고 해당 국회의원지역선거구 안에 주민등록이 되어 있는 사람
③ 「출입국관리법」제10조에 따른 영주의 체류자격 취득일 후 3년이 경과한 외국인으로 같은 법 제34조에 따라 해당 지방자치단체의 외국인등록대장에 올라 있는 사람

선거권이 없는 자

- 1년 이상의 징역 또는 금고의 형을 선고를 받고, 그 집행이 종료되지 않았거나, 그 집행을 받지 않기로 확정되지 않은 사람
(다만 그 형의 집행유예를 선고받고 유예기간 중에 있는 사람은 선거권 있음)

- 선거범, 「정치자금법」 제45조(정치자금부정수수죄) 및 제49조(선거비용관련 위반행위에 관한 벌칙)에 규정된 죄를 범한 자, 대통령·국회의원·방의회의원·지방자치단체의 장으로서 그 재임 중의 직무와 관련하여 「형법」(「특정범죄가중처벌 등에 관한 법률」 제2조에 의하여 가중처벌되는 경우 포함)제129조(수뢰, 사전수뢰) 내지 제132조(알선수뢰)·「특정범죄가중처벌 등에 관한 법률」제3조(알선수재)에 규정된 죄를 범한 자로서아래에 해당하는 사람
  - 100만원 이상의 벌금형이 확정된 후 5년을 경과하지 않은 경우
  -  형의 집행유예 선고를 받고 그 형이 확정된 후 10년을 경과하지 않은 경우
  -  징역형의 선고를 받고 그 집행을 받지 아니하기로 확정된 후 또는 그 형의 집행이 종료되거나 면제된 후 10년을 경과하지 않은 경우

-  법원의 판결 또는 다른 법률에 의하여 선거권이 정지 또는 상실된 사람`,
};*/

export default VoteDetailBox;