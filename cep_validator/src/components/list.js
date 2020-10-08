import React,{Component} from "react"
import { Link } from 'react-router-dom'


class List extends Component{
    render(){
        return(
            <div>
                <h1>Olá Lista</h1>
                <Link to="/">Home</Link>
            </div>

            
        )
    }
}


export default List