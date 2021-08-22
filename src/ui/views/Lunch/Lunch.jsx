import React from 'react';
import { Helmet } from "react-helmet";
import Services from '../Repeat/Services';

import LunchBanner from './components/LunchBanner';
import LunchCall from './components/LunchCall';
import LunchDesserts from './components/LunchDessert';
import LunchPatter from './components/LunchPlatters';
import LunchSalad from './components/LunchSalad';
import LunchSand from './components/LunchSand';
import LunchSide from './components/LunchSide';
import LunchSoup from './components/LunchSoup';
import LunchText from './components/LunchText';

export default function Lunch() {
  return (
      <div>
        <Helmet>
        <title>Becky's Catering Kitchen | Lunch Menu</title>
        <meta
          name="description"
          content=""
        />
      </Helmet>

        <LunchBanner />   
        <LunchText />
        <LunchSoup />
        <LunchSalad />
        <LunchSand />
        <LunchPatter />
        <LunchSide />
        <LunchCall />
        <LunchDesserts />
        <Services />
      </div>               
  );
}