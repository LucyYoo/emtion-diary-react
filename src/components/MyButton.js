import styled from "@emotion/styled";

const MyButton = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <Button
      type={type}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

MyButton.defaultProps = {
  type: "default",
};
export default MyButton;

const buttonType ={
  default: '#ececec',
  positive: '#64c964',
  negative: '#fd565f'
}

const Button = styled.button`
cursor: pointer;
border: none;
border-radius: 5px;
padding: 10px 20px;
font-size: 18px;
white-space: nowrap;
font-family: "Nanum Pen Script";
background-color: ${({type}) => buttonType[type]}
`