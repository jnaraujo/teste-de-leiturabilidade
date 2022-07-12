/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-danger */
import Link from "next/link";
import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";

import { MainContainer, Container, MainContent } from "../../styles/Blog";

import MidCta from "../../components/MidCta";
import Navbar from "../../components/NavbarBlog";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("/api/blog/posts").then((res) => {
      setPosts(
        res.data.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
      );
    });
  }, []);
  return (
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
};

export default BlogPage;
