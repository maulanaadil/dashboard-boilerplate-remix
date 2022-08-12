import { SubHead } from '~/typography'
import {
    sFakeBooksLogo,
    sFakeBooksLogoContainer,
    sFakeBooksLogoText,
} from './styles'

export default function FullFakeBooksLogo() {
    return (
        <div className={sFakeBooksLogoContainer}>
            <FakeBooksLogo className={sFakeBooksLogo} />
            <div>
                <SubHead type='subhead6' className={sFakeBooksLogoText}>
                    FakeBooks
                </SubHead>
            </div>
        </div>
    )
}

function FakeBooksLogo({ className }: { className: string }) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className={className}
        >
            <path
                fill='#23BF1F'
                fillRule='evenodd'
                d='M12 3a9 9 0 000 18h4.5c1.398 0 2.097 0 2.648-.228a3 3 0 001.624-1.624C21 18.597 21 17.898 21 16.5V12a9 9 0 00-9-9zm-4 8a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm3 4a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1z'
                clipRule='evenodd'
            />
        </svg>
    )
}
