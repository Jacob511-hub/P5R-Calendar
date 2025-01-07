import React from 'react';
import ActivityContainerBasic from './ActivityContainerBasic';
import DividerCustom from './dividerCustom';
import { useInfo } from './CalendarContext';

const StatPoint = ({}) => {
    const {
        stat
    } = useInfo();

    const statData = {
        Knowledge: {
            rank2: 34,
            rank3: 82,
            rank4: 126,
            rank5: 192,
        },
        Charm: {
            rank2: 6,
            rank3: 52,
            rank4: 92,
            rank5: 132,
        },
        Proficiency: {
            rank2: 12,
            rank3: 34,
            rank4: 60,
            rank5: 87,
        },
        Guts: {
            rank2: 11,
            rank3: 38,
            rank4: 68,
            rank5: 113,
        },
        Kindness: {
            rank2: 14,
            rank3: 47,
            rank4: 92,
            rank5: 136,
        },
    }

    const currentStat = statData[stat];

    return (
        <div>
            <h1 className='info-header'
            style={{
                textAlign: 'left',
            }}>{stat}</h1>
            <h1 className='info-header' style={{marginTop: '20px'}}>{`Rank 2: ${currentStat.rank2} points`}</h1>
            <h1 className='info-header' style={{marginTop: '20px'}}>{`Rank 3: ${currentStat.rank3} points`}</h1>
            <h1 className='info-header' style={{marginTop: '20px'}}>{`Rank 4: ${currentStat.rank4} points`}</h1>
            <h1 className='info-header' style={{marginTop: '20px'}}>{`Rank 5: ${currentStat.rank5} points`}</h1>
            <DividerCustom />
        </div>
    )
}

export default StatPoint;