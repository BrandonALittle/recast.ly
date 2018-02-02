class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currentVideo: {},
      isLoaded: false
    };

    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.getVideos = this.getVideos.bind(this);
  }

  componentDidMount() {
    this.getVideos('rickroll');
  }

  handleTitleClick(video) {
    this.setState({currentVideo: video});
  }

  getVideos(query) {
    let options = {
      key: window.YOUTUBE_API_KEY,
      query: query,
      max: 5
    };

    this.props.searchYouTube(options, (data) => {
      this.setState({
        isLoaded: true,
        videos: data,
        currentVideo: data[0]
      });
    });
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <div>Please hold...</div>
      );
    } else {
      return (
        <div>
          <nav className="navbar" >
            <div className="col-md-6 offset-md-3">
              <Search getVideos={this.getVideos} getDebouncedVideos={_.debounce(this.getVideos, 500).bind(this)}/>
            </div>
          </nav>
          <div className="row">
            <div className="col-md-7">
              <VideoPlayer video={this.state.currentVideo}/>
            </div>
            <div className="col-md-5">
              <VideoList videos={this.state.videos} handler={this.handleTitleClick}/>
            </div>
          </div>
        </div>
      );
    }
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

