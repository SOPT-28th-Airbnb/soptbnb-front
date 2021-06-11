import React from "react";
import TitleWrap from "../../lib/styles/TitleWrap";
import SubtitleWrap from "../../lib/styles/SubtitleWrap";
import { useMediaQuery } from "react-responsive";

const WanderTitle = () => {
  const isMobile = useMediaQuery({ maxWidth: 500 });

  return isMobile ? (
    <TitleWrap>
      <div className="title" style={{ "padding-bottom": "0.3rem" }}>
        서울의 매력을 체험할 수 있는 방법
      </div>
    </TitleWrap>
  ) : (
    <TitleWrap>
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
    </TitleWrap>
  );
};

export default WanderTitle;
