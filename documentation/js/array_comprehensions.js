// Generated by IcedCoffeeScript 1.3.3f
var courses, dish, food, foods, i, _i, _j, _k, _len, _len1, _len2, _ref;

_ref = ['toast', 'cheese', 'wine'];
for (_i = 0, _len = _ref.length; _i < _len; _i++) {
  food = _ref[_i];
  eat(food);
}

courses = ['greens', 'caviar', 'truffles', 'roast', 'cake'];

for (i = _j = 0, _len1 = courses.length; _j < _len1; i = ++_j) {
  dish = courses[i];
  menu(i + 1, dish);
}

foods = ['broccoli', 'spinach', 'chocolate'];

for (_k = 0, _len2 = foods.length; _k < _len2; _k++) {
  food = foods[_k];
  if (food !== 'chocolate') eat(food);
}
