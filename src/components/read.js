import React from "react";
import { Books } from "./books";
import axios from "axios"; // added axios

export class Read extends React.Component {
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784') //make asyncrhonus request. retrieve information
            .then((respnse) => {
                this.setState({
                    books: respnse.data //get information back
                })
            }) // bring back response
            .catch(function (error) {
                console.log(error);
            })//handles issues; 

    }
    state = {
        books: []
    }

    render() {
        return (
            <div>
                <h3>Hello from my Read component!</h3>
                <Books books={this.state.books}></Books>  {/* display books information */}
            </div>
        );
    }
}