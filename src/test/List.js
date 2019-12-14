import React,{Component} from "react";
import AppContext from "./context";

class List extends Component{
    render(){
        return(
            <div>
                <AppContext.Consumer>
                    {
                        ({data}) =>{
                            return data.map(item=>{
                                return(
                                    <div key={item.id} style={{background:'silver',margin:'20px',paddingLeft:'20px'}}>
                                        <p>{item.title}</p>
                                        <p>{item.author}</p>
                                        <p>{item.description}</p>
                                    </div>
                                )
                            })
                        }
                    }
                </AppContext.Consumer>
            </div>
        )
    }
}
export default List