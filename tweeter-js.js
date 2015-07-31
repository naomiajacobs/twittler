/*
To-Do:
  *figure out why usernames don't work after show new tweets button is clicked
*/


$(document).ready(function(){

  //show main tweet stream and update user tweets if user has been chosen
  var showNewTweets = function() {

    $('.stream').html('');

    var index = streams.home.length - 1;

    //iterate through each tweet and add it to the page
    while(index >= 0) {
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet"></div>');
      var tweetContent = '<p class="content">@<a class="username">' + tweet.user + '</a>: ' + tweet.message + '</p>';
      var tweetTime = '<p class="time">' + moment(tweet.created_at).fromNow() + '</p>';
      $tweet.html(tweetContent + tweetTime);
      $tweet.appendTo($('.stream'));
      index -= 1;
    }

    //update user tweets
    if (username) {
      showUserTweets(username);
    }

  };

  //load tweets when page loads
  showNewTweets();

  //load new tweets when button is clicked
  $('.new-tweets').click(showNewTweets);

  //show user's tweets
  var showUserTweets = function(user) {

    //resets user-tweets section when a tweet is clicked
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

  //declare username outside of click fn so it's avail to other fns
  var username;

  //show user's tweets when tweet is clicked on
  $('.tweet').click(function() {

    //reset username to new user
    username = $(this).find('.username').text();

    console.log(username);

    //reset button text
    $('.new-user-tweets').text('Show New Tweets From ' + username);

    //
    showUserTweets(username);

    console.log(username);

  });

  $('.new-user-tweets').click(function() {
    showUserTweets(username);
  });

});
 
