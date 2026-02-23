import './global.css';
import { Space_Mono, JetBrains_Mono } from 'next/font/google';
import { NoiseOverlay, ScanLines, Nav } from '@personal-website/shared-ui';
import { MotionConfigProvider } from './motion-config-provider';

const navItems = [
  { label: 'Experience', href: '/experience', decorator: '//' },
  { label: 'Projects', href: '/projects', decorator: '>' },
  { label: 'Education', href: '/education', decorator: '$' },
  { label: 'Media', href: '/media', decorator: '~' },
];

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Ryan Norman | Engineering Leader & Principal Engineer',
    template: '%s | Ryan Norman',
  },
  description:
    'Engineering leader with 15+ years of experience in healthcare technology, from hands-on development to directing 50+ engineers.',
  openGraph: {
    title: 'Ryan Norman | Engineering Leader & Principal Engineer',
    description:
      'Engineering leader with 15+ years of experience in healthcare technology.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <MotionConfigProvider>
          <a href="#main-content" className="sr-only">
            Skip to main content
          </a>
          <Nav items={navItems} />
          {children}
          <NoiseOverlay />
          <ScanLines animated />
        </MotionConfigProvider>
      </body>
    </html>
  );
}
