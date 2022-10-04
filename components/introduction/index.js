import { urlFor } from '../../lib/sanity';

export default function Introduction({ homePage }) {
  const languages = homePage?.languages;
  const address = homePage?.address;
  const freelance = homePage?.freelance;
  const resumeLink = homePage?.resumeLink;
  const aboutImageAlt = homePage?.aboutImage?.alt;
  const aboutImage = homePage?.aboutImage?.image;
  return (
    <div className="pt-7 lg:pt-14 flex flex-col lg:flex-row w-full justify-center items-center gap-7  overflow-hidden margin-auto  ">
      <div className="flex-1 lg:flex lg:justify-end rounded-lg border-8 border-secondary-400 border-opacity-20 lg:mr-4 w-full md:w-3/5  mx-auto lg:w-4/5  ">
        <img
          className="lg:object-cover w-full "
          src={urlFor(aboutImage)}
          alt={aboutImageAlt}
        />
      </div>
      <div className="flex-1 flex flex-col bg-red-900">
        <h3
          className="text-white antialiased font-semibold	"
          style={{ fontSize: 26 }}
        >
          Hi, I am <span className="text-secondary-400">Taoufiq Lotfi</span>
        </h3>
        <ul className="list-disc pl-6	">
          <li className=" text-secondary-400 antialiased text-lg font-normal">
            <span className=" text-[#bfbecb] inline-block min-w-[120px] font-medium">
              First Name
            </span>
            <span className="text-[#bfbecb] font-medium"> {': '} Taoufiq</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
