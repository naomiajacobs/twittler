$(document).ready(function(){
  var $body = $('body');

  var showNewTweets = function() {

    var index = streams.home.length - 1;

    while(index >= 0) {
      var tweet = streams.home[index];
      var $tweet = $('<div></div>');
      var tweetContent = $('<p class="content"></p>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message + '' + tweet.created_at);
      $tweet.appendTo($('.stream'));
      index -= 1;
    }
  };

  $('.new-tweets').click(showNewTweets);
});
 
