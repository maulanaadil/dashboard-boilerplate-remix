import type { HTMLAttributes } from 'react'

export type HeaderProps = {
    title: string
    subtitle: string
    username: string
} & HTMLAttributes<HTMLDivElement>
