import React, { Component } from 'react'
import loading from './loading.gif'


export default class spinner extends Component{
    render(){
        return (
            <div className='text-center my-3'>
                <img src={loading} alt="loading" style={{width: '150px', height: '150px'}}/>
            </div>
        );
    }
}