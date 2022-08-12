import type { HTMLAttributes } from 'react'

export type HeaderProps = {
    title: string
    subtitle: string
} & HTMLAttributes<HTMLDivElement>
