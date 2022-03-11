/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'



function NFToken({ Component, pageProps }) {
  return (
    <div className="">
      <Head>
        <title>NFToken</title>
      </Head>

      <nav className="bg-gradient-to-r from-purple-500 to-pink-500 border-b p-6 shadow-lg">
        <img src="/favicon.ico" alt="Logo" class="object-contain h-10 w-30" />
        <div className="flex items-stretch shrink-0">
          <p className="font-bold text-5xl text-white py-1">
            NFToken
          </p>
        </div>
        <p className="mt-3 font-bold text-3xl text-gray-500"></p>
        <div className="hidden md:flex items-center mt-6  justify-right">

          <Link href="/post/audio">
            <a className="mr-20 text-white font-bold hover:text-yellow-500 transition duration-300">
              Audio
            </a>
          </Link>
          <Link href="/post/video">
            <a className="mr-20 text-white font-bold hover:text-yellow-500 transition duration-300">
              Video
            </a>
          </Link>
          <Link href="/post/picture">
            <a className="mr-20 text-white font-bold hover:text-yellow-500 transition duration-300">
              Pictures
            </a>
          </Link>
          <Link href="/post/games">
            <a className="mr-20 text-white font-bold hover:text-yellow-500 transition duration-300">
              Games
            </a>
          </Link>
          <Link href="/post/avatar">
            <a className="mr-20 text-white font-bold hover:text-yellow-500 transition duration-300">
              Avatar
            </a>
          </Link>
          <Link href="/post/create-item">
            <a className="mr-20 text-white font-bold hover:text-yellow-500 transition duration-300">
              Add-NFT
            </a>
          </Link>

        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default NFToken
