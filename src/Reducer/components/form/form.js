import React, { useState, useEffect, useContext } from 'react';
import Context from "../../context/context";

const Form = props => {
    const { state:{template}, dispatch } = useContext(Context);
    const [data, setData] = useState(template);
    const { name, location, description, id } = data;


    useEffect(() => {
        setData( template )
    }, [template])

    const onSubmitForm = (data) => {
        dispatch({ type: 'CREATE', payload: data })
    }

    const handleFormChange = (event) => {
        const { target: { name, value } } = event;
        setData({
            ...data,
            [name]: value
        })
    }
    return (
        <div>
            <div>
                <input name="name" onChange={handleFormChange} value={name} type="text" placeholder="Event Name" />
            </div>
            <div>
                <input name="location" onChange={handleFormChange} value={location} type="text" placeholder="Event Location" />
            </div>
            <div>
                <div>
                    <textarea name="description" onChange={handleFormChange} value={description} placeholder="Description" rows="5">

                    </textarea>
                </div>
            </div>
            <div>
                <button onClick={()=>onSubmitForm(data)}>{id ? 'Update' : 'Create'}</button>
            </div>
        </div>
    );
};

export default Form;