import type { LucideIcon } from 'lucide-react'
import { Bot, ChartNoAxesCombined, Code2, Megaphone, Orbit, Palette, Search, Settings2, Sparkles, Video, Workflow, Zap } from 'lucide-react'

export type Service = { title: string; description: string; icon: LucideIcon; tone: string }

export const services: Service[] = [
  { title: 'AI & Automation', description: 'AI assistants, workflow automation, CRM integrations, and intelligent business processes.', icon: Bot, tone: 'blue' },
  { title: 'Software & Digital Platforms', description: 'Websites, e-commerce, custom software, and connected digital systems.', icon: Code2, tone: 'violet' },
  { title: 'Digital Marketing & Advertising', description: 'Social media, SEO, Meta Ads, Google Ads, content strategy, and campaigns.', icon: Megaphone, tone: 'orange' },
  { title: 'Business Growth & Intelligence', description: 'Customer journeys, CRM, analytics, and connected systems for measurable growth.', icon: ChartNoAxesCombined, tone: 'green' },
]

export const growthServices = [
  ['Social Media Marketing', 'Strategy, content, management & growth.', Palette],
  ['Performance Advertising', 'Meta Ads, Google Ads, lead generation.', Zap],
  ['SEO & Content Marketing', 'Search, blogs, content strategy, organic traffic.', Search],
  ['Branding & Creative Design', 'Logo design, brand identity, graphics and creatives.', Sparkles],
  ['Website & E-commerce', 'Modern websites and online stores.', Code2],
  ['CRM & Automation', 'Lead tracking, WhatsApp automation and follow-ups.', Workflow],
  ['Analytics & Reporting', 'Data-driven insights for better decisions.', ChartNoAxesCombined],
  ['Video Production & Reels', 'Promotional videos, reels, and creative campaigns.', Video],
] as const

export const capabilities = [
  { title: 'AI assistants', description: 'Useful intelligence that helps teams move faster.', icon: Bot },
  { title: 'Connected workflows', description: 'Automation that removes repetitive handovers.', icon: Workflow },
  { title: 'Custom software', description: 'Tools designed around the way your business works.', icon: Code2 },
  { title: 'Integrations & analytics', description: 'A clearer view of what is happening and why.', icon: Settings2 },
] as const

export const industries = [
  { title: 'Business Technology', description: 'Digital systems, platforms, automation and growth solutions.', className: 'industry-business' },
  { title: 'Travel Technology', description: 'Connected experiences for travel and tourism businesses.', className: 'industry-travel' },
  { title: 'Film Technology', description: 'Technology for the filmmaking lifecycle and creative teams.', className: 'industry-film' },
] as const

export const processSteps = [
  ['01', 'Discover', 'Understand your business, customers, problems and goals.'],
  ['02', 'Design', 'Plan the right experience, system and solution.'],
  ['03', 'Build', 'Develop, create, integrate and implement.'],
  ['04', 'Evolve', 'Measure what matters, improve and support growth.'],
] as const

export const projects = [
  { title: 'Business Website', type: 'Websites', label: 'Placeholder / corporate experience', className: 'project-business' },
  { title: 'Travel Campaign', type: 'Marketing', label: 'Placeholder / creative campaign', className: 'project-travel' },
  { title: 'Brand Identity', type: 'Branding', label: 'Placeholder / visual system', className: 'project-branding' },
  { title: 'Digital Platform', type: 'Software', label: 'Placeholder / product interface', className: 'project-platform' },
  { title: 'Content Series', type: 'Creative', label: 'Placeholder / video and reels', className: 'project-content' },
  { title: 'Growth System', type: 'Marketing', label: 'Placeholder / marketing operations', className: 'project-growth' },
] as const

export const insights = [
  { category: 'AI & Systems', title: 'How intelligent systems can make everyday business simpler.', date: 'Future article', className: 'insight-ai' },
  { category: 'Digital Growth', title: 'Building visibility that connects to real business growth.', date: 'Future article', className: 'insight-growth' },
  { category: 'Travel Technology', title: 'Designing better connected experiences for travel businesses.', date: 'Future article', className: 'insight-travel' },
] as const

export const navItems = [
  ['Company', '/about'],
  ['Solutions', '/services'],
  ['Industries', '/industries'],
  ['Our Work', '/work'],
  ['Insights', '/insights'],
] as const
