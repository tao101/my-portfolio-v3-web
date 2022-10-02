import SocialIcon from './socialIcon';
import { motion, AnimatePresence } from 'framer-motion';

export default function SocialIcons({ settings }) {
  let facebookUrl = settings?.facebook ?? '';
  let instagramUrl = settings?.instagram ?? '';
  let githubUrl = settings?.github ?? '';
  let linkedinUrl = settings?.linkedin ?? '';
  let telegramUrl = settings?.telegram ?? '';

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: '100%',
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
        delay: 0.5,
      }}
      className="flex gap-4 "
    >
      <SocialIcon name="facebook" url={facebookUrl} />
      <SocialIcon name="instagram" url={instagramUrl} />
      <SocialIcon name="github" url={githubUrl} />
      <SocialIcon name="linkedin" url={linkedinUrl} />
      <SocialIcon name="telegram" url={telegramUrl} />
    </motion.div>
  );
}
