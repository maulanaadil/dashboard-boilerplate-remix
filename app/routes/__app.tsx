import { Heading } from '~/typography'
import { Outlet } from '@remix-run/react'

export default function AppRoute() {
    return (
        <div className={``}>
            <Heading type='h1'>Navigation + header + footer here</Heading>
            <Outlet />
        </div>
    )
}
