import SectionTitle from '../sectionTitle';

export default function Skills({ homePage }) {
  const title = homePage?.aboutTitle;
  const subtitle = homePage?.aboutSubtitle;
  return (
    <section
      id="skills"
      className="min-h-screen mb-3 z-20 flex flex-col   justify-center items-center"
    >
      <SectionTitle title={title} subTitle={subtitle} />
    </section>
  );
}
