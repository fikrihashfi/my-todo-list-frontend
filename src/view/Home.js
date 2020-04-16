import React from "react";
import "../assets/css/TodoList.css";



class Home extends React.Component  {
    constructor(){
        super();

        this.state={
            text:"test"
        }
        this.renderText = this.renderText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);   
    }

    renderText(event){
        this.setState({ text: event.target.value })
    }

    handleSubmit(event){
        alert("submited text : "+this.state.text);
        this.setState({text:""});
        event.preventDefault();
    }

    render(){
        return (
            <div id="container">
                {/* <form onSubmit={this.handleSubmit}>
                    <input value={this.state.text} onChange={this.renderText}></input>
                    <br></br>
                    {this.state.text}       
                    <input type="submit" value="submit"></input>     
                </form> */}
                <div className="header">Header</div>
                <div className="sidebar">Sidebar</div>
                <div className="main"><p>Main</p></div>  
                <div className="aside">
                    <div className="content1">hehe</div>
                    <div className="content2">haha</div>
                    <div className="content3">hihi</div>
                    <div className="content4">huhu</div>
                </div>
                <div className="footer">Footer</div>
            </div>
        );
    }
}

export default Home;