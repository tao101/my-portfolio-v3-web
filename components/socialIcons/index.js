import SocialIcon from './socialIcon';

export default function SocialIcons({ settings }) {
  let facebookUrl = settings?.facebook ?? '';
  let instagramUrl = settings?.instagram ?? '';
  let githubUrl = settings?.github ?? '';
  let linkedinUrl = settings?.linkedin ?? '';
  let telegramUrl = settings?.telegram ?? '';

  return (
    <div className="flex gap-4 ">
      <SocialIcon name="facebook" url={facebookUrl} />
      <SocialIcon name="instagram" url={instagramUrl} />
      <SocialIcon name="github" url={githubUrl} />
      <SocialIcon name="linkedin" url={linkedinUrl} />
      <SocialIcon name="telegram" url={telegramUrl} />
    </div>
  );
}
