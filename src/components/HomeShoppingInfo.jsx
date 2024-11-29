import React from 'react';
import DividerCustom from './dividerCustom';
import { useInfo } from '../components/CalendarContext';

const HomeShoppingInfo = () => {
    const {
        homeShoppingDates,
        homeShoppingItemA,
        homeShoppingPriceA,
        homeShoppingItemB,
        homeShoppingPriceB,
    } = useInfo();

    return (
        <>
            {homeShoppingDates !== "" ? (
                <>
                    <div className="info-header-container"
                    style={{
                        minHeight: 'unset',
                        maxHeight: 'unset',
                        minWidth: 'unset',
                        maxWidth: 'unset',
                        top: '0px',
                    }}>
                        <h1 className='info-header'
                        style={{
                            fontSize: '2.5em'
                        }}>Home Shopping Program Items</h1>
                    </div>
                    <DividerCustom />
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                        {homeShoppingDates.map((date, index) => (
                            <div key={index}>
                                <h2>{date}</h2>
                                <h3>{homeShoppingItemA[index]}</h3>
                                <h3>{homeShoppingPriceA[index]}</h3>
                                <h3>{homeShoppingItemB[index]}</h3>
                                <h3>{homeShoppingPriceB[index]}</h3>
                                <DividerCustom />
                            </div>
                        ))}
                    </ul>
                </>
            ) : (
                <p style={{ margin: 0 }}></p>
            )}
        </>
    )
};

export default HomeShoppingInfo;