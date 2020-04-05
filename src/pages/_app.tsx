import '../stylesheets/index.css'

import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'

import config from '../../site-config'
import Layout from '../components/layout'

export default ({ Component, pageProps, router }: AppProps) => (
  <Layout>
    <DefaultSeo
      title="Gallery"
      titleTemplate={`%s • ${config.title}`}
      description={config.description}
      openGraph={{
        title: config.title,
        description: config.description,
        type: 'website',
        site_name: config.title,
        images: [{ url: `${config.url}/social.png` }],
      }}
      canonical={config.url + (router.asPath || '')}
    />
    <Component {...pageProps} />
  </Layout>
)
