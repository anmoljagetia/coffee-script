// Generated by IcedCoffeeScript 1.2.0t
var serialSearch, __iced_k, __iced_k_noop;

__iced_k = __iced_k_noop = function() {};

serialSearch = function(keywords, cb) {
  var i, k, out, ___iced_passed_deferral, __iced_deferrals, __iced_k,
    _this = this;
  __iced_k = __iced_k_noop;
  ___iced_passed_deferral = iced.findDeferral(arguments);
  out = [];
  (function(__iced_k) {
    var _i, _len, _ref, _results, _while;
    _ref = keywords;
    _len = _ref.length;
    i = 0;
    _results = [];
    _while = function(__iced_k) {
      var _break, _continue, _next;
      _break = function() {
        return __iced_k(_results);
      };
      _continue = function() {
        ++i;
        return _while(__iced_k);
      };
      _next = function(__iced_next_arg) {
        _results.push(__iced_next_arg);
        return _continue();
      };
      if (!(i < _len)) {
        return _break();
      } else {
        k = _ref[i];
        (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "documentation/coffee/iced_tw_3.coffee",
            funcname: "serialSearch"
          });
          search(k, __iced_deferrals.defer({
            assign_fn: (function(__slot_1, __slot_2) {
              return function() {
                return __slot_1[__slot_2] = arguments[0];
              };
            })(out, i),
            lineno: 6
          }));
          __iced_deferrals._fulfill();
        })(_next);
      }
    };
    _while(__iced_k);
  })(function() {
    return cb(out);
  });
};
