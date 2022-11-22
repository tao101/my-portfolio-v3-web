import { useState } from 'react';
import SectionTitle from '../sectionTitle';

export default function Contact({ settings }) {
  //console.log('categories ', categories);

  return (
    <section
      id="contact"
      className="mt-12 mb-12 z-20 flex flex-col  justify-center items-center  "
    >
      <SectionTitle title="CONTACT US" subTitle="CONTACT" />
      <div className="w-full flex-wrap flex flex-row justify-center gap-x-8 gap-y-8  lg:items-stretch pt-6 lg:pt-14">
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
