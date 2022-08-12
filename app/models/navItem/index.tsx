import type { NavItemProps } from '~/layout/navigation/navItem/types'

import { BalanceIcon, HomeIcon, ProfitIcon, TransactionIcon } from '~/assets'

export const NavItemData: NavItemProps[] = [
    {
        name: 'Home',
        icon: <HomeIcon />,
        link: '/',
    },
    {
        name: 'Profits',
        icon: <ProfitIcon />,
        link: '/profits',
    },
    {
        name: 'Balance',
        icon: <BalanceIcon />,
        link: '/balance',
    },
    {
        name: 'Transactions',
        icon: <TransactionIcon />,
        link: '/transactions',
    },
]
