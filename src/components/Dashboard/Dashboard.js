import React , {Component} from 'react'
import { Design } from '../Design/Design';
import { Setting } from '../Design/Setting';
import { storage } from '../config/firebaseConfig';

class Dashboard extends Component {
    state = {
        Tshirtcolor : "black",
        upperText  : "Type upper Text",
        lowerText : "Type Lower Text",
        imgURl : "",
        url : '',
        Textsize : 32,
        FontStyle : ''
    }

    handletheTshirt  = (e) => {
        this.setState({Tshirtcolor : e.target.id});
    }

    handletheupper = (e) => {
        this.setState({upperText : e.target.value})
    }

    handlethelower = (e) => {
        this.setState({lowerText : e.target.value})
    }

    handletheUrl = (e) => {
        if(e.target.files[0])
        {
            const image = (e.target.files[0]);
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed' , 
            (snapshot) => {
                console.log(snapshot);
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    this.setState({url});
                })
            })
        }
    }

    handleTextSize = (e) => {
        this.setState({Textsize : e.target.value})
    }

    Formatext(){
        const size = this.state.Textsize;
        return parseInt(size);
    }

    handleThecolor = (e) => {
        this.setState({TextColor : e.target.value})
    }

    handleFontStyle = (e) => {
        this.setState({FontStyle : e.target.value})
    }



    render(){
        return(
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8 ">
                          <Design display={this.state}
                          textFormat={this.Formatext()}
                         
                          />
                    </div>
                <div className="col-lg-4">
                         <Setting
                         color={this.handletheTshirt}
                         uppertext = {this.handletheupper}
                         lowertext = {this.handlethelower}
                         uploadImage = {this.handletheUrl}
                         Textsize = {this.handleTextSize}
                         TextColor = {this.handleThecolor}
                         Fontstyle = {this.handleFontStyle}
                         />
                </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;