import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react'
import { AnimatePresence } from 'framer-motion'

export default function App() {
    console.log('test')

    return (
        <html lang='en'>
            <head>
                <Meta />
                <Links />
                {typeof document === 'undefined' ? '__STYLES__' : null}
            </head>
            <body>
                <AnimatePresence exitBeforeEnter>
                    <Outlet />
                </AnimatePresence>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}
