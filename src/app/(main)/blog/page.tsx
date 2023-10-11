import Link from "next/link";
import styles from "@/styles/pages/Blog.module.scss";
import { BannerCTA } from "@/components/BannerCTA";
import type { Metadata } from "next";
import { fetchPosts } from "@/services/BlogService";

export const metadata: Metadata = {
  title: "Blog - Teste de Leiturabilidade",
  description:
    "Tudo sobre melhores práticas de escrita, teste de leitura e como escrever bons textos.",
};

export default async function Page() {
  const posts = await fetchPosts(Infinity);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.article}>
            <h1>Blog</h1>
            <div className={styles.postList}>
              {posts.map((post) => (
                <div key={post.Slug}>
                  <h3>
                    <Link href={`/blog/${post.Slug}`}>{post.Title}</Link>
                  </h3>
                  <p>{post.Description}</p>
                </div>
              ))}
            </div>
            <BannerCTA />
          </div>
        </div>
      </div>
    </>
  );
}
