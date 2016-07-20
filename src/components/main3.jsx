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
            'box': [{
                id: '1',
                title: 'タイトル',
                text: 'テキスト'
            },
            {
                id: '2',
                title: 'タイトル2',
                text: 'テキスト2'
            },
            {
                id: '3',
                title: 'タイトル3',
                text: 'テキスト3'
            }]
        }
    },
    hundleChange(e) {
        var thisName = e.target.name;
        var thisTitle = e.target.value;
        console.log(e.target.dataId);

        if(thisName == 1) {
            this.state.box[0].title = thisTitle;
            this.setState(this.state);
        } else if (thisName == 2) {
            this.state.box[1].title = thisTitle;
            this.setState(this.state);
        } else {
            this.state.box[2].title = thisTitle;
            this.setState(this.state);
        }
    },
    render() {
        return (
            <div>
                <input
                type="text"
                name={this.state.box[0].id}
                value={this.state.box[0].title}
                onChange={this.hundleChange} />
                <br/>

                <input
                type="text"
                name={this.state.box[1].id}
                value={this.state.box[1].title}
                onChange={this.hundleChange} />
                <br/>

                <input
                type="text"
                name={this.state.box[2].id}
                value={this.state.box[2].title}
                onChange={this.hundleChange} />

                <TextBox data={this.state.box[0]}/>
                <TextBox data={this.state.box[1]}/>
                <TextBox data={this.state.box[2]}/>
            </div>
        )
    }
});
