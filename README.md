Whirly Documentation
=====================
Whirly is a dead simple carousel that does not rely on any third party library. Just pass it some HTML
IDs of 'panels' that you'd like to revolve through, call start(), and it handles the rest.

Usage
========
Include the file as such:

    <script src="whirly.js" type="text/javascript"></script>

Create a new instance and 'start' it:

    var whirly = new Whirly({
      panels: ['panel1', 'panel2', 'panel3']
    })
    whirly.start();

Initialization Fields
==========
* `delay`: optional, in miliseconds, defaults to 6 seconds (6000ms)
* `panels``: required, array of strings of HTML ids that represent your panels

API
========
start()
--------
Starts the carousel a-turnin'. If its not been started before, it will start with the first panel. If it's been stopped
it will start at the current shown panel.

stop()
--------
Stops the carousel on the currently showing panel.

next()
--------
Shows the next panel.

prev()
--------
Shows the previous panel.

showPanel(id)
--------
Shows the panel with the passed in id.

hidePanel(id)
--------
Hides the panel with the passed in id.