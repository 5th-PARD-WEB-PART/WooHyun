import styled from "styled-components";

export default function Home() {
  return (
    <Div>
      <Title>자기소개</Title>
      <Info>
        <Name>이름: 권채채</Name>
        <Age>나이: 23</Age>
        <Mbti>MBTI: INFP</Mbti>
        <Major>전공: 컴퓨터공학</Major>
      </Info>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`

const Title = styled.h1`
  color: #4caf50;
  font-size: 48px;
  text-align: center;
  margin-bottom: 40px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  font-size: 20px;
`;

const Name = styled.p`
  color: #ff6347;  // Tomato
`;

const Age = styled.p`
  color: #4682b4;  // SteelBlue
`;

const Mbti = styled.p`
  color: #32cd32;  // LimeGreen
`;

const Major = styled.p`
  color: #8a2be2;  // BlueViolet
`;
