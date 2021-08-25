import React from 'react';
import { Helmet } from "react-helmet";

import RecepBanner from './components/RecepBanner';
import RecepFruit from './components/RecepFruit';
import RecepSavory from './components/RecepSavory';
import RecepText from './components/RecepText';

export default function Receptions() {
  return (
      <div>
        <Helmet>
        <title>Reception Food | Becky's Catering Kitchen</title>
        <meta
          name="description"
          content=""
        />
      </Helmet>

        <RecepBanner />
        <RecepText />
        <RecepSavory />
        <RecepFruit />

      </div>               
  );
}