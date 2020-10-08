import React,{Component} from 'react'
import { Input } from '@material-ui/core';


class login extends Component{
    constructor(props){
        super(props)
        this.openXML = this.openXML.bind(this)
    }

     openXML = () => {
        console.log('Ola Mundo')
    }
    render(){
        return (
            <div>
                <h1>Olá Mundo</h1>
                <input 
                    type='file'
                    id="file"
                    style={{display:'none'}}
                />
                <button id='lablFile' onClick={this.openXML} style={{backgroundColor:'pink', width:'200px',border:'none'}}>Carregue o seu xml</button>
            </div>
        )
    }
}

export default login