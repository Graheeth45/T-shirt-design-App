import React from 'react'
import './Design.css'

export const Design = ({display , textFormat}) => {
    return (
        <div className="card card-content">
            <div className="imgTshirt text-center">
                <img
                className="imgpic" 
                src= {`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${display.Tshirtcolor}`}
                alt="imgTshirt" />
            
            </div>
                
            <div className="memeside text-center">
                <div className="uppertext">
                    <p  style={{fontSize:textFormat , color:  display.TextColor , fontFamily : display. FontStyle}}>{display.upperText}</p>
                </div>
                <img 
                className = "imgmeme"
                src={`${display.url}` || "http://via.placeholder.com/400x300" }
                alt="Imgforshirt" />
                <div className="lowertext">
                    <p style={{fontSize:textFormat , color : display.TextColor , fontFamily : display. FontStyle}}>{display.lowerText}</p>
                </div>
            </div>

        </div>
    )
}
