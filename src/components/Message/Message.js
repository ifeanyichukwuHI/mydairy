import React, { Component } from 'react';


const Message = (props) => {
    return (
        <div className={props.name} >
            {props.message}
        </div>
    );
}