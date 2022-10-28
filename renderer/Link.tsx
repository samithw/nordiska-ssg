import React from 'react'
import { usePageContext } from './usePageContext'

export { Link }

function Link(props: { href: string; className?: string; children: React.ReactNode }) {
  const pageContext = usePageContext()
  const linkHref = removeTrailingSlash(props.href)
  const isActive = (props.href != "/" && pageContext.urlPathname.includes(linkHref)) || pageContext.urlPathname === props.href
  const className = [props.className, isActive && 'active'].filter(Boolean).join(' ')
  return <a {...props} className={className} />
}

function removeTrailingSlash(str: string) {
  return str.replace(/\/+$/, '');
}
