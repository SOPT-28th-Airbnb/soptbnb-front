import NearTitle from "../components/main/NearTitle";
import ResideTitle from "../components/main/ResideTitle";
import ExpTitle from "../components/main/ExpTitle";
import NearCard from "../components/main/NearCard";
import HostCard from "../components/main/HostCard";
import Footer from "../components/common/Footer";
import MainHeader from "../components/main/MainHeader";
import MobileSlider from "../components/main/ImageSlider/MobileSlider";
import ImageSlider from "../components/main/ImageSlider/ImageSlider";
import { getNearCard, getResideCard, getExpCard } from "../lib/api";
import { useMediaQuery } from "react-responsive";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
const MainWrap = styled.div`
  @media screen and (max-width: 500px) {
    width: 100vw;

    .main {
      margin: 1rem 2.3rem 0 2.3rem;
      display: flex;
      flex-direction: column;
      width: 100vw-2.3rem;

      &__near {
        width: 100vw;
        display: grid;
        flex-wrap: nowrap;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
      }
    }
  }

  @media screen and (min-width: 501px) {
    width: 120rem;
    .main {
      margin: 4rem 10rem;
      width: 100%-10rem;
      &__near {
        width: 100%;
        display: grid;
        flex-wrap: nowrap;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1rem;
      }
    }
  }
`;

function Main() {
  const isMobile = useMediaQuery({ maxWidth: 500 });

  const [near, setNear] = useState([]);
  const [reside, setReside] = useState([]);
  const [exp, setExp] = useState([]);

  useEffect(() => {
    (async () => {
      const near = await getNearCard();
      setNear(near);
      const reside = await getResideCard();
      setReside(reside);
      const exp = await getExpCard();
      setExp(exp);
    })();
  }, []);

  return (
    <MainWrap>
      <MainHeader />
      <div className="main">
        <NearTitle />
        <div style={{ height: "2rem" }} />
        <div className="main__near">
          {near &&
            near.map((place) => {
              return (
                <NearCard
                  key={place._id}
                  name={place.name}
                  dist={place.time}
                  img={place.img}
                />
              );
            })}
        </div>
        <div style={{ height: "4rem" }} />

        <ResideTitle />
        <div style={{ height: "1rem" }} />
        {isMobile
          ? reside.length !== 0 && <MobileSlider type="reside" list={reside} />
          : reside.length !== 0 && <ImageSlider type="reside" list={reside} />}
        {!isMobile && <div style={{ height: "4.5rem" }} />}

        <HostCard />
        <div style={{ height: "3rem" }} />

        <ExpTitle />
        {!isMobile && <div style={{ height: "1.3rem" }} />}
        {isMobile
          ? exp.length !== 0 && <MobileSlider type="exp" list={exp} />
          : exp.length !== 0 && <ImageSlider type="exp" list={exp} />}
      </div>
      <Footer />
    </MainWrap>
  );
}

export default Main;
