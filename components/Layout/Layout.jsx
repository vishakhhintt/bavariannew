import React from "react"
import { useRouter } from 'next/router';
import Footer from "./components/Footer/Footer"
import TopBar from "./components/TopBar/TopBar"






export default function Layout({children}) {
  const router = useRouter()
  return (
    <>
    <TopBar />
    
    {children}
    <Footer />
      
    </>
  )
}
