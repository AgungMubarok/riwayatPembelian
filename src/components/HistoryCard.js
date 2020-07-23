import React from 'react';
import './HistoryCard.css';

const HistoryCard = ({ riwayat }) => {
    return (
        <div>
            {
                riwayat.map((element) => (
                    <div className="main">
                        <div className="content">
                            <img src={element.image} alt={element.pesanan}/>
                            <h1>{element.pesanan.toUpperCase()}</h1>
                            <p className="status">{element.status}</p>
                            <p>{element.tanggal}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default HistoryCard;