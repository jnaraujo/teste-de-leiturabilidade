/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-danger */
import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getReadingTime } from "../../utils";

import {
  MainContainer,
  Container,
  MainContent,
  BlogText,
} from "../../styles/pages/Blog";

import { BannerCTA } from "../../components/BannerCTA";
import { BlogService } from "../../services/BlogService";

const blogService = new BlogService(process.env.NOTION_BLOG_ID as string);

export async function getStaticPaths() {
  const posts = await blogService.getBlogPosts();

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

export async function getStaticProps({ params: { slug } }: any) {
  const post = await blogService.getBlogPostById(slug as string);

  if (!post) {
    return {
      redirect: {
        destination: "/blog",
      }
    };
  }

  return {
    props: { notFound: false, ...post },
    revalidate: 120,
  };
}

interface IProps {
  title: string;
  description: string;
  body: string;
  publishedAt: string;
  picture: string;
  notFound: boolean;
}

const BlogPage = ({
  title,
  description,
  body,
  publishedAt,
  picture,
  ...props
}: IProps) => {
  const router = useRouter();

  useEffect(() => {
    if (props.notFound) {
      router.push("/blog");
    }
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
            <BannerCTA />
          </Container>
        </MainContent>
      </MainContainer>
    </>
  );
};

export default BlogPage;
