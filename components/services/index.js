import Link from 'next/link';
import SectionTitle from '../sectionTitle';
import ServiceBox from './serviceBox';

export default function Services({ homePage }) {
  const title = homePage?.servicesTitle;
  const subtitle = homePage?.servicesSubtitle;
  const services = homePage?.services;

  return (
    <section
      id="services"
      className="mb-3  mt-24 z-20 flex flex-col   justify-center items-center "
    >
      <SectionTitle title={title} subTitle={subtitle} />
      <div className="w-full flex flex-col  lg:flex-row justify-between items-stretch  gap-7 pt-2 lg:pt-14">
        {services?.map((service, index) => {
          return (
            <ServiceBox key={service?._key} item={service} index={index} />
          );
        })}
      </div>
    </section>
  );
}
