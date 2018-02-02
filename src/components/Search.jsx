class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.getDebouncedVideos(e.target.value);
    this.setState({
      value: e.target.value
    });

  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" id="text-input" value={this.state.value} onChange={this.handleInputChange}/>
        <button className="btn hidden-sm-down" onClick={() => this.props.getVideos(document.getElementById('text-input').value)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }


}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
