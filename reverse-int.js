
var reverse = function(x) {
  var ret = 0;
  if(x > 2147483647 || x < (-2147483648)){
    return ret;
  }
  var y = x;
  var watchdog = 10;
  while(y)
  {
    ret = ret * 10;
    ret = ret + (y % 10);
    y = parseInt(y / 10);

    if(ret > 2147483647 || ret < (-2147483648)){
      return 0;
    }

    if(watchdog-- < 0) break;
  }
  return ret;
};

var Method1 = reverse;

var reverse = function(x) {
  var ret = parseInt(x.toString().split("").reverse().join(""));

  if(x < 0){
    ret = -ret;
  }

  if(ret > 2147483647 || ret < -2147483649){
    return 0;
  }

  return ret;
};

var Method2 = reverse;

var check = function (ans, res){
  try{
    return res == ans ? 'Right' : 'Wrong';
  }catch(e){
    return "Check Fail";
  }
}

console.log('Method 1');
console.log('test 1', ans = 123, res = Method1(321),   check(ans, res));
console.log('test 2', ans =  21, res = Method1(120),   check(ans, res));
console.log('test 3', ans = -123, res = Method1(-321), check(ans, res));
console.log('test 4', ans = 0, res = Method1(0), check(ans, res));
console.log('test 5', ans = -321, res = Method1(-1230), check(ans, res));
console.log('test 6', ans = 0, res = Method1(2147483647 + 1), check(ans, res));
console.log('test 7', ans = 0, res = Method1(1534236469), check(ans, res));
console.log('test 7', ans = 0, res = Method1(1563847412), check(ans, res));

console.log('Method 2');
console.log('test 1', ans = 123, res = Method2(321),   check(ans, res));
console.log('test 2', ans =  21, res = Method2(120),   check(ans, res));
console.log('test 3', ans = -123, res = Method2(-321), check(ans, res));
console.log('test 4', ans = 0, res = Method2(0), check(ans, res));
console.log('test 5', ans = -321, res = Method2(-1230), check(ans, res));
console.log('test 6', ans = 0, res = Method2(2147483647 + 1), check(ans, res));
console.log('test 7', ans = 0, res = Method2(1534236469), check(ans, res));
console.log('test 7', ans = 0, res = Method2(1563847412), check(ans, res));
