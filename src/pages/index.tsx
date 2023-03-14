import React from "react";
import Timetable from "./Timetable";
import { NextSeo } from "next-seo";

const index = () => {
  return (
    <div>
      <NextSeo
        title="대학 시간표 생성기"
        description="개설강의 목록 중에서 시간표를 구성할 수 있게 해줍니다."
        openGraph={{
          url: "https://www.url.ie/a",
          title: "대학 시간표 생성기",
          description: "개설강의 목록 중에서 시간표를 구성할 수 있게 해줍니다.",
          images: [
            {
              url: "https://s3.orbi.kr/data/file/united2/b1f91f77-1b23-4229-b281-7c25379787a23.png",
              width: 800,
              height: 600,
              alt: "대학교",
            },
          ],
          site_name: "Timetable",
        }}
      />
      <Timetable />
    </div>
  );
}

export default index;