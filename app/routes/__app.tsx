import { Outlet } from '@remix-run/react'
import { Header } from '~/layout'

export default function AppRoute() {
    return (
        <>
            <Header title='Home' subtitle='This is Homepage' />
            <Outlet />
        </>
    )
}
