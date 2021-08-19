import React, { useContext, useEffect } from "react";
// import HomeBanner from "./components/HomeBanner";
import { Helmet } from "react-helmet";

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
      {/* <HomeBanner /> */}
      
      {/* <LocationComp /> */}
    </main>
  );
}

export default Home;