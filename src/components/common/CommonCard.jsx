import styled from "styled-components";

const CommonCard = ({ title }) => {
  return <Card>{title}</Card>;
};

export default CommonCard;

const Card = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 10px;
`;
