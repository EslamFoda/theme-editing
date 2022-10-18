import cn from 'clsx'
import React, { FC } from 'react'

interface ContainerProps {
  className?: string
  children?: any
  el?: HTMLElement
  clean?: boolean
  style?:any
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  el = 'div',
  style = {},
  clean = false, // Full Width Screen
}) => {
  const rootClassName = cn(className, {
    'mx-auto max-w-6xl px-6 w-full': !clean,
  })

  let Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> =
    el as any

  return <Component style={style} className={rootClassName}>{children}</Component>
}

export default Container