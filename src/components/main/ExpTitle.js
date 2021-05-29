import React from "react";
import TitleWrap from "../../lib/styles/TitleWrap";
import SubtitleWrap from "../../lib/styles/SubtitleWrap";

const WanderTitle = () => {
  return (
    <>
      <TitleWrap>
        <div className="title" style={{ "padding-bottom": "0.3rem" }}>
          체험 둘러보기
        </div>
      </TitleWrap>
      <SubtitleWrap>
        <div className="subtitle">
          현지 전문가와 함께하는 독특한 액티비티에 오프라인이나 온라인으로
          참여해 보세요.
        </div>
      </SubtitleWrap>
    </>
  );
};

export default WanderTitle;
