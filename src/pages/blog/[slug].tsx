/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-danger */
import { useEffect } from "react";
import Head from "next/head";

import { getReadingTime } from "../../utils/readingTime";

import Navbar from "../../components/Navbar";

import {
  MainContainer,
  Container,
  MainContent,
  BlogText,
} from "../../styles/Blog";

import { getPost, getPosts } from "../../network/blog";

import MidCta from "../../components/MidCta";

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getPost(slug);
  return {
    props: {
      meta: {
        title: post.meta.title,
        description: post.meta.description,
        date: post.meta.date,
      },
      html: post.html,
    },
    revalidate: 120,
  };
}

interface IProps {
  meta: {
    title: string;
    description: string;
    date: string;
  };
  html: string;
}

const BlogPage = ({ meta, html }: IProps) => {
  useEffect(() => {
    // console.log(meta);
  }, []);
  return (
    <>
      <Head>
        <title>{meta?.title} - Teste de Leitura</title>
        <meta name="description" content={meta?.description} />
      </Head>
      <MainContainer>
        <MainContent>
          <Navbar />
          <Container>
            <h1>{meta?.title}</h1>
            {/* <h2>{meta?.description}</h2> */}
            <div className="information">
              <p>
                {new Date(meta?.date).toLocaleDateString("pt-BR", {
                  // weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                • Leitura: {getReadingTime(html)} minutos
              </p>
            </div>
            <BlogText dangerouslySetInnerHTML={{ __html: html }} />
            <MidCta />
          </Container>
        </MainContent>
      </MainContainer>
    </>
  );
};

export default BlogPage;
