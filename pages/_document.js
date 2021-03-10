import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <link rel="icon" href="img/favicon.ico" />
            <link rel="stylesheet" href="css/bundle.min.css" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="css/animate.min.css" />
            <link rel="stylesheet" href="css/line-awesome.min.css" />
            <link rel="stylesheet" href="css/style.css" />
            <link rel="stylesheet" href="css/settings.css" />
            <link rel="stylesheet" type="text/css" href="css/slick-theme.css" />
            <link rel="stylesheet" type="text/css" href="css/slick.css" />
            <link rel="stylesheet" type="text/css" href="css/allpagecss.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
            <script src="js/bundle.min.js"></script>
            <script src="js/jquery.cubeportfolio.min.js"></script>
            <script src="js/jquery.fancybox.js"></script>
            <script src="js/jquery.fancybox.min.js"></script>
            <script src="js/parallaxie.min.js"></script>
            <script src="js/script.js"></script>
            <script src="js/jquery.backstretch.min.js"></script>
            <script src="js/scripts.js"></script>
            <script src="js/waypoints.min.js"></script>
            <script src="js/wow.min.js"></script>
            <script type="text/javascript" src="js/slick.min.js"></script>
            <script src="js/allpagescripts.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument;