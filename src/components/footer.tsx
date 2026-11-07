import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getNavigation } from '../api'

import identity from '../assets/GDGoC-identity.png'
import brandSignature from '../assets/brandsignature.png'
import instaIcon from '../assets/insta.png'
import youtubeIcon from '../assets/youtube.png'

function Footer() {
  const { data: navigation, isPending, isError } = useQuery({
    queryKey: ['navigation'],
    queryFn: getNavigation,
  })

  return (
    <footer className="mt-20 bg-[#F1F3F4]">
      <div className="mx-auto max-w-[1280px] px-6 pb-8 sm:px-10 lg:px-16">
        {/* TOP AREA */}
        <div className="grid grid-cols-1 gap-12 py-12 md:grid-cols-[minmax(0,1.5fr)_minmax(0,0.7fr)_minmax(0,0.9fr)]">
          {/* LEFT */}
          <div>
            <img
              src={identity}
              alt="Google Developer Groups on Campus Universitas Gadjah Mada"
              className="h-auto w-[360px] max-w-full"
            />

            <p className="mt-6 max-w-[420px] text-[16px] leading-[1.6] text-[#5F6368]">
              A student community for curious minds, shared learning, and
              technology with purpose.
            </p>
          </div>

          {/* MIDDLE */}
          <div>
            <h3 className="text-[16px] font-bold text-[#000000]">
              Explore
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              {isPending && (
                <p className="text-[16px] text-[#5F6368]">Loading...</p>
              )}

              {isError && (
                <p className="text-[16px] text-[#5F6368]">
                  Navigation unavailable
                </p>
              )}

              {navigation?.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-[16px] text-[#5F6368] transition hover:text-[#1967D2]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-[16px] font-bold text-[#000000]">
              Keep in the loop
            </h3>

            <a
              href="https://www.instagram.com/gdgoc.ugm"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-[16px] font-medium text-[#1967D2] hover:underline"
            >
              @gdgoc.ugm
            </a>

            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://www.instagram.com/gdgoc.ugm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instaIcon}
                  alt="Instagram"
                  className="h-6 w-6 object-contain"
                />
              </a>

              <a
                href="https://www.youtube.com/@gdgocugm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={youtubeIcon}
                  alt="YouTube"
                  className="h-6 w-6 object-contain"
                />
              </a>
            </div>

            <p className="mt-5 text-[16px] leading-[1.6] text-[#5F6368]">
              Learn together. Build together.
            </p>
          </div>
        </div>

        {/* HORIZONTAL LINE */}
        <div className="border-t border-[#DADCE0]" />

        {/* BOTTOM AREA */}
        <div className="flex flex-col gap-6 py-10 md:flex-row md:items-start md:justify-between">
          {/* BOTTOM LEFT */}
          <div>
            <p className="text-[14px] text-[#5F6368]">
              © GDGoC Universitas Gadjah Mada • 2026/2027
            </p>

            <img
              src={brandSignature}
              alt="Brand signature"
              className="mt-8 h-auto w-[156px]"
            />
          </div>

          {/* BOTTOM RIGHT */}
          <p className="text-[14px] text-[#5F6368] md:pt-1">
            Made for the campus. Open to possibilities.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer