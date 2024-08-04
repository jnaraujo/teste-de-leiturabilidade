"use client";
import dynamic from "next/dynamic";
import Loading from "@/components/Editor/Loading";
import DetailsPanel from "@/components/details-panel";
const TextEditor = dynamic(() => import("@/components/Editor"), {
  ssr: false,
  loading: () => <Loading />,
});

const Editor: React.FC = () => {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-[minmax(450px,1fr)_250px] lg:grid-cols-[1fr_300px]">
      <div className="mx-auto mb-6 min-h-[100svh] w-full">
        <div className="h-full w-full max-w-3xl overflow-hidden">
          <TextEditor />
        </div>
      </div>

      <aside className="sticky top-4 mb-6 h-fit w-full">
        <DetailsPanel />
      </aside>
    </section>
  );
};

export default Editor;
