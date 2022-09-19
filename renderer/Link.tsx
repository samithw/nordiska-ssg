import React from 'react'
import { usePageContext } from './usePageContext'

export { Link }

function Link(props: { href: string; className?: string; children: React.ReactNode }) {
  const pageContext = usePageContext()
  const isActive = (props.href != "/" && pageContext.urlPathname.includes(props.href)) || pageContext.urlPathname === props.href
  const className = [props.className, isActive && 'active'].filter(Boolean).join(' ')
  return <a {...props} className={className} />
}
