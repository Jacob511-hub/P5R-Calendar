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

    if (homeShoppingDates === "") {
        return null;
    }

    return (
        <>
            <>
                <div className="info-header-container"
                style={{
                    minHeight: 'unset',
                    maxHeight: 'unset',
                    minWidth: 'unset',
                    maxWidth: 'unset',
                    top: '0px',
                }}>
                    <h1 className='info-header info-header-alt'>Home Shopping Program Items</h1>
                </div>
                <DividerCustom />
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                    {homeShoppingDates.map((date, index) => (
                        <div key={index}>
                            <h2>{date}</h2>
                            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                                {homeShoppingItemA[index]
                                    .split('\n')
                                    .map((item, idx) => (
                                        <h3 key={idx}>{item.trim()}</h3>
                                    ))}
                            </ul>
                            <h2>Price: {homeShoppingPriceA[index]}</h2>
                            <p style={{ height: 20 }}></p>
                            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                                {homeShoppingItemB[index]
                                    .split('\n')
                                    .map((item, idx) => (
                                        <h3 key={idx}>{item.trim()}</h3>
                                    ))}
                            </ul>
                            <h2>Price: {homeShoppingPriceB[index]}</h2>
                            <DividerCustom />
                        </div>
                    ))}
                </ul>
            </>
        </>
    )
};

export default HomeShoppingInfo;