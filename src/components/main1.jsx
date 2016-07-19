import React from 'react'

var TextBox = React.createClass({
    render() {
        console.log(this.props.data);
        return(
            <div className="c-txtBox">
                <h1>{this.props.data.title}</h1>
                <p>{this.props.data.text}</p>
            </div>
        )
    }

});

module.exports = React.createClass({
    getInitialState() {
        return {
            'box': [
                {
                    title: 'title1',
                    text: 'text1text1text1text1text1text1text1'
                },
                {
                    title: 'title2',
                    text: 'text2text2text2text2text2text2text2'
                },
                {
                    title: 'title3title3title3title3title3title3',
                    text: 'text3text3text3text3text3text3text3text3text3text3text3text3text3text3'
                }
            ]
        }
    },
    render() {
        return (
            <div>
                <TextBox data={this.state.box[0]}/>
                <TextBox data={this.state.box[1]}/>
                <TextBox data={this.state.box[2]}/>
            </div>
        )
    }
});
