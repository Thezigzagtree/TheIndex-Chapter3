import React, { Component } from "react";
import BookRow from "./BookRow";

class AuthorDetail extends Component {
  render() {
    const currentAuthor = this.props.currentAuthor;
    return (
      <div className="author col-xs-10">
        <div>
          <h3>{`${currentAuthor.first_name} ${currentAuthor.last_name}`} </h3>
          <img
            src={currentAuthor.imageUrl}
            className="img-thumbnail"
            onClick={() => this.props.selectAuthor(currentAuthor)}
          />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            {currentAuthor.books.map((book, index) => {
              return (
                <BookRow
                  key={book.title + index}
                  book={book}
                  authorname={
                    currentAuthor.first_name + " " + currentAuthor.last_name
                  }
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AuthorDetail;
