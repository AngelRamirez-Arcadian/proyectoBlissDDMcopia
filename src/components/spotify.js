import React from 'react';
import spotify from '../images/Spotify.svg'
//  import styled from 'styled-components'



const Spotify = () => {
    return ( 
        
        <div className="w-full flex flex-col justify-center">
            <div className="m-12 p-12 flex justify-center">
                <button className="object-none object-left inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 font-bold"src={spotify}>Mi playlist</button>
            </div>
            <div className="m-5 p-5 flex-col grid justify-items-end">
                <div className="p-5">
                    <h1 className="line"></h1>
                </div>
                    
                <div className="p-5">
                    <h1 className="line2"></h1>
                </div>

                <div className="p-5">
                    <h1 className="line"></h1>
                </div>

                <div className="p-5">
                    <h1 className="line"></h1>
                </div>
            </div>
            <div className="m-12 p-12 flex justify-center">
            </div>
        </div>
        

        
)
}
 
export default Spotify