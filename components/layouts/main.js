import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nguyễn Thành Long" />
        <meta name="author" content="Nguyễn Thành Long" />
        <meta name="author" content="nguyenthanhlong" />
        <link rel="apple-touch-icon" href="/public/IMG_8653.jpeg" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Nguyễn Thành Long" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />

        <meta property="og:site_name" content="Nguyen Thanh Long" />
        <meta name="og:title" content="Nguyen Thanh Long | Profile" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/IMG_8653.jpeg" />
        <title>Nguyen Thanh Long | Profile</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
