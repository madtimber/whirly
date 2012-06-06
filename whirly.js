/**
*  Whirly - a dead simple UI carousel
**/

function Whirly(config) {
    this.delay = config.delay || 6000;
    this.views = config.panels || [];
    this.curr_view = 0;
    this.interval = null;

    this.num_views = this.views.length;
    if (this.num_views <= 0) {
        console.log("No panels set to whirl.")
    }
};

Whirly.prototype.start = function() {
    var _self = this;
    this.interval = setInterval(function() {
        _self.next();
    }, this.delay);
};

Whirly.prototype.stop = function() {
    clearInterval(this.interval);
};

Whirly.prototype.showPanel = function(panel_id) {
    document.getElementById(panel_id).style.display = "block";
};

Whirly.prototype.hidePanel = function(panel_id) {
    document.getElementById(panel_id).style.display = "none";
};

Whirly.prototype._toggle = function(fn) {
    // hide current panel
    this.hidePanel(this.views[this.curr_view]);
    // call function that determines new panel to show
    fn.call(this);
    // show the new panel
    this.showPanel(this.views[this.curr_view]);
};

Whirly.prototype.next = function() {
    this._toggle(function() {
      // check to see if we need to start over
      if (this.num_views - this.curr_view > 1) {
          this.curr_view++;
      } else {
          this.curr_view = 0;
      }
    });
};

Whirly.prototype.prev = function() {
    this._toggle(function() {
      // check to see if we need to start over
      if (this.curr_view == 0) {
          this.curr_view = this.num_views - 1;
      } else {
          this.curr_view--;
      }
    });
};