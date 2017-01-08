export function selectBook(book) {
	// selectBook is an ActionCreator, it needs to return an action, 
	// an object with a type property
	// Action typically has at least two properties: type and payload
	// the type is always uppercase and separated by underscores if multiple words
	// return {
	// 	type: 'BOOK_SELECTED',
	// 	payload: book
	// };

	console.log('a book has been selected: ', book.title)
}

/*
selectBook takes one argument (book)


*/