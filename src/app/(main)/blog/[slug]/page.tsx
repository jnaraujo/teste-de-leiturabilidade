import { BannerCTA } from "@/components/BannerCTA";
import styles from "@/styles/pages/Blog.module.scss";
import { fetchPostBySlug, fetchPosts } from "@/services/BlogService";
import { redirect } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await fetchPosts();

  return posts.map((post) => ({
    params: {
      slug: post.Slug,
    },
  }));
}

export default async function Page({ params }: Props) {
  const post = await fetchPostBySlug(params.slug);

  if (!post) {
    return redirect("/blog");
  }

  return (
    <article
      className="mx-auto max-w-3xl space-y-4 px-3"
      itemScope
      itemType="https://schema.org/NewsArticle"
    >
      <div className="space-y-2">
        <h1
          className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300 sm:text-3xl"
          itemProp="headline"
        >
          {post.Title}
        </h1>
        <span
          className="block text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm"
          itemProp="datePublished"
          content={post["Published at"]}
        >
          Publicado em:{" "}
          {new Date(post["Published at"]).toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}{" "}
          - ☕ {post.readingTime} min(s) de leitura
        </span>
      </div>

      <div>
        <div
          className={`prose prose-zinc ${styles.post} dark:prose-invert`}
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        />
      </div>
      <BannerCTA />
    </article>
  );
}

export async function generateMetadata({ params: { slug } }: Props) {
  const post = await fetchPostBySlug(slug);

  if (!post) return null;

  return {
    title: post?.Title + " | Teste de Leiturabilidade",
    description: post?.Description,
    image: (post as any).Picture ?? null,
  };
}
