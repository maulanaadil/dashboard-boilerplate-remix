import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
    return {
        title: 'Transactions | Dashboard',
    }
}

export default function Transactions() {
    return <div>transactions</div>
}
