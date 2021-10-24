import React from 'react'

export const Setting = ({color ,uppertext , lowertext , uploadImage , Textsize , TextColor , Fontstyle }) => {
    return (
        <div className="card bg-light container">
            <h2 className="text-center">Settings</h2>
            <h4>Change the T-shirt Color</h4>
            <div className="T-shirt-color">
                <img onClick={color}  src="https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/white.png" alt="white-color" id="white"/>
                <img onClick={color}  src="https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/black.png" alt="black-color" id="black"/>
                <img onClick={color}  src="https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/grey.png" alt="grey-color" id="grey"/>
                <img onClick={color}  src="https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/blue.png" alt="blue-color" id="blue"/>
                <img onClick={color}  src="https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/red.png" alt="red-color" id="red"/>
            </div>
            <hr/>
            <h4>Text Update :</h4>
            <input onChange={uppertext} type="text" className="form-control form-control-sm-mb-2" placeholder="Uppertext" />
            <input onChange={lowertext} type="text" className="form-control form-control-sm form1" placeholder="Lowertext" />
            <hr/>
            <h4>Upload Image :</h4>
            <div className="form-group">
                <input onChange={uploadImage} type="file" className="form-control-sm-mb-2" />
            </div>
            <hr/>
            <h4>Text Size :</h4>
            <input onChange={Textsize} type="range" min="12" max="40" />
            <hr/>
            <h4>Text Color :</h4>
            <select onChange={TextColor}>
                <option>White</option>
                <option>black</option>
                <option>Blue</option>
                <option>grey</option>
                <option>red</option>
                <option>pink</option>
                <option>#ff69b4</option>
                <option>yellow</option>
            </select>
            <hr/>
            <h4>Font family</h4>
            <select onChange={Fontstyle}>
                <option>'Courier New', Courier, monospace</option>
                <option> Arial, Helvetica, sans-serif</option>
                <option> 'Arial Narrow', Arial, sans-serif</option>
                <option>'Times New Roman'</option>
                <option>'Segoe UI'</option>
                <option>'Helvetica Neue'</option>
                <option>Verdana</option>
                <option>Geneva</option>
                <option>sans-serif</option>
            </select>
            <hr/>
            <button className="btn btn-primary btn-sm-mb-2 savebtn">Save</button>
        </div>
    )
}
