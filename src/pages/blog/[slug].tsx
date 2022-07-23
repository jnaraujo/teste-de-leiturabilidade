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

import { getBlogPosts, getPost } from "../../network/notion";

import MidCta from "../../components/MidCta";

export async function getStaticPaths() {
  const posts = await getBlogPosts();

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getPost(slug);

  if (!post) {
    return {
      props: {
        notFound: true,
      },
    };
  }

  return {
    props: { ...post },
    revalidate: 120,
  };
}

interface IProps {
  title: string;
  description: string;
  body: string;
  publishedAt: string;
  picture: string;
}

const BlogPage = ({
  title,
  description,
  body,
  publishedAt,
  picture,
}: IProps) => {
  useEffect(() => {
    // console.log(meta);
  }, []);
  return (
    <>
      <Head>
        <title>{title} - Teste de Leitura</title>
        <meta name="description" content={description} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://leitura.jnaraujo.com/" />
        <meta property="og:title" content={`${title} - Teste de Leitura`} />
        <meta property="og:description" content={description} />
        {picture && <meta property="og:image" content={picture} />}

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://leitura.jnaraujo.com/" />
        <meta
          property="twitter:title"
          content={`${title} - Teste de Leitura`}
        />
        <meta property="twitter:description" content={description} />
        {picture && <meta property="twitter:image" content={picture} />}
      </Head>
      <MainContainer>
        <MainContent>
          <Navbar />
          <Container>
            <h1>{title}</h1>
            <div className="information">
              <p>
                {new Date(publishedAt).toLocaleDateString("pt-BR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                • Leitura: {getReadingTime(body)} minutos
              </p>
            </div>
            <BlogText dangerouslySetInnerHTML={{ __html: body }} />
            <MidCta />
          </Container>
        </MainContent>
      </MainContainer>
    </>
  );
};

export default BlogPage;
