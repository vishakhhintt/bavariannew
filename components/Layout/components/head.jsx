import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router';

export async function getStaticProps(context) {
   

  const res = await fetch(`https://liverpoolbavarian.com/admBenz/tbl_seo`)
  const data = await res.json()
  
     if(!data)
     {
        return {
           props : {
              seo_data:null,
        }};
        
     }
     else
     {
        return {
           props : {

            seo_data:data,    

        }};
        
     }
  }

  export default function AllPage({path,props}) {
   console.log(path.pathname);
  //  console.log(path.seo_data);
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* {
          props.seo_data.map((seo_data,k)=>{ 
          return (  */}
        <>    
          <meta name="description" content="We are hintt the best digital Agency in Liverpool, London, UK . Hintt offers the best SEO services, website designing & development, Branding services at affordable price." />     
          
          {/* <meta property="og:url"                content={seo_data.seo_url} /> */}
          <meta property="og:type"               content="eeeeeeeeee" />
          <meta property="og:title"              content="ttttttttttttt" />
          <meta property="og:description"        content="yyyyyyyyyyyy" />
          <meta property="og:image"              content="gggggggggg" />

          <title>Benz and bavarian</title>
        </>
        {/* ) 
                    
      })}    */}
        
      </Head>
    </div>
  )
}