'use client'
import Head from 'next/head'
import Button from '@mui/material/Button'
import CustomTextField from 'src/components/text-field'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gary's Shop</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box><CustomTextField id='aa' label="Text field" /></Box>
      
    </>
  )
}
