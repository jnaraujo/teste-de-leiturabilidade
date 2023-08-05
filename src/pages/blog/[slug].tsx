/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-danger */
import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getReadingTime } from "../../utils";

import styles from "../../styles/pages/Blog.module.scss";

import { BannerCTA } from "../../components/BannerCTA";
import { BlogService } from "../../services/BlogService";


export async function getStaticPaths() {
  const blogService = new BlogService(process.env.NOTION_BLOG_ID as string);
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
  const blogService = new BlogService(process.env.NOTION_BLOG_ID as string);
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
        <title>{title} - Teste de Leiturabilidade</title>
        <meta name="description" content={description} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://leitura.jnaraujo.com/" />
        <meta property="og:title" content={`${title} - Teste de Leiturabilidade`} />
        <meta property="og:description" content={description} />
        {picture && <meta property="og:image" content={picture} />}

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://leitura.jnaraujo.com/" />
        <meta
          property="twitter:title"
          content={`${title} - Teste de Leiturabilidade`}
        />
        <meta property="twitter:description" content={description} />
        {picture && <meta property="twitter:image" content={picture} />}
      </Head>
      <div className={styles.container} itemScope itemType="https://schema.org/NewsArticle">
        <div className={styles.content}>
          <article className={styles.article}>
            <h1 itemProp="headline">{title}</h1>
            <div className={styles.information}>
              <span itemProp="datePublished" content={publishedAt}>
                {new Date(publishedAt).toLocaleDateString("pt-BR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                • Leitura: {getReadingTime(body)} minutos
              </span>
            </div>
            <div className={styles.blogText} dangerouslySetInnerHTML={{ __html: body }} />
            <BannerCTA />
          </article>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
