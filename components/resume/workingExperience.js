export default function WorkingExperience({ homePage }) {
  let title = homePage?.workingExperiencesTitle;
  let workingExperiences = homePage?.workingExperiences;
  return (
    <div className="flex-1">
      <h4 className="flex items-center gap-4 mb-3 font-semibold	antialiased text-2xl text-white ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-secondary-400 "
        >
          <path
            fillRule="evenodd"
            d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
          <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
        </svg>

        {title}
      </h4>
      <div className="pl-2.5 md:pl-0 ">
        {workingExperiences?.map((workingExperience) => {
          return (
            <div
              key={workingExperience?._key}
              className="relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex"
            >
              <span className="absolute top-0 text-[#bfbecb] left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-secondary-400 bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">
                {workingExperience?.year}
              </span>
              <div className="relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6">
                <span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
                  <span className="absolute left-0 top-6 z-20 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-main-900"></span>
                  <span className="absolute left-0 right-full top-6 z-10 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2"></span>
                </span>
                <h5 className="mb-0 text-secondary-400 text-lg font-medium	antialiased">
                  {workingExperience?.title}
                </h5>
                <p className="mb-2 text-white  font-normal text-base		">
                  {workingExperience?.subtitle}
                </p>
                <p className="text-[#bfbecb]">
                  {workingExperience?.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
