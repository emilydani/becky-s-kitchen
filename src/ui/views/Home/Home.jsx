import React from "react";
import { Helmet } from "react-helmet";

import HomeBanner from "./components/HomeBanner";
import HomeCall from "./components/HomeCall";
import HomeFourSquare from "./components/HomeFourSquare";
import HomeReviews from "./components/HomeReviews";
import HomeText from "./components/HomeText";

function Home(props) {

  return (
    
    <main className="home">
      <Helmet>
        <title>Becky's Catering Kitchen</title>
        <meta
          name="description"
          content=""
        />
      </Helmet>
      
      <HomeBanner />
      <HomeText />
      <HomeFourSquare />
      <HomeCall />
      <HomeReviews />
      <br>
      </br>
      <br></br>
      
    </main>
  );
}

export default Home;