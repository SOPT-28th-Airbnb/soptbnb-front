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
      display: flex;
      flex-wrap: nowrap;
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
  const [near, setNear] = useState([
    {
      id: 1,
      name: "서울",
      dist: 20,
    },
  ]);

  const [type, setType] = useState([
    {
      id: 1,
      desc: "집 전체",
    },
  ]);

  const [exp, setExp] = useState([
    {
      id: 1,
      type: "체험",
      desc: "어디에서든 세계 각지의 매력을 만나실 수 있습니다.",
    },
  ]);

  useEffect(() => {
    (async () => {
      const near = await getNearCard();
      setNear(near);

      const resid = await getResidCard();
      setNear(resid);

      const exp = await getExpCard();
      setNear(exp);
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
                <NearCard key={place.id} name={place.name} dist={place.dist} />
              );
            })}
        </div>
        <div style={{ height: "4rem" }} />

        <TypeTitle />
        <div style={{ height: "1rem" }} />
        <div className="main__type">
          {type &&
            type.map((type) => {
              return <TypeCard key={type.id} desc={type.desc} />;
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
                <WanderCard key={exp.id} type={exp.type} desc={exp.desc} />
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
