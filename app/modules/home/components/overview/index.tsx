import { Tab, TabList, Tabs, TabPanel } from 'react-tabs'
import {
    sOverview,
    sOverviewHeader,
    sOverviewTitle,
    sOverviewSummary,
    sTabButton,
    sTabWrapper,
} from './styles'
import 'react-tabs/style/react-tabs.css'
import { Heading, SubHead } from '~/typography'
import { OverviewBar } from './bar'
import type { OverviewProps } from './types'
import { cx } from '@emotion/css'

export default function Overview({ className }: OverviewProps) {
    return (
        <div className={cx(sOverview, className)}>
            <Tabs>
                <div className={sOverviewHeader}>
                    <div>
                        <SubHead type='subhead6' className={sOverviewTitle}>
                            Overview
                        </SubHead>
                        <Heading type='h4' className={sOverviewSummary}>
                            $6000
                        </Heading>
                    </div>
                    <TabList className={sTabWrapper}>
                        <Tab className={sTabButton}>Weekly</Tab>
                        <hr />
                        <Tab className={sTabButton}>Monthly</Tab>
                    </TabList>
                </div>
                <TabPanel style={{ marginTop: 40 }}>
                    <OverviewBar
                        sumFees={3213}
                        sumFood={324}
                        sumEntertainment={424}
                        sumOther={123}
                        amountFees={23}
                        amountFood={4514}
                        amountEntertainment={23}
                        amountOther={213}
                        widthBarFees={100}
                        widthBarFood={100}
                        widthBarEntertainment={100}
                        widthBarOther={10}
                    />
                </TabPanel>
                <TabPanel>
                    <OverviewBar
                        sumFees={3721}
                        sumFood={997}
                        sumEntertainment={669}
                        sumOther={589}
                        amountFees={124}
                        amountFood={223}
                        amountEntertainment={99}
                        amountOther={32}
                        widthBarFees={100}
                        widthBarFood={100}
                        widthBarEntertainment={100}
                        widthBarOther={100}
                    />
                </TabPanel>
            </Tabs>
        </div>
    )
}
