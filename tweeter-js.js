$(document).ready(function(){

  var showNewTweets = function() {

    $('.stream').html('');

    var index = streams.home.length - 1;

    while(index >= 0) {
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet"></div>');
      var tweetContent = '<p class="content">@<a class="username">' + tweet.user + '</a>: ' + tweet.message + '</p>';
      var tweetTime = '<p class="time">' + tweet.created_at + '</p>';
      $tweet.html(tweetContent + tweetTime);
      $tweet.appendTo($('.stream'));
      index -= 1;
    }
  };

  showNewTweets();

  $('.new-tweets').click(showNewTweets);

  var showUserTweets = function(user) {

    $('.user-tweets').html('');

    var index = streams.users[user].length - 1;

    while(index >= 0) {
      var tweet = streams.users[user][index];
      var $tweet = $('<div class="tweet"></div>');
      var tweetContent = '<p class="content">@<a class="username">' + user + '</a>: ' + tweet.message + '</p>';
      var tweetTime = '<p class="time">' + tweet.created_at + '</p>';
      $tweet.html(tweetContent + tweetTime);
      $tweet.appendTo($('.user-tweets'));
      index -= 1;
    }

  };

  $('.tweet').on('click', function() {

    var username = $(this).find('.username').text();

    alert(username);

    showUserTweets(username);

  });

});
 
