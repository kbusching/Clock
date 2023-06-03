let clock = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    setHours: function(h) {this.hours = h;},
    setMinutes: function(m) {this.minutes = m;},
    setSeconds: function (s) {this.seconds = s;}
};

let now = new Date ()
clock.setHours(now.getHours());
clock.setMinutes(now.getMinutes());
clock.setSeconds(now.getSeconds());
console.log(clock)