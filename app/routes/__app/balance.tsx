import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
    return {
        title: 'Balance | Dashboard',
    }
}

export default function Balance() {
    return <div>Balance</div>
}
