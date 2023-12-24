"use client";
import dynamic from "next/dynamic";
import Loading from "@/components/Editor/Loading";
import Aside from "@/components/Editor/Aside";
const TextEditor = dynamic(() => import("@/components/Editor"), {
  ssr: false,
  loading: () => <Loading />,
});

const Editor: React.FC = () => {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-[minmax(450px,1fr)_250px] lg:grid-cols-[1fr_300px]">
      <div className="mx-auto mb-6 min-h-[100svh] w-full rounded-lg">
        <div className="h-full w-full max-w-3xl overflow-hidden rounded-lg border border-zinc-300 bg-stone-200/50 shadow-md dark:border-zinc-600 dark:bg-transparent">
          <TextEditor />
        </div>
      </div>

      <Aside />
    </section>
  );
};

export default Editor;
