import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAuthor: {},
      filteredAuthors: [],
      queryExists: false
    };

    this.selectAuthor = this.selectAuthor.bind(this);
    this.isAuthorSelected = this.isAuthorSelected.bind(this);
    this.unselectAuthor = this.unselectAuthor.bind(this);
    this.filterAuthors = this.filterAuthors.bind(this);
  }

  filterAuthors(query) {
    this.setState({
      filteredAuthors: authors.filter(author => {
        let fullname = `${author.first_name} ${author.last_name}`.toUpperCase();
        return fullname.includes(query.toUpperCase());
      })
    });
  }

  selectAuthor(author) {
    if (author === this.state.currentAuthor) {
      this.setState({ currentAuthor: {} });
    } else this.setState({ currentAuthor: author });
  }

  isAuthorSelected() {
    if (this.state.currentAuthor.first_name) {
      return <AuthorDetail currentAuthor={this.state.currentAuthor} />;
    } else if (this.state.filteredAuthors.length > 0) {
      return (
        <AuthorsList
          authors={this.state.filteredAuthors}
          filterAuthors={this.filterAuthors}
        />
      );
    } else
      return (
        <AuthorsList
          authors={authors}
          filterAuthors={this.filterAuthors}
          selectAuthor={this.selectAuthor}
        />
      );
  }

  unselectAuthor() {
    this.setState({ currentAuthor: {} });
  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar unselectAuthor={this.unselectAuthor} />
          </div>
          <div className="content col-10">{this.isAuthorSelected()}</div>
        </div>
      </div>
    );
  }
}

export default App;
