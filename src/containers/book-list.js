import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'; //imports selectBook => first started in L45
// function that ensures that the action flows through the reducers
import { bindActionCreators } from 'redux'; 

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				// L46 he spaces it out and adds the click event handler
				<li 
					key={book.title} 
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	// whatever is returned will show up as props inside of BookList
	return {
		books: state.books
	};
}

// first started in L45
// Anything returned form this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passed to all
	// of our reducers
	// this.props.selectBook is enabled by the line below
	return bindActionCreators({ selectBook: selectBook}, dispatch);

	// L45 - the purpose of bindActionCreators and dispatch is specifically to take what gets
	// returned from selectBook and make sure it flows through the reducers

}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook.  Make it available as
// a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);




