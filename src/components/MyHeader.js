import styled from "@emotion/styled";

const MyHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <Header>
      <HeadBtnLeft>{leftChild}</HeadBtnLeft>
      <HeadText>{headText}</HeadText>
      <HeadBtnRight>{rightChild}</HeadBtnRight>
    </Header>
  );
};

export default MyHeader;

const Header = styled.header`
padding: 20px 0;
display: flex;
align-items: center;
border-bottom: 1px solid #e2e2e2;

& div {
  display: flex;
}
`

const HeadText = styled.div`
width: 50%;
font-size: 25px;
justify-content: center;
`

const HeadBtnLeft = styled.div`
width: 25%;
justify-content: start;
`

const HeadBtnRight = styled.div`
width: 25%;
justify-content: end;
`
