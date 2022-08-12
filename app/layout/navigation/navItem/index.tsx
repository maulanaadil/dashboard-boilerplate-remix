import type { NavItemProps } from './types'
import { sNavItem, sNavItemActive, sNavItemLogo, sNavItemName } from './styles'
import { cx } from '@emotion/css'
import { NavLink } from '@remix-run/react'
import { SubHead } from '~/typography'

export default function NavItem({ icon, name, link }: NavItemProps) {
    return (
        <NavLink
            to={link}
            className={({ isActive }) => {
                return cx(sNavItem, {
                    [sNavItemActive]: isActive,
                })
            }}
            prefetch='intent'
        >
            <div className={cx(sNavItemLogo)}>{icon}</div>
            <SubHead type='subhead8' className={sNavItemName}>
                {name}
            </SubHead>
        </NavLink>
    )
}
