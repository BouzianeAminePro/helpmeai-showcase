import Link from "next/link";
import { Service } from "./_components/Service";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export const metadata = {
  title: "Helpmeai",
  description: "Helpmeai is for your daily use opensource ai, Ollama only for now.",
};

export default function Home() {
  return (
    <div className="h-[83.2vh] w-full flex flex-col items-center justify-center">
      <div className="h-[25vh] flex flex-col items-center text-center">
        <h1 className="scroll-m-20 text-xl md:text-3xl font-extrabold tracking-tight w-[25ch]">
          Helpmeai your Chrome Extension for Daily AI-Powered Productivity
        </h1>
        <blockquote className="mt-6 border-l-2 md:pl-6 p-3 italic">
          Get instant AI assistance for tasks like text correction, idea prompting, and quick suggestions—right from your browser.
        </blockquote>
      </div>
      <div className="mt-[7rem] w-full max-w-3xl p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-yellow-800 mb-2">
          Important Notice:
        </h2>
        <p className="text-yellow-700 text-sm md:text-base leading-relaxed">
          Please ensure you have set up{" "}
          <Link
            href="https://ollama.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium hover:text-yellow-600"
          >
            Ollama
          </Link>{" "}
          for optimal performance. This will unlock all features and ensure the best experience with our extension.
        </p>
      </div>
      <div className="mt-[7rem]">
        <Service
          title="How it works ?"
          video="/service2.mov"
          descriptionHeader="Promptify"
          descriptionBody="Promptify takes your text and transforms it into effective prompts for various AI applications."
        />
        <Service
          video="/service1.mov"
          descriptionHeader="Copy/Insert"
          descriptionBody="Easily copy and insert your text into any application, streamlining your workflow and enhancing productivity with just a click."
          reverse={true}
        />
      </div>
      <div className="mt-[7rem] flex items-center justify-around w-full h-[5rem]">
        <h4 className="scroll-m-20 text-sm font-semibold tracking-tight">
          @2024 Kabla labs. All rights reserved
        </h4>
        <div className="flex items-center gap-x-2">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/amine-bouziane-747790127"
          >
            <LinkedInLogoIcon />
          </Link>
          <Link target="_blank" href="https://github.com/BouzianeAminePro">
            <GitHubLogoIcon />
          </Link>
          <Link
            href="/policy"
            className="underline font-medium hover:text-yellow-600"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
