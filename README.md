#Cersei
The client for the ShameButton project that can be found [here](https://github.com/bkvarda/shamebutton)
![alt text](http://www.slate.com/content/dam/slate/blogs/xx_factor/2015/06/15/game_of_thrones_has_been_criticized_for_its_portrayal_of_sexual_violence/cersei.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg "Shame! DING DING DING!")

###Installation
Install Node.js (you can get it [here](https://nodejs.org/download/)). Extract/clone the content of this repo somewhere on your client. Add your Particle.io API token into 'config.json.example' and rename to 'config.json'. Then run "node app.js" from your CLI or terminal. May have an NPM install shortly. 

###Usage
Cersei is a Server-Sent Event client that waits/listens for a specific event to occur in the Particle event cloud, and once that event occurs it plays a shame clip from the GoT season 5 finale. The current implementation is meant to work with the [ShameButton](https://github.com/bkvarda/shamebutton), which is a Photon-based device with a push-button. When the button is pressed, it sends the 'shamedingdingding' event to the Photon cloud, which Cersei reacts to by playing 'SHAME! DING DING DING'. Install it secretly on your friends/enemies/colleagues machines and run it as a daemon using [foreverjs](https://github.com/foreverjs/forever). Activate the ShameButton when an embarrasment occurs, and watch as the office cowers in shame. 

###License
MIT License
Copyright (c) 2015 Brandon Kvarda

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.