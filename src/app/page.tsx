import { Metadata } from "next";
import Image from "next/image";
import { HomePageUI } from "../components/HomePageUI/HomePageUI";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Página Inicial",
  description:
    "Página inicial sobre o desafio técnico da RPE Tech para a vaga de desenvolvedor front-end.",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 items-center">
        <h1 className="text-xl lg:text-4xl font-bold text-primary">
          Desafio Técnico - Desenvolvedor Front End
        </h1>
        <Image
          src="/logo_rpe.png"
          alt="RPE Tech Logo"
          className="hidden lg:block"
          width={155}
          height={112}
        />
      </div>
      <Suspense>
        <HomePageUI />
      </Suspense>
    </div>
  );
}
