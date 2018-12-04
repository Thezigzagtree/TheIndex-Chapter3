import React, { Component } from "react";

class BookRow extends Component {
  render() {
    let book = this.props.book;
    let authorname = this.props.authorname;
    return (
      <tr>
        <td>{book.title}</td>
        <td>{authorname}</td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </tr>
    );
  }
}

export default BookRow;
