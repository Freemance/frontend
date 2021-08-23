import Head from 'next/head'
import AppLayout from 'components/AppLayout'

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Freemance - Hire and Contact Profesionals</title>
        <meta name="description" content="Freemance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout/>
    </>
  )
}
