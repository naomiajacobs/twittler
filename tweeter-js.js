/*
To-Do:
  *figure out why usernames don't work after show new tweets button is clicked
*/


$(document).ready(function(){

  //show main tweet stream
  var showNewTweets = function() {

    $('.stream').html('');

    var index = streams.home.length - 1;

    while(index >= 0) {
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet"></div>');
      var tweetContent = '<p class="content">@<a class="username">' + tweet.user + '</a>: ' + tweet.message + '</p>';
      var tweetTime = '<p class="time">' + moment(tweet.created_at).fromNow() + '</p>';
      $tweet.html(tweetContent + tweetTime);
      $tweet.appendTo($('.stream'));
      index -= 1;
    }

  };

  //load tweets when page loads
  showNewTweets();

  $('.new-tweets').click(showNewTweets);

  //show user's specific tweets
  var showUserTweets = function(user) {

    $('.user-tweets').html('');

    var index = streams.users[user].length - 1;

    while(index >= 0) {
      var tweet = streams.users[user][index];
      var $tweet = $('<div class="tweet"></div>');
      var tweetContent = '<p class="content">@<a class="username">' + user + '</a>: ' + tweet.message + '</p>';
      var tweetTime = '<p class="time">' + moment(tweet.created_at).fromNow() + '</p>';
      $tweet.html(tweetContent + tweetTime);
      $tweet.appendTo($('.user-tweets'));
      index -= 1;
    }

  };

  var username;

  //show user's tweets when tweet is clicked on
  $('.tweet').click(function() {

    username = $(this).find('.username').text();

    alert(username);

    $('.new-user-tweets').text('Show New Tweets From ' + username);

    showUserTweets(username);

  });

  $('.new-user-tweets').click(function() {
    showUserTweets(username);
  });

});
 
