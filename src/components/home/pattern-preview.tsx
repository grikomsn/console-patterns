import Link from 'next/link'
import Highlight from 'prism-react-renderer'
import Prism from 'prism-react-renderer/prism'
import theme from 'prism-react-renderer/themes/nightOwl'
import * as React from 'react'

type PatternPreviewProps = {
  title: string
  source: string
  example: string
}

const PatternPreview: React.FC<PatternPreviewProps> = ({
  title,
  source,
  example,
}) => (
  <div className="flex flex-col h-full p-4 bg-gray-900 rounded shadow">
    <h6 className="mt-0 text-center">{title}</h6>

    <div className="flex flex-col flex-grow pb-8 lg:flex-row">
      <div className="flex-grow overflow-x-auto text-sm">
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

      <div className="m-4 border border-gray-800" />

      <pre className="m-auto text-sm">{example}</pre>
    </div>

    <div className="text-sm text-center">
      <Link href="/pattern/[name]" as={`/pattern/${title}`}>
        <a>Preview full pattern</a>
      </Link>
    </div>
  </div>
)

export default PatternPreview
