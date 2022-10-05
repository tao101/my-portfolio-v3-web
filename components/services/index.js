import SectionTitle from '../sectionTitle';

export default function Services({ homePage }) {
  const title = homePage?.servicesTitle;
  const subtitle = homePage?.servicesSubtitle;

  return (
    <section
      id="services"
      className="mb-3 mt-24 z-20 flex flex-col   justify-center items-center"
    >
      <SectionTitle title={title} subTitle={subtitle} />
    </section>
  );
}
