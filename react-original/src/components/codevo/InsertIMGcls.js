import React, { Component } from "react";


class InsertIMGcls extends Component {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJxNyb_fhlr-4CWD0B_w3waY8TzJD0o0uZw&usqp=CAU";
    
    render() {
        return (
            <div>
                <h1>flava</h1>
                <img src={this.image} alt="flava" />
            </div>
        )
    }
}

export default InsertIMGcls;


