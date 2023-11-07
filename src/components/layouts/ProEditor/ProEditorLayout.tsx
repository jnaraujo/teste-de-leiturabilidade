"use client";
import Aside from "@/components/Editor/Aside";
import Loading from "@/components/Editor/Loading";
import dynamic from "next/dynamic";
const ProEditor = dynamic(() => import("@/components/Editor"), {
  ssr: false,
  loading: () => <Loading />,
});

export default function ProEditorLayout() {
  return (
    <section className="container grid grid-cols-1 gap-4 md:grid-cols-[minmax(450px,1fr)_250px] lg:grid-cols-[1fr_300px]">
      <div className="mx-auto min-h-[100svh] w-full">
        <div className="h-full w-full max-w-3xl">
          <ProEditor isPro={true} />
        </div>
      </div>
      <Aside />
    </section>
  );
}
