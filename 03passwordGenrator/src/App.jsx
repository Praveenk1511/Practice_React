import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

    const [length, setLength] = useState(8);
    const [numberAllwed, setNumberAllwed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordRef = useRef(null);

    const passwordGenrator = useCallback(() => { 
        let pass ="";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(numberAllwed) str +="1234567890";
        if(charAllowed) str +="~!@#$%^+=_-[]{}()&*`";

        for (let i = 1; i < length; i++) {
            pass += str.charAt(Math.floor((Math.random() * str.length) + 1));            
        }
        setPassword(pass);
    }, [numberAllwed, charAllowed, length]);

    const copyPasswordToclipboard = useCallback(() => { 
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0,999);
        window.navigator.clipboard.writeText(password);
    }, [password]);
    
    useEffect(() => {passwordGenrator();}, [numberAllwed, charAllowed, length]);
    
    

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden md-4'>
            <input
                type="text"
                value={password}
                className="outline-none w-full py-1 px-3"
                placeholder="password"
                readOnly
                ref={passwordRef}
            />
            <button
                onClick={copyPasswordToclipboard} 
                className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            >
            Copy
            </button>
        </div>
        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gep-x-1'>
                <input 
                   type='range'
                   min={8}
                   max={100}
                   value={length}
                   className='cursor-pointer'
                   onChange={(e) => setLength(e.target.value)}
                />
                <label>Length : {length}</label>
            </div>
            <div className='flex items-center gep-x-1'>
                <input 
                   type='checkbox'
                   defaultChecked={numberAllwed}
                   id="numberInput"
                   onChange={() => {
                    setNumberAllwed((prev) => !prev);
                   }}
                />
                <label htmlFor="numberInput">Number</label>
            </div>
            <div className='flex items-center gep-x-1'>
                <input 
                   type='checkbox'
                   defaultChecked={charAllowed}
                   id="characterInput"
                   onChange={() => {
                    setCharAllowed((prev) => !prev);
                   }}
                />
                <label htmlFor="characterInput">Characters</label>
            </div>
        </div>
    </div>
  )
}

export default App
