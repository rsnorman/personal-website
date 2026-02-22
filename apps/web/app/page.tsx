import { bio, socialLinks } from '@personal-website/shared-util';
import { HeroBio } from './components/hero-bio';

export default function LandingPage() {
  return (
    <main id="main-content">
      <HeroBio bio={bio} socialLinks={socialLinks} />
    </main>
  );
}
