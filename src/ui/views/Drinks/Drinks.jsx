import React from 'react';
import { Helmet } from "react-helmet";

import DrinksBanner from './components/DrinksBanner';
import DrinksBeverages from './components/DrinksBeverages';

export default function Drinks() {
  return (
      <div>
        <Helmet>
        <title>Beverages | Becky's Catering Kitchen</title>
        <meta
          name="description"
          content=""
        />
      </Helmet>
        
        <DrinksBanner />
        <DrinksBeverages />

      </div>               
  );
}