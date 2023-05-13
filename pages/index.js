import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import { getSession, useSession } from 'next-auth/react'
import Hero from '@/components/Hero'
import Slider from '@/components/Slider'
import Brands from '@/components/Brands'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const [session] = useSession();
  const session = true;

  return (
    <div>
      <Head>
        <title>Disney+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      {!session ? (
        <Hero/>
      ): (
        <main>
          <Slider/>
          <Brands/>
        </main>
      )}
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
        session,
    }
  }
}
