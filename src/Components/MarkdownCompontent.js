import React, { Component } from 'react';
import Markdown from 'react-markdown';

class MarkdownCompontent extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ""
        };
        this.textDemo = `#### markdown demo text here
            \n * [link to git](https://www.npmjs.com/package/react-markdown)
            \n * [link to docs](https://ourcodeworld.com/articles/read/532/how-to-render-markdown-as-pure-react-components)`;
        this.changeHandler = this.changeHandler.bind(this);
    };

    render(){
        return(
            <div className="markdown">
                <h4 className="component-description">{this.props.description}</h4>
                <div className="markdownBox_demo">
                    <Markdown
                        escapeHtml={true}
                        source={this.textDemo}
                    />
                </div>
                <div className="markdownBox">
                    <div className="markdownBox_left">
                        <Markdown
                            escapeHtml={true}
                            source={this.state.text}
                        />
                    </div>
                    <div className="markdownBox_right">
                        <textarea
                            className = "markdownBox_textarea"
                            onChange = {this.changeHandler}
                            value = {this.state.text}
                        ></textarea>    
                    </div>
                </div>
            </div>
        );
    };

    changeHandler(event){
        this.setState({text: event.target.value})
    }
};

export default MarkdownCompontent;