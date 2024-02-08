import React from 'react';

function TwoInput(props){

    const { minimum, maximum, handleMinimumChange, handleMaximumChange, title} = props;

    const handleMinimumInputChange = (e) => {
        handleMinimumChange(e.target.value);
    };

    const handleMaximumInputChange = (e) => {
        handleMaximumChange(e.target.value);
    };
    
    return(
        <div className="border-bottom mb-4"  style={{padding: '2% 2% 2% 2%'}}>
            <h5 className="font-weight-semi-bold mb-4">{title}</h5>
                <form>
                 
                    <div className="d-flex flex-row align-items-center justify-content-between mb-3">
                        <input
                            type="number"
                            placeholder='min'
                            value={minimum}
                            style={{width: '40%'}}
                            onChange={handleMinimumInputChange}

                        />
                         <input
                            type="number"
                            placeholder='max'
                            value={maximum}
                            style={{width: '40%'}}
                            onChange={handleMaximumInputChange}
                        />
                    </div>
            
                </form>
        </div>
    )
}

export default TwoInput