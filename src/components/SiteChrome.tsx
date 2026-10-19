import { useState } from 'react'
import type { MouseEventHandler, ReactNode } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { navItems } from '../data/site'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Aethron Technologies home">
      <span className={`logo-mark ${light ? 'logo-mark-light' : ''}`} aria-hidden="true"><span /></span>
      <span className="leading-none"><strong className={`block text-[17px] tracking-[-0.05em] ${light ? 'text-white' : 'text-navy'}`}>AETHRON</strong><small className={`mt-1 block text-[7px] font-bold tracking-[0.2em] ${light ? 'text-white/60' : 'text-ink/50'}`}>TECHNOLOGIES PVT. LTD.</small></span>
    </Link>
  )
}

export function Button({ children, to, href, variant = 'primary', className = '', onClick }: { children: ReactNode; to?: string; href?: string; variant?: 'primary' | 'secondary' | 'light'; className?: string; onClick?: MouseEventHandler<HTMLAnchorElement> }) {
  const classes = `button button-${variant} ${className}`
  if (href) return <a href={href} className={classes} onClick={onClick}>{children}<ArrowUpRight size={16} /></a>
  return <Link to={to ?? '/contact'} className={classes} onClick={onClick}>{children}<ArrowUpRight size={16} /></Link>
}

export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <div className="container header-inner">
      <Logo />
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, path]) => <NavLink key={path} to={path} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}
      </nav>
      <Button to="/contact" className="header-cta">Start a Project</Button>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="mobile-nav container" aria-label="Mobile navigation">
      {navItems.map(([label, path]) => <NavLink key={path} to={path} onClick={() => setOpen(false)}>{label}</NavLink>)}
      <Button to="/contact" onClick={() => setOpen(false)}>Start a Project</Button>
    </nav>}
  </header>
}

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div><Logo light /><p className="footer-note">Building intelligent systems, digital experiences and growth solutions for what’s next.</p></div>
      <div><p className="footer-label">Explore</p><Link to="/about">About Aethron</Link><Link to="/services">Solutions</Link><Link to="/work">Our Work</Link><Link to="/insights">Insights</Link></div>
      <div><p className="footer-label">Capabilities</p><Link to="/services">AI & Automation</Link><Link to="/services">Digital Growth</Link><Link to="/services">Software & Platforms</Link><Link to="/industries">Industries</Link></div>
      <div><p className="footer-label">Get in touch</p><a href="mailto:hello@aethron.co.in">hello@aethron.co.in</a><a href="tel:+918089123369">+91 8089123369</a><a href="https://wa.me/918089123369" target="_blank" rel="noreferrer">WhatsApp</a><p className="footer-location">India · Working globally</p></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Aethron Technologies Private Limited.</span><span><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link></span></div>
  </footer>
}

export function Layout({ children }: { children: React.ReactNode }) { return <><Header />{children}<Footer /></> }

export function SectionHeading({ eyebrow, title, body, align = 'left' }: { eyebrow: string; title: React.ReactNode; body?: string; align?: 'left' | 'center' }) {
  return <div className={`section-heading ${align === 'center' ? 'section-heading-center' : ''}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{body && <p className="section-body">{body}</p>}</div>
}

export function ArrowLink({ children, to = '/contact' }: { children: React.ReactNode; to?: string }) { return <Link className="arrow-link" to={to}>{children}<ArrowUpRight size={16} /></Link> }
