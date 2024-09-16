import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname()

  const links = [
    {
      icon: '/getStarted.svg',
      name: 'Getting Started',
      route: '#',
    },
    {
      icon: '/overview.svg',
      name: 'Overview',
      route: '#',
    },
    {
      icon: '/getStarted.svg',
      name: 'Accounts',
    },
    {
      icon: '/invoice.svg',
      name: 'Invoice',
      route: '/',
    },
    {
      icon: '/beneficiary.svg',
      name: 'Beneficiary Management',
      route: '#',
    },
    {
      icon: '/help.svg',
      name: 'Help Center',
      route: '#',
    },
    {
      icon: '/setting.svg',
      name: 'Settings',
      route: '#',
    },
  ]

  return (
    <div className=" text-[#697598] flex  justify-center  font-neueLight fixed  w-2/12 bg-white mr-[16rem]">
      <div className="space-y-4 pt-20 ">
        {links.map((l) => {
          const isActive = pathname === `${l.route}`
          return (
            <Link
              href={'#'}
              key={l.name}
              className={`flex items-center space-x-4 text-[14px]  p-3 ${
                isActive ? 'rounded-[28px] border-[#F8F8FB]  border-[7px]' : ''
              }`}
            >
              <Image src={l.icon} width={20} height={20} alt="icons" />
              <span className=" tracking-wider">{l.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
