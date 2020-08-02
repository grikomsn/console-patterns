import "@/stylesheets/index.css";

import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import Layout from "@/components/layout";
import config from "~/site-config";

const App = ({ Component, pageProps, router }: AppProps) => (
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <DefaultSeo
      title="Gallery"
      titleTemplate={`%s • ${config.title}`}
      description={config.description}
      openGraph={{
        title: config.title,
        description: config.description,
        type: "website",
        site_name: config.title,
        images: [{ url: `${config.url}/social.png` }],
      }}
      canonical={config.url + (router.asPath || "")}
    />

    <Component {...pageProps} />
  </Layout>
);

export default App;
