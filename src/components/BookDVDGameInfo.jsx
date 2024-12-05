import React from 'react';
import DividerCustom from './dividerCustom';
import { useInfo } from '../components/CalendarContext';

const BookDVDGameInfo = () => {
    const {
        bookdvdgameName,
        bookdvdgameChapters,
        bookdvdgameEffect,
        bookdvdgameDescription,
        bookdvdgamePrice,
        bookdvdgameLocation,
        bookdvdgameAvailable
    } = useInfo();

    if (bookdvdgameName === "") {
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
                    <h1 className='info-header'
                    style={{
                        fontSize: '3em'
                    }}>{bookdvdgameName}</h1>
                </div>
                <DividerCustom />
                <h1 className='info-header'
                style={{
                    textAlign: 'left'
                }}>Number of Chapters: </h1>
                <DividerCustom />
                <h1 className='info-header'>{bookdvdgameChapters}</h1>
                <DividerCustom />
                <h1 className='info-header'
                style={{
                    textAlign: 'left'
                }}>Effect: </h1>
                <DividerCustom />
                <h1 className='info-header'>{bookdvdgameEffect}</h1>
                <DividerCustom />
                <h1 className='info-header'
                style={{
                    textAlign: 'left'
                }}>Description: </h1>
                <DividerCustom />
                <h1 className='info-header'>{bookdvdgameDescription}</h1>
                <DividerCustom />
                <h1 className='info-header'
                style={{
                    textAlign: 'left'
                }}>Price: </h1>
                <DividerCustom />
                <h1 className='info-header'>{bookdvdgamePrice}</h1>
                <DividerCustom />
                <h1 className='info-header'
                style={{
                    textAlign: 'left'
                }}>Location: </h1>
                <DividerCustom />
                <h1 className='info-header'>{bookdvdgameLocation}</h1>
                <DividerCustom />
                <h1 className='info-header'
                style={{
                    textAlign: 'left'
                }}>Available: </h1>
                <DividerCustom />
                <h1 className='info-header'>{bookdvdgameAvailable}</h1>
            </>
        </>
    )
};

export default BookDVDGameInfo;