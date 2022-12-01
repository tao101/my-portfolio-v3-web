import getIcons from '../../utils/getIcons';

export default function SocialIcon({ name, url }) {
  let icon = getIcons(name);

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group relative inline-block h-12 w-12 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body rounded"
    >
      <span className="text-gray-300 relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded  transition-all duration-500 group-hover:-translate-y-full">
        {icon}
      </span>
      <span className=" bg-secondary-400 absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded  text-grey transition-all duration-500 group-hover:translate-y-0">
        {icon}
      </span>
    </a>
  );
}
