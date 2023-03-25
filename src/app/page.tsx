"use client";
import { Grid } from "@mui/material";
import {
  Container,
  Informations,
  MainContainer,
  MainContent,
} from "../styles/pages/Home";

// COMPONENTS
import Footer from "../components/Footer";
import Editor from "../layouts/Editor";
import HowItWorks from "../layouts/HowItWorks";

export default function Page() {
  return (
    <MainContainer>
      <MainContent>
        <Editor />
        <div className="line" />
        <Informations>
          <HowItWorks />
          <Container container justifyContent="center">
            <Grid item xs={12} className="line" />
            <Footer />
          </Container>
        </Informations>
      </MainContent>
    </MainContainer>
  );
};