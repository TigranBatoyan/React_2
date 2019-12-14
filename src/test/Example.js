import React, {Component} from "react";
import AppContext from "./context";

class Example extends Component {
    render() {
        return (
            <div>
                <AppContext.Consumer>
                    {item => item.name}
                </AppContext.Consumer>
            </div>
        )
    }
}

export default Example