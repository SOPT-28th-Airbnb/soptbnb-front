import NearTitle from "../components/main/NearTitle";
import TypeTitle from "../components/main/TypeTitle";
import WanderTitle from "../components/main/WanderTitle";
import NearCard from "../components/main/NearCard";
import TypeCard from "../components/main/TypeCard";
import HostCard from "../components/main/HostCard";
import WanderCard from "../components/main/WanderCard";
import Footer from "../components/common/Footer";
import MainHeader from "../components/main/MainHeader";
import { getNearCard, getResidCard, getExpCard } from "../lib/api";

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

    &__type {
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
    }

    &__wander {
      margin-top: 1rem;
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
    }
  }
`;

function Main() {
  const [near, setNear] = useState([]);

  const [type, setType] = useState([]);

  const [exp, setExp] = useState([]);

  useEffect(() => {
    (async () => {
      const near = await getNearCard();
      console.log(near);
      setNear(near);

      const resid = await getResidCard();
      setType(resid);

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
                  key={place.id}
                  name={place.name}
                  dist={place.time}
                  img={place.img}
                />
              );
            })}
        </div>
        <div style={{ height: "4rem" }} />

        <TypeTitle />
        <div style={{ height: "1rem" }} />
        <div className="main__type">
          {type &&
            type.map((type) => {
              return <TypeCard key={type.id} desc={type.desc} img={type.img} />;
            })}
        </div>
        <div style={{ height: "4.5rem" }} />

        <HostCard />
        <div style={{ height: "3rem" }} />

        <WanderTitle />
        <div style={{ height: "1.3rem" }} />
        <div className="main__wander">
          {exp &&
            exp.map((exp) => {
              return (
                <WanderCard
                  key={exp.id}
                  img={exp.img}
                  type={exp.type}
                  desc={exp.desc}
                />
              );
            })}
        </div>
      </div>
      <div style={{ height: "4.5rem" }} />

      <Footer />
    </MainWrap>
  );
}

export default Main;
