import Link from 'next/link'
import style from "./Navbar.module.css";
import ActiveLink from './ActiveLink';

const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <>
      <nav className={style['menu-container']}>
        {
          menuItems?.map(({ href, text }) => (
            <ActiveLink key={href} href={href} text={text} />
          ))
        }
        {/* <ActiveLink href="/" text={'Home'} />
        <ActiveLink href="/about" text='About' />
        <ActiveLink href="/contact" text={'Contact'} />
        <ActiveLink href="/pricing" text={'Pricing'} /> */}
      </nav>
    </>
  )
}
