import React from 'react';
import { Helmet } from "react-helmet";

import CakeBanner from './components/CakeBanner';
import CakeBites from './components/CakeBites';
import CakeCakes from './components/CakeCakes';
import CakeText from './components/CakeText';

export default function Cheesecake() {
  return (
      <div>
        <Helmet>
        <title>Cheesecakes | Becky's Catering Kitchen</title>
        <meta
          name="description"
          content=""
        />
      </Helmet>

        <CakeBanner />
        <CakeText />
        <CakeCakes />
        <CakeBites />
      </div>               
  );
}