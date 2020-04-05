import cns from '@sindresorhus/class-names'
import * as React from 'react'

export type AProps = React.AnchorHTMLAttributes<{}> & {
  custom?: boolean
}

const A: React.FC<AProps> = ({ custom = false, ...props }) => (
  <a
    {...props}
    target="_blank"
    rel="noopener noreferrer"
    className={cns({ 'custom-link': custom }, props.className)}
    children={props.children || props.href.replace(/https?:\/\//, '')}
  />
)

export default A
