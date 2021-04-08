import React from 'react';

export default function Reach ({queries}) {
    return (
        <div id='reach' style={{backgroundColor:'#101010', paddingBottom: '5px', paddingTop: '5px'}}>
            <div style={{fontFamily: 'Raleway', textAlign: 'center', fontSize: queries.mobile ? '9px' : '12px', color:'white', fontWeight:'lighter', letterSpacing:'1px'}}>
                {/* <h1>Contact me!</h1>                 */}                
                <h1 fontWeight='lighter'>juan.abrate21@gmail.com</h1>
                <h1>+54-1173639770</h1>
                <br></br>
                <h3>Open for opportunities: Yes</h3>
            </div>   
        </div>
               
    )
}