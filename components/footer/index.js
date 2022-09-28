import SocialIcons from '../socialIcons';

export default function Footer({ settings }) {
  return (
    <footer className="h-20 z-20 flex items-center justify-around">
      <SocialIcons settings={settings} />
      <p>Footer</p>
    </footer>
  );
}
