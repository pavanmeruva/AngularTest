
// Cross origin requests only supported for protocol schemas(http,data,chrome etc). Opening the page through the web server //

Because chrome and other modern browsers have implemented security restrictions for Cross Origin Requests,which means that you cannot load anything through file:/// ,

you need to use http:// protocol at all times, even locally -due Same Origin policies. Simple as that, we need to mount a webserver to run the project there.

We used the Python’s SimpleHTTPServer in order to run the project.

  python -m SimpleHTTPServer

This will spin up a web server hosting entire dir listing which you reference from URL.

