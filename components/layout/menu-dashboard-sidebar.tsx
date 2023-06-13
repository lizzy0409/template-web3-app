'use client'

import { HTMLAttributes, ReactNode } from 'react'

import classNames from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { menuDashboard } from '@/config/menu-dashboard'

interface MenuDashboardSidebarProps {
  className?: string
}
export const MenuDashboardSidebar = ({ className }: MenuDashboardSidebarProps) => {
  const cx = classNames(className, 'flex flex-col gap-1', 'MenuDashboardSidebar')

  const pathname = usePathname()
  return (
    <div className={cx}>
      {menuDashboard.map((item) => {
        return (
          <Item key={item.href} currentPath={pathname} className="menu-item my-2" href={item.href}>
            <span className="text-lg">{item.label}</span>
          </Item>
        )
      })}
    </div>
  )
}

interface ItemProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  href: string
  currentPath: string | null
}

const Item = ({ children, href, currentPath, ...props }: ItemProps) => {
  const cx = classNames('menu-item my-2', 'MenuDashboardSidebar', {
    active: currentPath === href,
  })

  return (
    <Link className={cx} href={href} {...props}>
      {children}
    </Link>
  )
}
