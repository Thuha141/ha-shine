import React from 'react';

interface PropsType {
    param: any;
}
function ProgressPercent({ param }: PropsType) {
    const arrParam = param;
    return (
        <>
            {arrParam.map((arr:any) => (
                <div key={arr.id}>
                    <div className="cardPercent--value--title">
                        <p>{arr.name}</p>
                        <p>{arr.percent}</p>
                    </div>
                    <div className="cardPercent--value--percent">
                        <div className="cardPercent--value--progress" style={{ width: `${arr.percent}` }}></div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProgressPercent
