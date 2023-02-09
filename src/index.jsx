import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from "./theme"
import {ChakraProvider} from '@chakra-ui/react'
import {ParallaxProvider} from 'react-scroll-parallax';
import {BrowserRouter} from 'react-router-dom';
import ReactGA from "react-ga4";


ReactGA.initialize(import.meta.env.VITE_GA4_ID);
ReactGA.send("pageview");

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ChakraProvider theme={theme}>
            <ParallaxProvider>
                <App/>
            </ParallaxProvider>
        </ChakraProvider>
    </BrowserRouter>
)
/*ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <BrowserRouter>
        <ChakraProvider theme={theme}>
            <ParallaxProvider>
                <App />
            </ParallaxProvider>
        </ChakraProvider>
    </BrowserRouter>
    // </React.StrictMode>,
)*/
