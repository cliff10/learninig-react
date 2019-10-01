import React from 'react';
const Hello = () => {
//     return (
//         <div>Hello Everyone!</div>
//     )

return React.createElement('div', null, React.createElement('h1', null, 'Hi everyone!' ))

}

export default Hello;