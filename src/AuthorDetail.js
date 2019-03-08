import React, { Component } from "react";

class AuthorDetail extends Component {
  render() {
    const author = this.props.author;
    const authorName = `${author.first_name} ${author.last_name}`;

    const bookRows = author.books.map(book => (
      <tr>
        <td>{book.title}</td>
        <td>{authorName}</td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </tr>
    ));
    return (
      <div className="author col-xs-10">
        <div>
          <h3>{authorName}</h3>
          <img
            src={author.imageUrl}
            alt={author.first_name}
            className="img-thumbnail"
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
          <tbody>{bookRows}</tbody>
        </table>
      </div>
    );
  }
}

export default AuthorDetail;
