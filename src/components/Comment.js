import React from 'react'
import Remarkable from 'remarkable'

export default class Comment extends React.Component{

    rawMarkup() {
	const md = new Remarkable();
	const rawMarkup = md.render(this.props.children.toString(), {sanitize: true})
	return { __html:rawMarkup };
    }
    
    render() {
	const md = new Remarkable();
	return (
	    <div className="comment">
		<h2 className="commentAuthor">
                {this.props.author}
            </h2>
		<span dangerouslySetInnerHTML={this.rawMarkup()} />
	    </div>
	);
    }
}
