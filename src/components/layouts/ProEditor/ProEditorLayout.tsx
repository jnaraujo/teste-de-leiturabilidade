"use client";
import Aside from "@/components/Editors/ProEditor/Aside";
import Loading from "@/components/Editors/SimpleEditor/Loading";
import dynamic from "next/dynamic";
const ProEditor = dynamic(() => import("@/components/Editors/ProEditor"), {
  ssr: false,
  loading: () => <Loading />,
});

export default function ProEditorLayout() {
  return (
    <section className="container grid grid-cols-1 gap-4 sm:grid-cols-[1fr_300px]">
      <div className="mx-auto min-h-[100svh] w-full">
        <div className="h-full w-full max-w-3xl">
          <ProEditor />
        </div>
      </div>
      <Aside />
    </section>
  );
}
