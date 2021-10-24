import React , {Component} from 'react'
import { Design } from '../Design/Design';
import { Setting } from '../Design/Setting';
import { storage } from '../config/firebaseConfig';

class Dashboard extends Component {
    state = {
        Tshirtcolor : "black",
        upperText  : "here upper Text",
        lowerText : "here Lower Text",
        imgURl : "",
        url : ''
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
    render(){
        return(
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8 ">
                          <Design display={this.state}/>
                    </div>
                <div className="col-lg-4">
                         <Setting
                         color={this.handletheTshirt}
                         uppertext = {this.handletheupper}
                         lowertext = {this.handlethelower}
                         uploadImage = {this.handletheUrl}
                         />
                </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;