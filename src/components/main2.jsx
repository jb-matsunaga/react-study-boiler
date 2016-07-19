import React from 'react'

var TextBox = React.createClass({
    render() {
        console.log(this.props);
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
            'box1': {
                    title: 'title1',
                    text: 'text1text1text1text1text1text1text1'
            },
            'box2': {
                    title: 'title2',
                    text: 'text2text2text2'
            },
            'box3': {
                    title: 'title3',
                    text: 'text3text3text3text3text3'
            }
        }
    },
    handleChangeBox1Title(e) {
        this.setState({
            'box1': {
                title: e.target.value,
                text: this.state.box1.text
            }
        });
    },
    handleChangeBox1Text(e) {
        this.setState({
            'box1': {
                title: this.state.box1.title,
                text: e.target.value
            }
        });
    },
    handleChangeBox2Title(e) {
        this.setState({
            'box2': {
                title: e.target.value,
                text: this.state.box2.text
            }
        });
    },
    handleChangeBox2Text(e) {
        this.setState({
            'box2': {
                title: this.state.box2.title,
                text: e.target.value
            }
        });
    },
    handleChangeBox3Title(e) {
        this.setState({
            'box3': {
                title: e.target.value,
                text: this.state.box3.text
            }
        });
    },
    handleChangeBox3Text(e) {
        this.setState({
            'box3': {
                title: this.state.box3.title,
                text: e.target.value
            }
        });
    },
    render() {
        console.log(this.state);
        return (
            <div>
                <input
                type="text"
                value={this.state.box1.title} onChange={this.handleChangeBox1Title}
                />
                <input
                type="text"
                value={this.state.box1.text} onChange={this.handleChangeBox1Text}
                />
                <TextBox data={this.state.box1}/>

                <input
                type="text"
                value={this.state.box2.title} onChange={this.handleChangeBox2Title}
                />
                <input
                type="text"
                value={this.state.box2.text} onChange={this.handleChangeBox2Text}
                />
                <TextBox data={this.state.box2}/>

                <input
                type="text"
                value={this.state.box3.title} onChange={this.handleChangeBox3Title}
                />
                <input
                type="text"
                value={this.state.box3.text} onChange={this.handleChangeBox3Text}
                />
                <TextBox data={this.state.box3}/>
            </div>
        )
    }
});
