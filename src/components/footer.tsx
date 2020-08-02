import * as React from "react";

import A from "@/components/a";

const Footer: React.FC = () => (
  <footer className="p-8 pb-16 text-sm text-center">
    Made using <A href="https://nextjs.org">Next.js</A> and{" "}
    <A href="https://tailwindcss.com">Tailwind CSS</A>. Hosted on{" "}
    <A href="https://vercel.com/home">Vercel</A>.
    <br />
    Source code is{" "}
    <A href="https://github.com/grikomsn/console-patterns">
      available on GitHub
    </A>
    .
  </footer>
);

export default Footer;
