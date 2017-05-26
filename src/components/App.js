import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

export default class SampleComponent extends React.Component {
    constructor(props) {
	super(props);
    }
    
    render() {
	return (
		<div>
		<h1>CommentBox</h1>
		<CommentList />
		<CommentForm />
		</div>
	);
    }
}
