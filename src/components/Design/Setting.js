import React from 'react'

export const Setting = ({color ,uppertext , lowertext , uploadImage}) => {
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
            <input type="range" min="0" max="100" />
            <hr/>
            <h4>Text Color :</h4>
            <select>
                <option>White</option>
                <option>black</option>
                <option>Blue</option>
                <option>grey</option>
                <option>red</option>
            </select>
            <hr/>
            <button className="btn btn-primary btn-sm-mb-2 savebtn">Save</button>
        </div>
    )
}
