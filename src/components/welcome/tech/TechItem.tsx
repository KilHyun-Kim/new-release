import React from "react";
import styled, { keyframes } from "styled-components";
import { SiTypescript } from "react-icons/si";

type DataProps = {
  data: {
    tech: string;
    index: number;
  };
};

const rotate = keyframes`
    0%{
            transform: rotate(0deg)
        }
        100%{
            transform: rotate(360deg)
        }
    
`;

const TechItemWrap = styled.div`
  position: relative;
  display: flex;
  span {
    position: relative;
    width: 100px;
    height: 100px;
    background: #eaeef0;
    border: 6px solid #eaeef0;
    border-radius: 50%;
    box-shadow: -8px -8px 15px rgba(255, 255, 255, 1),
      8px 8px 25px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    ::before {
      content: "";
      position: absolute;
      border-radius: 50%;
      inset: 0;
      box-shadow: inset 10px 10px 20px rgba(0, 0, 0, 0.5),
        inset -5px -5px 15px rgba(255, 255, 255, 1);
    }
    ::after {
      content: "";
      position: absolute;
      inset: 5px;
      background: #eaeef0;
      border: 3px solid #eaeef0;
      border-radius: 50%;
      box-shadow: -8px -8px 25px rgba(255, 255, 255, 1),
        8px 8px 25px rgba(0, 0, 0, 0.25), inset 3px 3px 10px rgba(0, 0, 0, 0.15),
        inset -1px -1px 15px rgba(255, 255, 255, 1);
    }
  }
  span i {
    position: absolute;
    inset: 0;
    background: linear-gradient(#42abff, #ff4f8b, #ffeb3b);
    border-radius: 50%;
    animation: ${rotate} 1s linear infinite;
  }
  div {
    position: absolute;
    left: 11px;
    top: 11px;
    z-index: 500;
    width: 78px;
    height: 78px;
    border-radius: 50%;
  }
  /* :nth-child(3n - 1) {
    margin: 0 2vw;
  } */
`;

const TechItem = () => {
  return (
    <TechItemWrap>
      <div>
        <SiTypescript
          size={78}
          style={{ borderRadius: "50%", color: "#235a97" }}
        />
      </div>
      <span>
        <i></i>
      </span>
    </TechItemWrap>
  );
};

export default TechItem;
