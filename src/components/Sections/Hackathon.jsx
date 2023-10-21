import React from "react";
import styled from "styled-components";

import FullButton from "../Buttons/FullButton";
import Video from "../../assets/videos/vid1.mp4";

export function Hackathon() {
  return (
    <Wrapper id="projects">
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <Vid autoPlay muted loop controls={false}>
                    <source src= {Video} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </Vid>
                  
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h2 className="font40 extraBold">
                Spaex en Hackathon Nicaragua 2023
              </h2>
              <p className="font15">
                Inteligencia artificial para la educación y el desarrollo humano
              </p>
              <ButtonsRow
                className="flexNullCenter"
                style={{ margin: "30px 0" }}
              >
                <div style={{ width: "190px" }}>
                  <FullButton
                    title="Ir al metaverso"
                    link="https://www.spatial.io/s/Spaex-Experiencia-Hackathon-2023-6531a40fff30bf4a634d9020?share=2833792525082758212"
                  />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 10%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;

const Vid = styled.video`
width: 100%;
border-radius:20px;
`;
