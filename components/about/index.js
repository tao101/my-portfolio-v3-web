import Introduction from '../introduction';
import SectionTitle from '../sectionTitle';

export default function About({ homePage }) {
  const aboutTitle = homePage?.aboutTitle;
  const aboutSubtitle = homePage?.aboutSubtitle;
  return (
    <section
      id="about"
      className="min-h-screen mb-3 z-20 flex flex-col   justify-center items-center"
    >
      <SectionTitle title={aboutTitle} subTitle={aboutSubtitle} />
      <Introduction homePage={homePage} />
    </section>
  );
}
