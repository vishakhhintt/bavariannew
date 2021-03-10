import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import { useRouter } from 'next/router';



function MyApp({ Component, pageProps,footerData }) {
  const allmeta = footerData
  const router = useRouter()

  return <Layout>
    <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
       
        {
          allmeta.map((seo_data,k)=>{ 
            if(router.pathname == seo_data.seo_url)
            {
          return ( 
        <>    
          <meta name="description" content={seo_data.s_desc} />   
          
          <meta property="og:url"                content={seo_data.seo_url} />
          <meta property="og:title"              content={seo_data.s_title} />
          <meta property="og:description"        content={seo_data.s_desc} />
          <meta property="og:image"              content={seo_data.seo_image} />

          <title>{seo_data.s_title}</title>
        </>
          ) 
                    
      } } )}      
      </Head>
    <Component {...pageProps} />
         
  </Layout>

}

MyApp.getInitialProps = async ({ Component, ctx , router  }) => {
  const footerRes = await fetch('https://liverpoolbavarian.com/admBenz/tbl_seo?id='+router.pathname);
  const footerData = await footerRes.json(); 
  
  return {  footerData };
};

export default MyApp
