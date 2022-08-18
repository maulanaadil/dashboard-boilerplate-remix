import { color } from '~/styles'
import { Paragraph, SubHead } from '~/typography'
import {
    sContainer,
    sContainerBar,
    sWrapperBar,
    sBar,
    sWrapperContentBar,
    sInfoBar,
} from './styles'
import type { OverviewBarProps } from './types'

export const OverviewBar = ({
    widthBarFees,
    sumFees,
    amountFees,
    widthBarFood,
    sumFood,
    amountFood,
    widthBarEntertainment,
    sumEntertainment,
    amountEntertainment,
    widthBarOther,
    sumOther,
    amountOther,
}: OverviewBarProps) => {
    return (
        <div className={sContainer}>
            <hr />
            <div className={sWrapperBar} style={{ width: '35%' }}>
                <div className={sWrapperContentBar}>
                    <SubHead type='subhead7'>${sumFees}</SubHead>
                    <Paragraph className={sInfoBar}>Fees</Paragraph>
                </div>
                <div>
                    <Paragraph className={sInfoBar} style={{ marginLeft: 8 }}>
                        +${amountFees}
                    </Paragraph>
                    <div className={sContainerBar}>
                        <div
                            className={sBar}
                            style={{
                                backgroundColor: color.primary.purple,
                                width: `${widthBarFees}%`,
                            }}
                        />
                    </div>
                </div>
            </div>
            <hr />
            <div className={sWrapperBar} style={{ width: '30%' }}>
                <div className={sWrapperContentBar}>
                    <SubHead type='subhead7'>${sumFood}</SubHead>
                    <Paragraph className={sInfoBar}>Food</Paragraph>
                </div>
                <div>
                    <Paragraph className={sInfoBar} style={{ marginLeft: 8 }}>
                        +${amountFood}
                    </Paragraph>
                    <div className={sContainerBar}>
                        <div
                            className={sBar}
                            style={{
                                backgroundColor: color.primary.blue,
                                width: `${widthBarFood}%`,
                            }}
                        />
                    </div>
                </div>
            </div>
            <hr />
            <div className={sWrapperBar} style={{ width: '20%' }}>
                <div className={sWrapperContentBar}>
                    <SubHead type='subhead7'>${sumEntertainment}</SubHead>
                    <Paragraph className={sInfoBar}>Entertaiment</Paragraph>
                </div>
                <div>
                    <Paragraph className={sInfoBar} style={{ marginLeft: 8 }}>
                        -${amountEntertainment}
                    </Paragraph>
                    <div className={sContainerBar}>
                        <div
                            className={sBar}
                            style={{
                                backgroundColor: color.primary.lightBlue,
                                width: `${widthBarEntertainment}%`,
                            }}
                        />
                    </div>
                </div>
            </div>
            <hr />
            <div className={sWrapperBar} style={{ width: '15%' }}>
                <div className={sWrapperContentBar}>
                    <SubHead type='subhead7'>${sumOther}</SubHead>
                    <Paragraph className={sInfoBar}>Other</Paragraph>
                </div>
                <div>
                    <Paragraph className={sInfoBar} style={{ marginLeft: 8 }}>
                        +${amountOther}
                    </Paragraph>
                    <div className={sContainerBar}>
                        <div
                            className={sBar}
                            style={{
                                backgroundColor: color.secondary.grey2,
                                width: `${widthBarOther}%`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
