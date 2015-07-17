$(document).ready(function(){
  var $body = $('body');

  var showNewTweets = function() {

    $('.stream').html('');

    var index = streams.home.length - 1;

    while(index >= 0) {
      var tweet = streams.home[index];
      var $tweet = $('<div></div>');
      var tweetContent = '<p class="content"><a class="username">@' + tweet.user + '</a>: ' + tweet.message + '</p>';
      var tweetTime = '<p class="time">' + tweet.created_at + '</p>';
      $tweet.html(tweetContent + tweetTime);
      $tweet.appendTo($('.stream'));
      index -= 1;
    }
  };

  $('.new-tweets').click(showNewTweets);
});
 
