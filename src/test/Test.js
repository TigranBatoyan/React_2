import React, {Component} from "react";
import AppContext from "./context";
import Example from "./Example";


class Test extends Component {
    static contextType = AppContext;

    render() {
        console.log('Test', this.context.name)
        return (
            <div>
                <AppContext.Provider value={{name:777,age:111}}>
                    {this.context.age}
                    <Example />
                </AppContext.Provider>
            </div>
        )
    }
}

export default Test