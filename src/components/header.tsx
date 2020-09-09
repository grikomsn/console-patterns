import * as React from "react";

import A from "@/components/a";
import config from "~/site-config";

const Header: React.FC = () => (
  <div className="p-4 text-center">
    <h1>
      <span role="img" aria-label="kite">
        🪁
      </span>{" "}
      {config.title}
    </h1>
    <p className="text-xl">{config.description}</p>

    <p className="text-sm">
      Request new patterns or find some bugs?{" "}
      <A href="https://github.com/grikomsn/console-patterns/issues">
        Submit an issue on GitHub
      </A>
      .
    </p>
  </div>
);

export default Header;
