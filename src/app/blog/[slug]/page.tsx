import { BannerCTA } from "@/components/BannerCTA";
import styles from "../../../styles/pages/Blog.module.scss";
import { fetchPostBySlug } from "@/services/BlogService";
import { getReadingTime } from "@/utils";
import { redirect } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: Props) {
  const post = await fetchPostBySlug(params.slug);

  if (!post) {
    return redirect("/blog");
  }

  return (
    <div className={styles.container} itemScope itemType="https://schema.org/NewsArticle">
      <div className={styles.content}>
        <article className={styles.article}>
          <h1 itemProp="headline">{post.Title}</h1>
          <div className={styles.information}>
            <span itemProp="datePublished" content={post["Published at"]}>
              {new Date(post["Published at"]).toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              • Leitura: {getReadingTime(post.html)} minutos
            </span>
          </div>
          <div className={styles.blogText} dangerouslySetInnerHTML={{ __html: post.html }} />
          <BannerCTA />
        </article>
      </div>
    </div>
  );
};

export async function generateMetadata({ params: { slug } }: Props) {
  const post = await fetchPostBySlug(slug);

  if (!post) return null;

  return {
    title: post?.Title + " | Teste de Leiturabilidade",
    description: post?.Description,
    image: (post as any).Picture ?? null,
  };
}