export const siteName = 'Jide Lambo'

export const siteUrl = 'https://jidelambo.com'

export const siteAuthor = 'Jide Lambo'

export const siteXHandle = 'JideLambo'

export const xDiscussUrl = (pageUrl: string) =>
  `https://x.com/intent/tweet?${new URLSearchParams({
    text: `${pageUrl} @${siteXHandle}`,
  })}`

export const siteTagline = 'Software designer who builds products.'

export const siteDescription =
  'Jide Lambo. Software designer who builds products.'

export type NavItem = {
  external?: boolean
  href: string
  label: string
}

export const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/writing', label: 'Writing' },
]

export const socialLinks: NavItem[] = [
  { external: true, href: 'https://x.com/JideLambo', label: 'X' },
  {
    external: true,
    href: 'https://www.linkedin.com/in/jidelambo/',
    label: 'LinkedIn',
  },
  { external: true, href: 'https://github.com/JideLambo', label: 'GitHub' },
]
