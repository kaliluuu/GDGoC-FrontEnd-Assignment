import { NavLink } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getNavigation } from '../api'
import logo from '../assets/GDGoC-identity.png'

function Header() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['navigation'],
    queryFn: getNavigation,
  })

  return (
    <header className="w-full border-b-2 border-[#F1F3F4] bg-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-14 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Google Developer Groups on Campus Universitas Gadjah Mada"
            className="h-10 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-3">
            {isPending && (
              <li className="text-sm text-[#5F6368]">Loading...</li>
            )}

            {isError && (
              <li className="text-sm text-red-500">
                Failed to load navigation
              </li>
            )}

            {data?.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    [
                      'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-[#EAF2FF] text-[#1967D2]'
                        : 'text-[#5F6368] hover:text-[#1967D2]',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action button */}
        <div>
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-[#4284F4] px-5 py-3 text-sm font-medium text-[#FFFFFF] transition hover:opacity-90"
          >
            <span>Find your track</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header