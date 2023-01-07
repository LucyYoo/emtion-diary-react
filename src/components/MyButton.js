import styled from "@emotion/styled";

const MyButton = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <Button type={btnType} onClick={onClick}>
      {text}
    </Button>
  );
};

MyButton.defaultProps = {
  type: "default",
};
export default MyButton;

const buttonType = {
  default: "#ececec",
  positive: "#64c964",
  negative: "#fd565f",
};

const buttonhoverType = {
  default: "#e2e2e2",
  positive: "#5bba5b",
  negative: "#e84f57",
};

const Button = styled.button`
  cursor: pointer;
  height: 41px;
  border: none;
  border-radius: 5px;
  padding: 8px 20px;
  font-size: 18px;
  white-space: nowrap;
  font-family: "Gowun Dodum", sans-serif;
  background-color: ${({ type }) => buttonType[type]};

  &:hover {
    background-color: ${({ type }) => buttonhoverType[type]};
  }
`;
