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
  const {data} = useSession();
  

  return (
    <div>
      <Head>
        <title>Disney+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      {!data ? (
        <Hero/>
      ): (
        <main className='relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]'>
          <Slider/>
          <Brands/>
        </main>
      )}
    </div>
  )
}

export async function getServerSideProps(context) {
  const data = await getSession(context);
  return {
    props: {
        data,
    }
  }
}