import React from 'react';
import { Helmet } from "react-helmet";

import ContactBanner from './components/ContactBanner';
import ContactInfo from './components/ContactInfo';
import ContactText from './components/ContactText';

export default function Contact() {
  return (
      <div>
        <Helmet>
        <title>Contact Us | Becky's Catering Kitchen</title>
        <meta
          name="description"
          content=""
        />
      </Helmet>

        <ContactBanner />
        <ContactText />
        <ContactInfo />
      </div>               
  );
}