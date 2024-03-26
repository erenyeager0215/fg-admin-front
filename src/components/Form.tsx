import React, { useState } from 'react';
import './From.scss';
import axios from 'axios';

type FormData ={
    name:string,
    address:string
}

export const Form =()=>{
    const [formValues,setFormValues]=useState<FormData>({name:'',address:''});

    const setVaule =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    }

    const onclick=()=>{

axios.post('http://localhost:8000/testdb',formValues).then((res)=>{
        console.log(res.data)
}).catch((err)=>{
    console.error(err)
})
        console.log(formValues)
    }

    return (
        <>
        <div>Formだよ</div>
            <div className='formBlock'>
            <label className='formItem' >名前
            <input type="text" name="name" onChange={setVaule} value={formValues.name}/>
            </label>
            <label className='formItem' htmlFor="">住所
            <input type="text" name="address" onChange={setVaule} value={formValues.address}/>
            </label>

            <button onClick={onclick}>登録する</button>                   
        </div>
    
        </>
    )
}