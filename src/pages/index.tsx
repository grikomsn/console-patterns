import fs from 'fs'
import { GetStaticProps, NextPage } from 'next'
import path from 'path'
import * as React from 'react'

import { LogicFunction } from '../../types'
import Container from '../components/container'
import PatternPreview from '../components/home/pattern-preview'
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
    {data.map((props, i) => (
      <PatternPreview {...props} key={i} />
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
