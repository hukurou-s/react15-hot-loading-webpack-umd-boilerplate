import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

export default class SampleComponent extends React.Component {
    constructor(props) {
	super(props);
    }

    render() {
	const data = [
	    {id: 1, author: "Pete Hunt", text: "This is one comment"},
	    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
	];

	return (
		<div>
		<h1>CommentBox</h1>
		<CommentList data={data}/>
		<CommentForm />
		</div>
	);
    }
}
