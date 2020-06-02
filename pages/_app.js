import React from 'react';
import App, {Container} from 'next/app';
import Navbar from '../components/Navbar';

 class MyApp extends App {
     static async getInitialProps({Component, ctx}) {
         let pageProps = {};
        
         if (Component.getInitialProps) {
             pageProps = await Component.getInitialProps(ctx);
         }
         
         return {pageProps};
     }

     render() {
         const {Component, pageProps} = this.props;

         return (
             <Container>
                 <h1>HELLO FROM _app.js!</h1>
                 <Navbar />
                 <Component {...pageProps} />
             </Container>
         );
     }
 }
 export default MyApp;