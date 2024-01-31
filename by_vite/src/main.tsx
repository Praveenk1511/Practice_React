import ReactDOM from 'react-dom/client'
import React from 'react';
// import App from './App.tsx'


function Myapp() {
    return (
      <>
      <h1>Hii | PRAVEEN</h1>
      </>
    );
  }

  const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com/',
        target : '_blank'
    },
    children : 'Click me to visit google'
  };
 
  const anotherElement = ( 
    <a href='https://google.com/' target='_blank'> visit google</a>
  );

  const reactElement1 = React.createElement(
    'a',
    {href: 'https://google.com/', target: '_blank'},
    'click me to visit google',
    anotherElement
  )


ReactDOM.createRoot(document.getElementById('root')!).render(
    reactElement1
)
