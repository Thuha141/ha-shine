import React from 'react';
import './style.scss';

interface PropsType {
    title: string;
    key: number;
    children: any;
}

function CardPercent({ title, key, children }: PropsType) {
    return (
        <div className="card" key={key}>
            <div className="cardPercent">
                <div className="cardPercent--title">
                    <h2>{title}</h2>
                </div>
                <div className="cardPercent--value">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default CardPercent
