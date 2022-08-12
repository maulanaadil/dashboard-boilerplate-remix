import { SubHead } from '~/typography'
import FullFakeBooksLogo from './logo'
import NavItem from './navItem'
import {
    sNavigation,
    sNavigationContent,
    sNavigationHeader,
    sNavigationRoutes,
    sNavigationFooter,
    sNavigationFooterText,
} from './styles'

import { NavItemData } from '~/models'

export default function Navigation() {
    return (
        <div className={sNavigation}>
            <div className={sNavigationHeader}>
                <FullFakeBooksLogo />
            </div>

            <div className={sNavigationContent}>
                <div className={sNavigationRoutes}>
                    {NavItemData.map(({ name, icon, link }) => (
                        <NavItem
                            key={name}
                            link={link}
                            name={name}
                            icon={icon}
                        />
                    ))}
                </div>
            </div>
            <div className={sNavigationFooter}>
                <SubHead type='subhead8' className={sNavigationFooterText}>
                    FakeBooks &copy; 2022
                </SubHead>
            </div>
        </div>
    )
}
