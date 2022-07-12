/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-danger */
import Link from "next/link";
import Head from "next/head";

import { MainContainer, Container, MainContent } from "../../styles/Blog";

import MidCta from "../../components/MidCta";
import Navbar from "../../components/Navbar";
import { getPost, getPosts } from "../../network/blog";

export async function getStaticProps() {
  const posts = await getPosts();
  const paypack = [];
  const promises = [];

  for (let i = 0; i < posts.length; i += 1) {
    promises.push(getPost(posts[i].slug));
  }

  const result = await Promise.all(promises);

  for (let i = 0; i < posts.length; i += 1) {
    paypack.push({
      title: result[i].meta.title,
      slug: posts[i].slug,
      date: result[i].meta.date,
      description: result[i].meta.description,
    });
  }

  return {
    props: {
      posts: paypack,
    },
    revalidate: 120,
  };
}

const BlogPage = ({ posts }) => (
  <>
    <Head>
      <title>Blog - Teste de Leitura</title>
      <meta
        name="description"
        content="Tudo sobre melhores práticas de escrita, teste de leitura e como escrever bons textos."
      />
    </Head>
    <MainContainer>
      <MainContent>
        <Navbar />
        <Container>
          <h1>Blog</h1>
          <div className="postList">
            {posts.map((post) => (
              <div key={post.slug}>
                <h2>
                  <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                    <a>{post.title}</a>
                  </Link>
                </h2>
                <p>{post.description}</p>
              </div>
            ))}
          </div>
          <MidCta />
        </Container>
      </MainContent>
    </MainContainer>
  </>
);

export default BlogPage;
