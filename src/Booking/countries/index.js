import React,{useContext, useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import Context from "../context/context";

const Country = () =>{
    const {state} = useContext(Context)

    return(
        <Form>
            <Form.Group controlId="exampleForm.ControlSelect1" >
                <Form.Control as="select">
                    {
                        state.countries.map(item=>{
                            return <option>{item.country}</option>
                        })
                    }
                </Form.Control>

                <Form.Control as="select">
                    {
                        state.airlines.map(item=>{
                            return <option>{item.airline}</option>
                        })
                    }
                </Form.Control>
            </Form.Group>
        </Form>
    )
}
export default Country