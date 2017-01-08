import React, { Component } from 'react';
import { connect } from 'react-redux';

// L48 => when this was originally written, it was 'export default' and then class BookDetail...
// It was then rewritten by putting the export default at the bottom and using the connect()
// helper function
// L49 => now that we've connected mapStateToProps and BookDetail, we can use this.props.book
// inside the container
class BookDetail extends Component {
	render() {
		if (!this.props.book) {
			return <div>Select a book to get started.</div>
		}
		return (
			<div>
				<h3>Details for: </h3>
				<div>{this.props.book.title}</div>
			</div>
		);
	}
}

// We'll import the connect helper and connect the state (application state) to the props
// of this container.  We do this by defining a function called mapStateToProps and then we
// connect that function to BookDetail

function mapStateToProps(state) {
	// this object that we return will show up as props in our BookDetail
	return {
		book: state.activeBook
	}
}

export default connect(mapStateToProps)(BookDetail);