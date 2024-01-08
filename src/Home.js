import React from 'react'
const xyz={
    color:"violet",
}
function Home(){
    return(
        <>
        <h2 style={xyz}> Order your Groceries at your doorstep. </h2>
        <table>
            <tr>
                <td> <img src="brinjal.jpg" /> </td>
                <td> <img src="lfinger.jpg" /> </td>
                
            </tr>
            <tr>
                <td > Brinjal<br/>MRP Rs. 50/kg </td>
                <td > Lady Finger<br/>MRP Rs. 30/kg </td>
            </tr>
        </table>
        
          
        </>    
    )
}
export default Home
//<img src="cu.png" />