import React from 'react';

function Filter(props){

    const handleCheckboxChange = (index) => {
       
    };
    
    const {title, data} = props
    return(
        <div className="border-bottom mb-4 pb-4"  style={{padding: '2% 2% 2% 2%'}}>
            <h5 className="font-weight-semi-bold mb-4">{title}</h5>
                <form>
                    {data.map((item, index) => (
                    <div key={index} className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                        <label className="custom-control-label" htmlFor={`checkbox-${index}`}>{item.nom}</label>
                        <input
                        type="checkbox"
                        className="custom-control-input"
                        defaultChecked={false}
                        id={`checkbox-${index}`}
                        onChange={handleCheckboxChange(index)} // Assuming you have a function handleCheckboxChange to handle the checkbox change
                        />
                        
                    </div>
                    ))}
                </form>
        </div>
    )
}

export default Filter