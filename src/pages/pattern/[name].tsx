import fs from 'fs'
import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import path from 'path'
import * as React from 'react'

import Container from '../../components/container'
import PatternSource from '../../components/pattern/pattern-source'
import { createPattern } from '../../utils'

type PatternPageProps = {
  filename: string
  source: string
}

const PatternPage: NextPage<PatternPageProps> = ({ filename, source }) => {
  const { query } = useRouter()

  const [size, setSize] = React.useState(5)
  const inc = () => setSize(size + 1)
  const dec = () => size > 1 && setSize(size - 1)

  const computedPattern = React.useMemo(() => {
    const logic = require(`../../../patterns/${filename}`).default
    return createPattern(logic).test(size)
  }, [size])

  const title = `${query.name}`

  const Decrease: React.FC = () => (
    <button className="px-2 text-gray-900 bg-gray-400 rounded-sm" onClick={dec}>
      -
    </button>
  )

  const SizeIndicator: React.FC = () => (
    <span className="px-4 py-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
      {size}
    </span>
  )

  const Increase: React.FC = () => (
    <button className="px-2 text-gray-900 bg-gray-400 rounded-sm" onClick={inc}>
      +
    </button>
  )

  return (
    <Container>
      <NextSeo title={title} />

      <div className="mb-4 text-center">
        <Link href="/">
          <a>⬅ Back to gallery</a>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <PatternSource title={title} source={source} />

        <div className="flex flex-col justify-between p-8 bg-gray-900 rounded shadow lg:col-span-2">
          <div className="text-center">
            <Decrease />
            <SizeIndicator />
            <Increase />
          </div>
          <pre className="flex-grow py-8 overflow-x-auto">
            {computedPattern}
          </pre>
          <div className="text-center">
            <Decrease />
            <SizeIndicator />
            <Increase />
          </div>
        </div>
      </div>
    </Container>
  )
}

export async function getStaticPaths() {
  const patternsDirectory = path.join(process.cwd(), 'patterns')
  const filenames = fs.readdirSync(patternsDirectory)

  const paths = filenames.reduce((acc, filename) => {
    if (/\.pattern.js$/.test(filename)) {
      return acc.concat({ params: { name: filename.split('.')[0] } })
    }
    return acc
  }, [])

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const filename = `${params.name}.pattern.js`
  const patternsDirectory = path.join(process.cwd(), 'patterns')
  const filePath = path.join(patternsDirectory, filename)
  const source = fs.readFileSync(filePath, 'utf8').trim()

  return { props: { filename, source } }
}

export default PatternPage
