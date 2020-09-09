import * as React from "react";
import fs from "fs";
import path from "path";

import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";

import A from "@/components/a";
import Container from "@/components/container";
import Link from "next/link";
import { LogicFunction } from "@/types";
import { NextSeo } from "next-seo";
import { createPattern } from "@/utils";
import theme from "@/prism-theme";
import { toClipboard } from "copee";
import { useRouter } from "next/router";
import useDebounce from "@/hooks/use-debounce";

interface PatternPageProps {
  filename: string;
  source: string;
}

function createGitHubLink(name: string) {
  return `https://github.com/grikomsn/console-patterns/blob/master/patterns/${name}`;
}

const PatternPage: NextPage<PatternPageProps> = ({ source }) => {
  const router = useRouter();
  const title = `${router.query.name}`;

  const [size, setSize] = React.useState(5);
  const inc = () => setSize(size + 1);
  const dec = () => size > 1 && setSize(size - 1);

  const [code, setCode] = React.useState(source);
  const [debouncedCode, update] = useDebounce(code);
  const PatternRenderer: React.FC<{ children: LogicFunction }> = ({
    children,
  }) => <pre>{createPattern(children).test(size)}</pre>;
  const transformer = (s: string) => {
    const sourceTrimmed = s.replace(/export default /, "");
    return `<PatternRenderer>{${sourceTrimmed}}</PatternRenderer>`;
  };

  const Decrease: React.FC = () => (
    <button
      className="px-2 text-gray-900 bg-gray-400 rounded-sm"
      onClick={dec}
      type="button"
    >
      -
    </button>
  );

  const SizeIndicator: React.FC = () => (
    <span className="px-4 py-2" style={{ fontVariantNumeric: "tabular-nums" }}>
      {size}
    </span>
  );

  const Increase: React.FC = () => (
    <button
      className="px-2 text-gray-900 bg-gray-400 rounded-sm"
      onClick={inc}
      type="button"
    >
      +
    </button>
  );

  React.useEffect(() => {
    document.querySelector("textarea").focus();
  }, []);

  return (
    <Container>
      <NextSeo title={title} />

      <div className="mb-4 text-center">
        <Link href="/">
          <a href="/">⬅ Back to gallery</a>
        </Link>
      </div>

      <LiveProvider
        code={debouncedCode}
        scope={{ PatternRenderer }}
        theme={theme}
        transformCode={transformer}
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          <div className="flex flex-col px-8 py-4 bg-gray-900 rounded shadow lg:col-span-3">
            <div className="text-center">
              <h6 className="mt-0">{title}</h6>
              <p className="mb-2 text-sm text-gray-600">
                You can click or tap the snippet below and edit the code which
                generates the pattern
              </p>
            </div>

            <div className="flex flex-col flex-grow pb-4 md:flex-row">
              <div className="overflow-x-auto text-sm lg:text-base">
                <LiveEditor
                  onChange={(newCode) => setCode(newCode)}
                  onKeyPress={(e) => e.key === "Enter" && update()}
                />
                <LiveError />
              </div>
            </div>

            <div className="text-sm text-center">
              <button
                className="link"
                onClick={() => toClipboard(debouncedCode)}
                type="button"
              >
                Copy to clipboard
              </button>
              <span className="mx-2">/</span>
              <A href={createGitHubLink(`${title}.pattern.js`)}>
                View on GitHub
              </A>
            </div>
          </div>

          <div className="flex flex-col justify-between p-8 bg-gray-900 rounded shadow lg:col-span-2">
            <div className="text-center">
              <Decrease />
              <SizeIndicator />
              <Increase />
            </div>
            <pre className="flex-grow py-8 overflow-x-auto">
              <LivePreview />
            </pre>
            <div className="text-center">
              <Decrease />
              <SizeIndicator />
              <Increase />
            </div>
          </div>
        </div>
      </LiveProvider>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const patternsDirectory = path.join(process.cwd(), "patterns");
  const filenames = fs.readdirSync(patternsDirectory);

  const paths = filenames.reduce((acc, filename) => {
    if (/\.pattern.js$/.test(filename)) {
      return acc.concat({ params: { name: filename.split(".")[0] } });
    }
    return acc;
  }, []);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const patternsDirectory = path.join(process.cwd(), "patterns");
  const filePath = path.join(patternsDirectory, `${params.name}.pattern.js`);
  const source = fs.readFileSync(filePath, "utf8").trim();

  return {
    props: {
      source,
    },
  };
};

export default PatternPage;
