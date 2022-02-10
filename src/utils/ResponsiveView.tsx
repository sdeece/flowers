import * as React from 'react'
import type { ReactNode } from 'react'
import { useScrollAndResizeStore } from '../hooks/useScrollAndResizeStore'

interface IResponsiveViewProps {
  mobile: ReactNode,
  tablet: ReactNode,
  desktop: ReactNode,
  [key: string]: any,
}

const ResponsiveView = ({ mobile, tablet, desktop, ...otherProps }: IResponsiveViewProps) => {
  const { isMobile, isTablet, isDesktop } = useScrollAndResizeStore()

  let Component
  if (isMobile) Component = mobile
  if (isTablet) Component = tablet
  if (isDesktop) Component = desktop

  return (
    <Component {...otherProps} />
  )
}

export {
  ResponsiveView,
}