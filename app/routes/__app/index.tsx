import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
    return {
        title: 'Home | Dashboard',
    }
}

export default function IndexRoute() {
    return <div>Home</div>
}
