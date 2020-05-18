MkNxGn Proquest
=======

#### MkNxGn Proquest
A Javascript XML Request Helper.


#

Installation
------------

&lt;script src='/proquest_vX.X.js'&gt;&lt;/script&gt;

Script can be loaded anytime globably at:

https://mknxgn.pro/scripts/proquest/proquest-vX.X.js<br>

Example:<br>

https://mknxgn.pro/scripts/proquest/proquest-v1.5.js

#
How To Use
------------
<ol>
    <li> Load the script
    <li> Make a request.
</ol>

#

### Syntax of Proquest is as follows:

Proquest(Address, Type="GET", Data, Headers, RType="json", ErrorIgnore=False, Callback="none")

## Making a Request

Example:
``` javascript
//working example
Proquest("https://mknxgn.pro/testconnection", "GET", {}, {}, "text", false, function(resp) {
    console.log(resp) //Console will log "Good"
})

// Explained:
Proquest(
    address,             // The request Destination
    Method,              // Request Method
    Data,                // Data to send with requests such as form data, or post data
    Headers,             // Headers to send with requests, such as Auth info
    Response_Type,       // [text, request, json] - response
    Error_Ignore,        // If you selected JSON responce and it wasn't JSON setting this to True will catch the Error and still give you the responce
    Callback_Function    // Proquest will give this function the response as a parameter IF the response status code is 200. If not, it will give you the XML Request if it wasn't 200 so you can parse through it.
)

```

## Sending Data
``` javascript
// just an example

var data = {
    "name": "mark",
    "settings": {
        "fullscreen": false,
    }
    "data": "Some data here."
}

Proquest("someURL", "POST", data, {"auth": "Basic Auth Code"}, "json", true, function(resp) {
    console.log(resp) // >> {"logged in": true, "remarks": "success!"}
})
```

License
-------
MkNxGn Proquest is distributed under the MIT license.
