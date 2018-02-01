var searchYouTube = (options, callback) => {
  // search: function(options, callback) {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: 'true'
    },
    contentType: 'application/json',
    success: function(data) {
      callback (data.items);
    },
    error: function (data) {
      console.error('Failed to receive videos', data);
    }
  });


  // },


};


window.searchYouTube = searchYouTube;

