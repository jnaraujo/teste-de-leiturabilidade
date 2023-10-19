import Link from "next/link";
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
    <section className="mx-auto max-w-3xl space-y-6 px-3">
      <article className="mx-auto space-y-4">
        <h1 className="text-2xl font-semibold sm:text-3xl">Blog</h1>
        <div className="space-y-5">
          {posts.map((post) => (
            <div className="space-y-[2px]" key={post.Slug}>
              <h3 className="text-xl font-semibold text-zinc-700 hover:text-zinc-800 hover:underline">
                <Link href={`/blog/${post.Slug}`}>{post.Title}</Link>
              </h3>
              <p className="text-zinc-600">{post.Description}</p>
            </div>
          ))}
        </div>
      </article>
      <BannerCTA />
    </section>
  );
}
