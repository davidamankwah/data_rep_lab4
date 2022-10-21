import React from "react";

export class Create extends React.Component {

    constructor() {
        super();
        //bind
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.state = {
            title: '',
            cover: '',
            author: ''
        }

    }

    handleSubmit(e) {
        e.preventDefault();
        //output values to console
        console.log(`${this.state.title},
        ${this.state.cover}, ${this.state.author}`);
            
        //add title,cover,author
        this.setState({
            title: '',
            cover: '',
            author: ''
        })
    }

    //events
    //book title value set
    onChangeBookTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    //book cover value set
    onChangeBookCover(e) {
        this.setState({
            cover: e.target.value
        })
    }
    //author valued set
    onChangeAuthor(e) {
        this.setState({
            author: e.target.value
        })
    }

   
    render() {
        return (
            <div>
                <h3>Hello from Create Component!</h3>
                {/* a form */}
                {/* log the information submitted in the form to the console */}
                <form onSubmit={this.handleSubmit}>

                   {/* book title information in form */}
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>

                     {/* book cover information in form */}
                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>

                     {/* book author information in form */}
                    <div className="form-group">
                        <label>Add Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeAuthor}
                        />
                    </div>

                    <input type="submit" value="Submit" />  {/* submit to console */}
                </form>
            </div>
        );
    }
}