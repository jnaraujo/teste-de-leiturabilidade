"use client";
import Footer from "../../components/Footer";
import Editor from "../../layouts/Editor";

import { MainContainer, MainContent } from "../../styles/pages/Home";

export default function Page() {
  return (
    <MainContainer>
      <MainContent>
        <Editor />
        <Footer />
      </MainContent>
    </MainContainer>
  );
};
