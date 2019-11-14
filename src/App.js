import React, {Component} from 'react';
import './App.css';
import { example, dummy } from './Constant';
import Form from './Components/Form/Form';
import List from './Components/List/List';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      example:{...example},
      datas:[...dummy]
    }
  }

  onItemCreate = (data) =>{

    // if (data.id) {
    //   const newEvents = this.state.datas.map((event) => {
    //     return event.id === data.id ? data : event
    //   })
    //   this.setState({
    //     ...this.state,
    //     datas: [ ...newEvents ],
    //     example: { ...example  }
    //   })
    //   return
    // }

    this.setState({
      datas:[...this.state.datas,data],
      example:{...example}
    })
  }

  onItemDelete = (id) =>{
    const newData = this.state.datas.filter(data =>{
      return data.id !== id
    })
    this.setState({
      datas:[...newData]
    })
  }

  onItemUpdate = (id) =>{
    const findData = this.state.datas.find((data) => {
      return data.id === id
    });
    this.setState({
      ...this.state,
      example:findData,
    })
  }

  render(){
    const { example,datas } = this.state
    console.log(example)
    return (
        <div className="App">
          <Form data={example} onCreate={this.onItemCreate} />
          <div className='right_section'>
            {
                datas.map(data => {
                  return(
                    <List data={data} onItemDelete={this.onItemDelete} onItemUpdate={this.onItemUpdate}  />
                  )
                })
              }
          </div>
       </div>
    );
  }
}

export default App;
