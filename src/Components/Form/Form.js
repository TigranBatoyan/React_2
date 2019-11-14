import React, {useState, useEffect} from  'react';
import './index.css'

const Form = props =>{
   
    const { data } = props
    const [example, setExample] = useState(data);

    useEffect(() => {
        setExample( data )
      }, [data])

    const changeValue = (event) =>{
        const { name,value } = event.target
        setExample({...example,[name]:value})
    }

    const onChangeState = () =>{
        const newState = {...example,id:new Date().valueOf()}
        props.onCreate(newState)
    }
   
        return(
            <div className='form'>
                <form onSubmit={(event)=> event.preventDefault()}>
                    <div className="form-group">
                        <input type="text" className="form-control" id="text" defaultValue = {example.name} placeholder='Name' name='name' onChange={changeValue} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="text" defaultValue = {example.location} placeholder='Location' name='location' onChange={changeValue} />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" placeholder='description' defaultValue = {example.description} name='description' onChange={changeValue}></textarea>
                    </div>
                    <button onClick={onChangeState} type="submit" className="btn btn-info btn-block my-4">Submit</button>
                </form>
            </div>
        )
}
export default Form