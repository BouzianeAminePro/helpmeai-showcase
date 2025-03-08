import Link from "next/link";
import { Service } from "./_components/Service";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { ShinyButton } from "./_components/magicui/shiny-button";
import { Usage } from "./_components/Usage";

export const metadata = {
  title: "Helpmeai",
  description: "Helpmeai is for your daily use opensource ai, Ollama only for now.",
};

export default function Home() {
  return (
    <div className="h-[83.2vh] w-full flex flex-col items-center justify-center my-[55rem]">
      <div className="h-[25vh] flex flex-col items-center text-center gap-y-4">
        <h1 className="scroll-m-20 text-xl md:text-4xl font-extrabold tracking-tight w-[25ch]">
          Helpmeai your Chrome Extension for Daily AI-Powered Productivity
        </h1>
        <blockquote className="mt-6 border-l-2 md:pl-6 p-3 italic">
          Get instant AI assistance for tasks like text correction, idea prompting, and quick suggestions—right from your browser.
        </blockquote>
        <Link
          href={process.env.EXTENSION_URL || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ShinyButton>
            Download Extension
          </ShinyButton>
        </Link>
      </div>
      <div className="mt-[7rem] w-full max-w-3xl flex flex-col items-center justify-center">
        <h2 className="scroll-m-20 text-xl md:text-3xl font-extrabold tracking-tight">
          Trusted by people at the following institutions
        </h2>
        <Usage />
      </div>
      <div className="w-full max-w-3xl p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-yellow-800 mb-2">
          Important Notice:
        </h2>
        <p className="text-yellow-700 text-sm md:text-base leading-relaxed">
          Please ensure you have set up{" "}
          <Link
            href={process.env.OLLAMA_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium hover:text-yellow-600"
          >
            Ollama
          </Link>{" "}
          for optimal performance. This will unlock all features and ensure the best experience with our extension.
        </p>
        <p className="text-yellow-700 text-sm md:text-base leading-relaxed">
          Case prompt button doesn't work, you must configure the Ollama server and fix the 403 problem, please refer to the{" "}
          <Link
            href={process.env.OLLAMA_CONFIG_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium hover:text-yellow-600"
          >
            documentation
          </Link>. After adding the necessary environment variables, make sure to reload Ollama for the changes to take effect.
        </p>
      </div>
      <div className="mt-[7rem]">
        <Service
          title="How it works ?"
          video="/service1.mov"
          descriptionHeader="Promptify"
          descriptionBody="Promptify takes your custom prompt and transforms it into effective prompt for various AI applications."
        />
        <Service
          video="/service2.mov"
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
            href={process.env.LINKEDIN_PROFILE_URL || "#"}
          >
            <LinkedInLogoIcon />
          </Link>
          <Link
            target="_blank"
            href={process.env.GITHUB_PROFILE_URL || "#"}
          >
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
      <Link
        href={process.env.CANNY_FEATURE_REQUEST_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-canny-link
        className="fixed right-0 top-1/2 -translate-y-1/2 inline-flex items-center justify-center px-2 py-3 text-sm font-medium text-yellow-800 bg-yellow-100 border border-yellow-400 rounded-l-md shadow-lg hover:bg-yellow-200 hover:text-yellow-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200 z-50 [writing-mode:vertical-lr]"
      >
        Feedback
      </Link>
    </div>
  );
}
