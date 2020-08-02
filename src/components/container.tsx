import * as React from "react";

import cns from "@sindresorhus/class-names";

type ContainerProps = React.FC<React.HTMLAttributes<HTMLElement>>;

const Container: ContainerProps = (props) => (
  <section
    {...props}
    className={cns("container mx-auto p-4", props.className)}
  />
);

export default Container;
