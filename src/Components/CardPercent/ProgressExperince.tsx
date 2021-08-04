import React from 'react'

interface PropsType {
    param: any;
}
function ProgressExperince({ param }: PropsType) {
    const arrParam = param;

    return (
        <>
            {arrParam.map((arr:any) => (
                <div className="cardExperince" key={arr.id}>
                    <h2 className="cardExperince--title">{arr.title}</h2>
                    <div className="cardExperince--time">
                        <span className="cardExperince--time__level">{arr.level}</span>
                        <span className="cardExperince--time__time">{arr.time}</span>
                    </div>
                    <p className="cardExperince--caption">{arr.caption}</p>
                </div>
            ))}
        </>
    )
}

export default ProgressExperince
