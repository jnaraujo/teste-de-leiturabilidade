/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-danger */
import Link from "next/link";
import { useEffect } from "react";
import { getPost, getPosts } from "../../network/blog";

import {
  MainContainer,
  Container,
  MainContent,
  Navbar,
  BlogText,
} from "../../styles/Blog";

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
    <MainContainer>
      <MainContent>
        <Navbar>
          <div>
            <h3 className="title">
              <Link href="/" passHref>
                <a>Teste de Leitura</a>
              </Link>
            </h3>
          </div>

          <div className="cta">
            <Link href="/" passHref>
              <a>Testar meu texto!</a>
            </Link>
          </div>
        </Navbar>
        <Container>
          <h1>{meta?.title}</h1>
          <BlogText dangerouslySetInnerHTML={{ __html: html }} />
          <MidCta />
        </Container>
      </MainContent>
    </MainContainer>
  );
};

export default BlogPage;
