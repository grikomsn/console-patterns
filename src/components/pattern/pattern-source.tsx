import Highlight from 'prism-react-renderer'
import Prism from 'prism-react-renderer/prism'
import theme from 'prism-react-renderer/themes/nightOwl'
import * as React from 'react'

import { createGitHubLink } from '../../utils'
import A from '../a'

type PatternSourceProps = {
  title: string
  source: string
}

const PatternSource: React.FC<PatternSourceProps> = ({ title, source }) => (
  <div className="flex flex-col px-8 py-4 bg-gray-900 rounded shadow lg:col-span-3">
    <h6 className="mt-0 text-center">{title}</h6>

    <div className="flex flex-col flex-grow pb-4 md:flex-row">
      <div className="overflow-x-auto">
        <Highlight
          Prism={Prism}
          theme={theme}
          code={source}
          language="javascript"
          children={({ className, getLineProps, getTokenProps, tokens }) => (
            <pre
              className={className}
              children={tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            />
          )}
        />
      </div>
    </div>

    <div className="text-sm text-center">
      <A href={createGitHubLink(`${title}.pattern.js`)}>View on GitHub</A>
    </div>
  </div>
)

export default PatternSource
