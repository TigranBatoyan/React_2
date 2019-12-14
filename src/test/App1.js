import React,{Component} from "react";
import List from "./List";
import Search from "./Search";
import AppContext from "./context";

class App1 extends Component{
    state={
        data:[]
    }

    setData = data =>{
        this.setState({data})
    }
    render(){
        const {data} = this.state
        return(
            <div>
                <AppContext.Provider value={{data, setData:this.setData}}>
                    <Search />
                    <List />
                </AppContext.Provider>
            </div>
        )
    }
}
export default App1