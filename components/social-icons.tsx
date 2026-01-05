import Link from 'next/link';

const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/thevenincloud',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.9 2H22l-6.8 7.78L23 22h-6.9l-5.4-7.1L4.5 22H2l7.4-8.48L1 2h7.1l4.9 6.4L18.9 2Zm-1.3 18h1.7L7.2 3.9H5.3L17.6 20Z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/thevenincloud',
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.41-.77 1.36-1.5 2.5-1.5 1.93 0 3.5 1.57 3.5 3.5v6.5z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/thevenincloud',
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.05.138 3.003.404 2.29-1.552 3.295-1.23 3.295-1.23.654 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.624-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

export default function SocialIcons() {
  return (
    <div className="flex space-x-4 mt-4">
      {socialLinks.map((social) => (
        <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="text-muted-foreground hover:text-foreground transition-colors">
          {social.icon}
        </Link>
      ))}
    </div>
  );
}
