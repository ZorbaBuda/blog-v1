import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
// import Logo from '@/public/logo.svg'
import MobileNav from './MobileNav'
import Link from 'next/link'
// import ThemeSwitch from './ThemeSwitch'

function Header()  {
  return (
    <header className="fixed w-full z-0 top-0 bg-[#161616] ">
      <div className='flex  justify-between py-7 uppercase tracking-widest
    mx-auto max-w-[1350px]  sm:px-6 xl:max-w-[1350px] xl:px-0'>
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              {/* <Logo /> */}
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-xl  font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
       
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden sm:block font-medium text-gray-900 dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
        {/* <SearchButton /> */}
        {/* <ThemeSwitch /> */}
        <MobileNav />
      </div>
      </div>
    </header>
  )
}

export default Header
