import React, {Component} from "react";
import AppContext from "./context";

class Search extends Component {

    searchData = (value,setData) => {
        const obj={
            where:{
                title:{
                    like:value
                }
            }
        }
        const endPoint = JSON.stringify(obj)
        fetch(`https://it-blog-posts.herokuapp.com/api/posts?filter=${endPoint}`)
            .then(response => response.json())
            .then(data => setData(data))
    }

    render() {
        return (
            <div>
                <AppContext.Consumer>
                    {
                        ({setData}) => {
                            return <input type="text" name="" onChange={({target:{value}}) => this.searchData(value,setData)}/>
                        }
                    }
                </AppContext.Consumer>
            </div>
        )
    }
}

export default Search