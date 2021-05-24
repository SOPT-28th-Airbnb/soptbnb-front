import NearTitle from "../components/main/NearTitle";
import ResideTitle from "../components/main/ResideTitle";
import ExpTitle from "../components/main/ExpTitle";
import NearCard from "../components/main/NearCard";
import HostCard from "../components/main/HostCard";
import Footer from "../components/common/Footer";
import MainHeader from "../components/main/MainHeader";
import ImageSlider from "../components/main/ImageSlider/ImageSlider";
import { getNearCard, getResideCard, getExpCard } from "../lib/api";

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MainWrap = styled.div`
  width: 100%;

  .main {
    margin: 0 10rem;
    display: flex;
    flex-direction: column;
    width: 100rem;

    &__near {
      width: 100%;
      display: grid;
      flex-wrap: nowrap;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 1rem;
    }
  }
`;

function Main() {
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
        <div style={{ height: "4rem" }} />
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
        {reside.length !== 0 && <ImageSlider type="reside" list={reside} />}
        <div style={{ height: "4.5rem" }} />

        <HostCard />
        <div style={{ height: "3rem" }} />

        <ExpTitle />
        <div style={{ height: "1.3rem" }} />
        {exp.length !== 0 && <ImageSlider type="exp" list={exp} />}
      </div>
      <div style={{ height: "4.5rem" }} />

      <Footer />
    </MainWrap>
  );
}

export default Main;
