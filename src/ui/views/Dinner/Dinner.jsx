import React from 'react';
import { Helmet } from "react-helmet";

import DinnerBanner from "./components/DinnerBanner";
import DinnerBuffet from './components/DinnerBuffet';
import DinnerMain from './components/DinnerMain';
import DinnerPotato from './components/DinnerPotato';
import DinnerSide from './components/DinnerSide';
import DinnerText from "./components/DinnerText";
import Soup from '../Repeat/Soup';
import Salad from '../Repeat/Salad';
import DinnerDessert from './components/DinnerDessert';

export default function Dinner() {
  return (
      <div>
        <Helmet>
        <title>Dinner Menu | Becky's Catering Kitchen</title>
        <meta
          name="description"
          content=""
        />
        </Helmet>

        <DinnerBanner />
        <DinnerText />
        <DinnerBuffet />
        <DinnerMain />
        <DinnerSide />
        <DinnerPotato />
        <Soup />
        <Salad />
        <DinnerDessert />

      </div>               
  );
}