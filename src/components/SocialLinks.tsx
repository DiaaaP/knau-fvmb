import { socialLinks } from '../content/social'
import { socialIconPaths } from '../content/social-icons'

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div
      className={'social-links ' + className}
      role="group"
      aria-label="Социальные сети факультета"
    >
      {socialLinks.map((link) => (
        <a
          key={link.icon}
          className="social-link"
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label + ' (откроется в новой вкладке)'}
          title={link.title}
        >
          <svg
            width={20}
            height={20}
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
          >
            {socialIconPaths[link.icon].map((d, index) => (
              <path d={d} key={index} />
            ))}
          </svg>
        </a>
      ))}
    </div>
  )
}
