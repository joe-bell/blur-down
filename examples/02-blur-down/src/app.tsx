import * as React from "react";
import { Layout, LayoutItem, LayoutTitle } from "./irrelevant";
import { Img } from "./img";

import blurImgSrc from "./assets/blur.jpg";

const blurImg = {
  alt: "Damon Albarn of the band 'Blur'",
  src: blurImgSrc,
  height: 1338,
  width: 2373,
  // Note: In production, you should generate your placeholder on the
  // server-side or at build time (e.g. via https://plaiceholder.co)
  //
  // In this example we'll use https://plaiceholder.co's unique CSS-only
  // placeholder approach, but these transitions will work just the same with
  // base64, blurhash and more…
  placeholder: {
    backgroundImage:
      "linear-gradient(90deg, rgb(62,38,99) 25%,rgb(48,23,55) 25% 50%,rgb(60,32,51) 50% 75%,rgb(12,5,27) 75% 100%),linear-gradient(90deg, rgb(46,24,75) 25%,rgb(49,23,40) 25% 50%,rgb(41,20,25) 50% 75%,rgb(11,7,17) 75% 100%)",
    backgroundPosition: "0 0 ,0 100%",
    backgroundSize: "100% 50%",
    backgroundRepeat: "no-repeat",
  },
};

const App = () => (
  <Layout>
    <LayoutItem>
      <LayoutTitle>Blur Down</LayoutTitle>
      <Img variant="blur-down" {...blurImg} />
    </LayoutItem>
  </Layout>
);

export default App;
