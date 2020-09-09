import * as React from "react";

import cns from "@sindresorhus/class-names";

type ContainerProps = React.FC<React.HTMLAttributes<HTMLElement>>;

const Container: ContainerProps = ({ className, ...props }) => (
  <section {...props} className={cns("container mx-auto p-4", className)} />
);

export default Container;
