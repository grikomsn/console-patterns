import * as React from "react";

import cns from "@sindresorhus/class-names";

interface AProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  custom?: boolean;
}

const A: React.FC<AProps> = ({
  children,
  className,
  custom = false,
  href,
  ...props
}) => {
  const mergedProps: AProps = {
    ...props,
    target: "_blank",
    rel: "noopener noreferrer",
    className: cns({ "custom-link": custom }, className),
  };

  return <a {...mergedProps}>{children || href.replace(/https?:\/\//, "")}</a>;
};

export default A;
