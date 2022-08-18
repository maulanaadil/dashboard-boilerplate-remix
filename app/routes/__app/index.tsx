import type { MetaFunction } from '@remix-run/node'
import { HomeModule } from '~/modules'

export const meta: MetaFunction = () => {
    return {
        title: 'Home | Dashboard',
    }
}

export default function IndexRoute() {
    return <HomeModule />
}
