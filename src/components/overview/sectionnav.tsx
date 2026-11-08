import { useState } from 'react'

const navItems = [
  {
    label: 'Learning tracks',
    href: '#learning-track',
  },
  {
    label: 'Learning formats',
    href: '#program-format',
  },
  {
    label: 'Your learning journey',
    href: '#learning-journey',
  },
  {
    label: 'Find a starting point',
    href: '#starting-point',
  },
]

function OverviewSectionNav() {
  const [activeHref, setActiveHref] = useState('#learning-track')

  return (
    <section className="mt-8 border-y border-[#DADCE0]">
      <nav
        aria-label="Overview section navigation"
        className="mx-auto max-w-[1280px]"
      >
        <ul className="flex flex-wrap items-center gap-x-12 gap-y-4 px-6 py-6 sm:px-10 lg:px-16">
          {navItems.map((item) => {
            const isActive = activeHref === item.href

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setActiveHref(item.href)}
                  className={`inline-flex items-center gap-3 text-[16px] ${
                    isActive
                      ? 'font-bold text-[#1967D2]'
                      : 'font-normal text-[#5F6368]'
                  }`}
                >
                  <span>{item.label}</span>

                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1967D2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </section>
  )
}

export default OverviewSectionNav