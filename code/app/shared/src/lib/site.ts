export const siteName = 'Jide Lambo'

export const siteUrl = 'https://jidelambo.com'

export const siteAuthor = 'Jide Lambo'

export const siteXHandle = 'JideLambo'

export const xDiscussUrl = (pageUrl: string) =>
  `https://x.com/intent/tweet?${new URLSearchParams({
    text: `${pageUrl} @${siteXHandle}`,
  })}`

export const siteTagline =
  'Product design engineer. I design and build products across software experiences.'

export const aboutLead =
  'Career: Wonderstand, TokiApp, Nordcloud, BCaster, GTBank.'

export const siteDescription =
  'Jide Lambo. Product design engineer. I design and build products across software experiences.'

export const firstDistroUrl = 'https://firstdistro.com'

export const useLayUrl = 'https://uselay.com'

export const sinchUrl = 'https://sinch.com'

export const siteEmail = 'jide@firstdistro.com'

export type NavItem = {
  external?: boolean
  href: string
  label: string
}

export const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
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

export type SocialLabel = 'X' | 'LinkedIn' | 'GitHub'

export const getSocialLink = (label: SocialLabel): NavItem => {
  const link = socialLinks.find(item => item.label === label)
  if (!link) {
    throw new Error(`Missing social link: ${label}`)
  }
  return link
}
