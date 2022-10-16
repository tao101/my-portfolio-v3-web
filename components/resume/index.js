import SectionTitle from '../sectionTitle';
import EducationalQualification from './educationalQualification';
import WorkingExperience from './workingExperience';

export default function Resume({ homePage }) {
  return (
    <section
      id="resume"
      className="min-h-screen mt-12 mb-3 z-20 flex flex-col  justify-center items-center"
    >
      <SectionTitle title="MY RESUME" subTitle="RESUME" />
      <div className="mb-3  pt-2 lg:pt-14 flex flex-col lg:flex-row w-full justify-center  gap-7  overflow-hidden margin-auto  ">
        <EducationalQualification homePage={homePage} />
        <WorkingExperience homePage={homePage} />
      </div>
    </section>
  );
}
