import React from 'react';
import ReactDOM from 'react-dom';
import Test from './App'
ReactDOM.render(
<React.StrictMode>
<Test />
<Test1 />
<Test1 />
<Test1 />
</React.StrictMode>,
document.getElementById('root')
);
export function Test1(){
return <div>welcome to Test111</div>
}