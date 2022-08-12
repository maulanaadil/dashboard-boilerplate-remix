import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
    return {
        title: 'Profits | Dashboard',
    }
}

export default function Profits() {
    return <div>profits</div>
}
