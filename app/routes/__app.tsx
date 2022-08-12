import { Outlet } from '@remix-run/react'
import PageWrapper from '~/layout/pagewrapper'

export default function AppRoute() {
    return (
        <PageWrapper>
            <Outlet />
        </PageWrapper>
    )
}
