import cns from '@sindresorhus/class-names'
import * as React from 'react'

type ContainerProps = React.FC<React.HTMLAttributes<HTMLElement>>

const Container: ContainerProps = (props) => (
  <section
    {...props}
    className={cns('container mx-auto p-4', props.className)}
  />
)

export default Container
