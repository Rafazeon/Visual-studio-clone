import React from "react";
import dynamic from "next/dynamic";
import * as S from "~/styles/pages";

const Editor = dynamic(() => import("~/components/Editor"), {
  ssr: false,
});

function Home() {
  return (
    <S.Container>
      <Editor />
    </S.Container>
  );
}

export default Home;
