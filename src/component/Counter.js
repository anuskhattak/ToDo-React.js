// import React, {useState} from 'react';

// export default function Counter() {
//     const [count, newCount] = useState(0);
//     const handle = () => {
//        newCount(count + 1);
//     };
//   return (
//     <div>
//       <button onClick={handle}>Click here</button>
//     </div>
//   )
// }





import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
        
    };
    
    return (
        <div>
            <button onClick={handleIncrement}>Click Here {count}</button>
        </div>
    );
}
