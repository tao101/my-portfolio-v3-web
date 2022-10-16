export default function EducationalQualification({ homePage }) {
  let title = homePage?.educationalQualificationsTitle;
  let educationalQualifications = homePage?.educationalQualifications;
  return (
    <div className="flex-1">
      <h4 className="flex items-center gap-4 mb-3 font-semibold	antialiased text-2xl text-white ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-secondary-400"
        >
          <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
        </svg>
        {title}
      </h4>
      <div>
        {educationalQualifications?.map((educationalQualification) => {
          return (
            <div className="relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
              <span className="absolute top-0 text-[#bfbecb] left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-secondary-400 bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">
                {educationalQualification?.year}
              </span>
              <div className="relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6">
                <span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
                  <span className="absolute left-0 top-6 z-20 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-main-900"></span>
                  <span className="absolute left-0 right-full top-6 z-10 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2"></span>
                </span>
                <h5 className="mb-0 text-secondary-400 text-lg font-medium	antialiased">
                  {educationalQualification?.title}
                </h5>
                <p className="mb-2 text-white  font-normal text-base		">
                  {educationalQualification?.subtitle}
                </p>
                <p className="text-[#bfbecb]">
                  {educationalQualification?.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
