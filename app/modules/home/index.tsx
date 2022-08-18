import { Header } from '~/layout'
import Overview from './components/overview'
import { sHome } from './styles'

export default function HomeModule() {
    const nth = function (d: number) {
        if (d > 3 && d < 21) return 'th'
        switch (d % 10) {
            case 1:
                return 'st'
            case 2:
                return 'nd'
            case 3:
                return 'rd'
            default:
                return 'th'
        }
    }

    const getDate = (): string => {
        const dateObj = new Date()
        const date = dateObj.getDate()
        const month = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ][dateObj.getMonth()]
        const year = dateObj.getFullYear()

        const dateString = month + ' ' + date + nth(date) + ', ' + year
        return dateString.toString()
    }

    return (
        <div className={sHome}>
            <Header
                title='Welcome Back'
                subtitle={getDate()}
                username='Yerin Baek'
            />
            <Overview />
        </div>
    )
}
