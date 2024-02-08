import React from 'react';

function Filter(props){

    const { title, data, handleCheckboxChange, nameId, value } = props;
    
    return(
        <div className="border-bottom mb-4"  style={{padding: '2% 2% 2% 2%'}}>
            <h5 className="font-weight-semi-bold mb-4">{title}</h5>
                <form>
                    {data.map((item, index) => (
                    <div key={index} className="d-flex flex-row align-items-center justify-content-between mb-3">
                        <label className="custom-control-label" htmlFor={`checkbox-${index}`}>{item[value]}</label>
                        <input
                            type="checkbox"
                            defaultChecked={false}
                            id={`checkbox-${index}`}
                            onChange={() => handleCheckboxChange(item[nameId])} // Assuming you have a function handleCheckboxChange to handle the checkbox change
                        />
                    </div>
                    ))}
                </form>
        </div>
    )
}

export default Filter