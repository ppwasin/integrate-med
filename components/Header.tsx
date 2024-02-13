import React from "react"

export default function Header() {
  return (
    <header className="relative flex flex-row justify-center bg-gray-100 shadow">
      <div className="flex w-[42rem] items-center justify-between sm:justify-start bg-gray-100 flex-row sm:space-x-6 pr-2 sm:pr-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="m-3 size-8 sm:size-12 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>

        <div className="hidden flex-col sm:flex sm:flex-row">
          <HeaderMenu>Home</HeaderMenu>
          <HeaderMenu>Specials</HeaderMenu>
          <HeaderMenu>Contact</HeaderMenu>
          <HeaderMenu>Site Map</HeaderMenu>
          <HeaderMenu>Brands</HeaderMenu>
          <HeaderMenu>Blogs</HeaderMenu>
        </div>

        <button className="p-2 sm:hidden hover:bg-gray-200 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <button className="animate-bounce absolute -bottom-5 right-8 rounded-full bg-emerald-500 p-2 text-gray-50 shadow-lg hover:bg-emerald-400 active:bg-emerald-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </header>
  )
}

function HeaderMenu({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <button className="hover:animate-pulse px-4 py-3 text-sm uppercase text-gray-800 hover:text-emerald-500 md:text-base">
      {children}
    </button>
  )
}
