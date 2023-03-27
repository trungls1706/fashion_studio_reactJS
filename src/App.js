import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/globalStyles";
import { dark } from "./assets/styles/themes";
import {useRef} from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import Home from "./sections/home";
import 'locomotive-scroll/dist/locomotive-scroll.esm'
function App() {
  const containerRef = useRef(null);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <main data-scroll-container ref={containerRef}>
            <Home/>
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
