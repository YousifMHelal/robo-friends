import React from "react";

const Scroll = (props) =>{
    return (
        <div style={{
            overflowX: 'scroll',
            border: '2px solid #000',
            height: '800px'
        }}>
            {props.children};
        </div>
    );
}

export default Scroll;