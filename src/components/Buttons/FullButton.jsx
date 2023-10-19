import React from "react";
import styled from "styled-components";

export default function FullButton({ title,  border, link }) {

  const handleOnclick = () => {
    window.location.href = link;
  }
  return (
    <Wrapper
      className="animate pointer radius8 font15"
      onClick={handleOnclick}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#7620ff")};
  background-color: ${(props) => (props.border ? "transparent" : "#7620ff")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  fontn-size: 60px;
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#580cd2")};
    border: 1px solid #7620ff;
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
  }
`;

