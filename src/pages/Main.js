import NearTitle from "../components/main/NearTitle";
import TypeTitle from "../components/main/TypeTitle";
import WanderTitle from "../components/main/WanderTitle";
import NearCard from "../components/main/NearCard";
import TypeCard from "../components/main/TypeCard";
import HostCard from "../components/main/HostCard";
import WanderCard from "../components/main/WanderCard";
import Footer from "../components/common/Footer";
import MainHeader from "../components/main/MainHeader";

import React, { useState } from "react";
import styled from "styled-components";

const MainWrap = styled.div`
  width: 100%;

  .main {
    margin: 1rem 2rem;
    display: flex;
    flex-direction: column;
    width: 120rem;

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

  return (
    <MainWrap>
      <MainHeader />
      <div className="main">
        <NearTitle />
        <div className="main__near">
          {near.map((place) => {
            return (
              <NearCard key={place.id} name={place.name} dist={place.dist} />
            );
          })}
        </div>
        <TypeTitle />
        <div className="main__type">
          {type.map((type) => {
            return <TypeCard key={type.id} desc={type.desc} />;
          })}
        </div>
        <HostCard />
        <WanderTitle />
        <div className="main__wander">
          {exp.map((exp) => {
            return <WanderCard key={exp.id} type={exp.type} desc={exp.desc} />;
          })}
        </div>
      </div>
      <Footer />
    </MainWrap>
  );
}

export default Main;
