/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-danger */
import Link from "next/link";
import Head from "next/head";

import styles from "../../styles/pages/Blog.module.scss";

import { BannerCTA } from "../../components/BannerCTA";
import { BlogService, IBlogPost } from "../../services/BlogService";

export async function getStaticProps() {
  const blogService = new BlogService(process.env.NOTION_BLOG_ID as string);
  const posts = await blogService.getBlogPosts();

  return {
    props: {
      posts,
    },
    revalidate: 120, // In seconds
  };
}

interface IProps {
  posts: IBlogPost[];
}

const BlogPage = ({ posts }: IProps) => (
  <>
    <Head>
      <title>Blog - Teste de Leiturabilidade</title>
      <meta
        name="description"
        content="Tudo sobre melhores práticas de escrita, teste de leitura e como escrever bons textos."
      />
    </Head>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.article}>
          <h1>Blog</h1>
          <div className={styles.postList}>
            {posts.map((post) => (
              <div key={post.slug}>
                <h3>
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p>{post.description}</p>
              </div>
            ))}
          </div>
          <BannerCTA />
        </div>
      </div>
    </div>
  </>
);

export default BlogPage;
