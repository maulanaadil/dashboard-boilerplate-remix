import { Paragraph, Heading, SubHead } from '~/typography'
import { Button } from '~/components'

export default function Index() {
    return (
        <div className={``}>
            <Heading type='h1'>Welcome to Remix</Heading>
            <Paragraph weight='Bold' variant='p1'>
                test paragrapgh
            </Paragraph>
            <SubHead type='subhead5'>test subhead</SubHead>
            <Button
                size='s'
                variant='primary'
                onClick={() => {
                    console.log('anjay')
                }}
                type='button'
            >
                Button test
            </Button>
            <ul>
                <li>
                    <a
                        target='_blank'
                        href='https://remix.run/tutorials/blog'
                        rel='noreferrer'
                    >
                        15m Quickstart Blog Tutorial
                    </a>
                </li>
                <li>
                    <a
                        target='_blank'
                        href='https://remix.run/tutorials/jokes'
                        rel='noreferrer'
                    >
                        Deep Dive Jokes App Tutorial
                    </a>
                </li>
                <li>
                    <a
                        target='_blank'
                        href='https://remix.run/docs'
                        rel='noreferrer'
                    >
                        Remix Docs
                    </a>
                </li>
            </ul>
        </div>
    )
}
