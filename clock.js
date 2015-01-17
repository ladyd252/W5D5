function Clock () {

}

Clock.TICK = 5000;

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  var hours = this.time.getHours();
  var minutes = this.time.getMinutes();
  var seconds = this.time.getSeconds();
  var timeString = hours + ":" + minutes + ":" + seconds;
  console.log(timeString);
};

Clock.prototype.run = function () {
  // 1. Set the currentTime.
  // 2. Call printTime.
  // 3. Schedule the tick interval.
  this.time = new Date();
  this.printTime();
  setInterval(this._tick.bind(this), Clock.TICK);
};

Clock.prototype._tick = function () {
  // 1. Increment the currentTime.
  // 2. Call printTime.
  this.time.setSeconds(this.time.getSeconds()+5);
  this.printTime();
};

var clock = new Clock();
clock.run();
