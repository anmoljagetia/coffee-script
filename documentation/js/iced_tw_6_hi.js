// Generated by IcedCoffeeScript 1.2.0t
var f_list, nothing, w_list;

w_list = ["sun", "rain", "snow", "sleet"];

f_list = ["tacos", "burritos", "pizza", "shrooms"];

nothing = "<nothing found>";

rankPopularity(w_list, function(weather) {
  if (weather.length) {
    return rankPopularity(f_list, function(food) {
      if (weather.length && food.length) {
        return search("" + weather[0] + "+" + food[0], function(tweets) {
          var msg, _ref;
          msg = (_ref = tweets[0]) != null ? _ref.text : void 0;
          return alert(msg != null ? msg : nothing);
        });
      } else {
        return alert(nothing);
      }
    });
  } else {
    return alert(nothing);
  }
});
