import React from "react";
import { Helmet } from "react-helmet";

import HomeBanner from "./components/HomeBanner";
import HomeFourSquare from "./components/HomeFourSquare";
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
      <br>
      </br>
      <br></br>
      
    </main>
  );
}

export default Home;