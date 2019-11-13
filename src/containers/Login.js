import React from 'react'
import { Button } from 'antd-mobile';

export default function Login(props){
    function login(){
        props.history.push('/home');
    }
    return (
        <div>
            <Button type="warning" onClick={login}>登陆</Button>
        </div>
    )

}
