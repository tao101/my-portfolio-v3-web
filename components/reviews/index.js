import SectionTitle from '../sectionTitle';

export default function Reviews({ homePage }) {
  return (
    <section
      id="reviews"
      className="mb-3  mt-24 z-20 flex flex-col   justify-center items-center "
    >
      <SectionTitle title="CLIENT REVIEWS" subTitle="REVIEWS" />
      <div className="w-full flex flex-col  lg:flex-row justify-between items-stretch  gap-7 pt-2 lg:pt-14"></div>
    </section>
  );
}
