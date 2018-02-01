class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currentVideo: this.videos[0],
      isLoaded: false
    };

    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchResults = this.handleSearchResults.bind(this);
  }

  handleTitleClick(video) {
    this.setState({currentVideo: video});
  }

  handleSearch(query) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: query,
      max: 5
    };

    window.searchYouTube(options, this.handleSearchResults);
  }

  handleSearchResults(data) {
    this.setState({videos: data})
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handler={this.handleSearch}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList videos={this.state.videos} handler={this.handleTitleClick}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
