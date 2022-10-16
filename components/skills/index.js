import SectionTitle from '../sectionTitle';
import SkillBox from './skillbox';
import SkillRow from './skillRow';

export default function Skills({ homePage }) {
  const title = homePage?.skillsTitle;
  const subtitle = homePage?.skillsSubtitle;
  const firstSkillTitle = homePage?.firstSkillTitle;
  const firstSkillPercentage = homePage?.firstSkillPercentage;
  const secondSkillTitle = homePage?.secondSkillTitle;
  const secondSkillPercentage = homePage?.secondSkillPercentage;
  const thirdSkillTitle = homePage?.thirdSkillTitle;
  const thirdSkillPercentage = homePage?.thirdSkillPercentage;
  const fourthSkillTitle = homePage?.fourthSkillTitle;
  const fourthSkillPercentage = homePage?.fourthSkillPercentage;
  const skills = homePage?.skills;

  return (
    <section
      id="skills"
      className=" mb-3 mt-12 z-20 flex flex-col   justify-center items-center"
    >
      <SectionTitle title={title} subTitle={subtitle} />
      <div className="flex-1 flex flex-col w-full gap-7 pt-2 lg:pt-14">
        <div className="flex gap-7 max-w-screen flex-wrap justify-center">
          <SkillBox title={firstSkillTitle} percentage={firstSkillPercentage} />
          <SkillBox
            title={secondSkillTitle}
            percentage={secondSkillPercentage}
          />
          <SkillBox title={thirdSkillTitle} percentage={thirdSkillPercentage} />
          <SkillBox
            title={fourthSkillTitle}
            percentage={fourthSkillPercentage}
          />
        </div>
        <div className="flex-1 flex flex-wrap gap-7 max-w-screen md:px-16 lg:px-0">
          {skills?.map((skill) => {
            return (
              <SkillRow
                key={skill?._key}
                title={skill?.skillTitle}
                percentage={skill?.skillPercentage}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
