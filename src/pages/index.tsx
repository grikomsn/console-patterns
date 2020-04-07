import fs from 'fs'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import path from 'path'
import Highlight, { Prism } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import * as React from 'react'

import { LogicFunction } from '../../types'
import Container from '../components/container'
import { createPattern } from '../utils'

type PatternData = {
  title: string
  source: string
  example: string
}

type HomePageProps = {
  data: PatternData[]
}

const HomePage: NextPage<HomePageProps> = ({ data }) => (
  <Container className="grid grid-cols-1 gap-4 md:grid-cols-2">
    {data.map(({ title, source, example }, i) => (
      <div
        className="flex flex-col h-full p-4 bg-gray-900 rounded shadow"
        key={i}
      >
        <h6 className="mt-0 text-center">{title}</h6>

        <div className="flex flex-col flex-grow pb-8 lg:flex-row">
          <div className="flex-grow overflow-x-auto text-sm">
            <Highlight
              Prism={Prism}
              theme={theme}
              code={source}
              language="javascript"
              children={({
                className,
                getLineProps,
                getTokenProps,
                tokens,
              }) => (
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
            <a>Open playground</a>
          </Link>
        </div>
      </div>
    ))}
  </Container>
)

export const getStaticProps: GetStaticProps = async () => {
  const patternsDirectory = path.join(process.cwd(), 'patterns')
  const filenames = fs.readdirSync(patternsDirectory)

  let data: PatternData[] = filenames.reduce((acc, filename) => {
    if (/\.pattern.js$/.test(filename)) {
      const filePath = path.join(patternsDirectory, filename)
      const source = fs.readFileSync(filePath, 'utf8').trim()
      const logic: LogicFunction = require(`../../patterns/${filename}`).default
      const example = createPattern(logic).test(5)
      return acc.concat({ title: filename.split('.')[0], source, example })
    }
    return acc
  }, [])

  return { props: { data } }
}

export default HomePage
