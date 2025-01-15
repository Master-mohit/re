import React, { useState } from 'react'; 
// Importing React and useState. useState is a Hook used to manage state in functional components.

const Usestate = () => { 
    // A functional component named 'Usestate' is defined.

    const [count, setcount] = useState(0); 
    // 'count' is a state variable initialized with the value '0'.
    // 'setcount' is a function to update the value of 'count'.

    const countHandler = () => { 
        // This is a function that increments the 'count' value by 1 when the button is clicked.
        setcount(count + 1); 
        // Updates the state by adding 1 to the current value of 'count'.
    };

    return (
        <div className='w-full h-full flex items-center justify-center bg-black'> 

            <div className='flex items-center justify-center flex-col text-white gap-9'>    
                <h1 className='text-7xl font-semibold'>{count}</h1> 
          
                <button onClick={countHandler} className='text-4xl'>Count❕</button> 

            </div>
        </div>
    );
}

export default Usestate; 
// Exports the Usestate component so it can be used in other parts of the application.
