import Editor from "@/layouts/Editor";
import HowItWorks from "@/layouts/HowItWorks";

export default function Home() {
  return (
    <main className="max-w-screen-lg 2xl:max-w-screen-xl mx-auto px-4">
      <Editor />
      <HowItWorks />
    </main>
  );
}
