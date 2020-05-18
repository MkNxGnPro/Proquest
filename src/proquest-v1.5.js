/*
Proquest by MkNxGn

This is a free script offered by MkNxGn
We just ask to give credit where credit is due and leave this here!

Docs
Thanks for using MkNxGn's Proquest
Proquest is just a simple script that you can use to
make requests easier and with less code.

There isn't much to explain about this script.

The syntax of Proquest is as follows

Proquest(Address, Type="GET", Data, Headers, RType="json", ErrorIgnore=False, Callback="none")

Type: Request Type ['GET', 'POST', ect]
    Request Type as String
Address: Where to send your request
    Address as String
Data: Data to send with your request
    Data can be an Object/Dict/List, Proquest will (try to) JSON.stringify it for you
Headers: Headers to send with your request
    Headers as Dict
    {'Key': 'Value', 'Key2': 'Value2'}
RType: What kind of response do you want Proquest to return
    String with either: json, text or request
    'json': parse the request before returning it, 
    'text': return the responseText as a string, 
    'request': return the request so you can parse through it
ErrorIgnore: If the response isn't JSON but RType == "json" and JSON.stringify throws and error, Proquest can ignore this and return the response so you can parse through it
    True or False
Callback: Your call back function to do after the request is complete.
    A Function
    Function(resp) where resp is Request Response as RType

If you do not want data leave it as (Address, Type="GET", ProSkip, Headers, RType....)

No headers: (Address, Type="GET", ProSkip, ProSkip, RType....)

If the request does not return 200, Proquest returns a list: [request, "Error: (Error Code)"]

Here's an example

Proquest("https://mknxgn.pro/api/test",
    "POST",
	"Hello?",
	ProSkip,
	"json",
	false,
	function(resp) {
		alert(resp)
    });
*/

try {
    console.log("You can view docs by going to this script in a browser: https://mknxgn.pro/scripts/Proquest_Proquest-v1.5.js")
}
catch (error) {}

// Proform is now depreciated.
function Proform(Address, Type = "Get", formData, Headers = [], RType = "text", ErrorIgnore = false, Callback=function(resp){console.log(resp)}) {
    var xhttp = new XMLHttpRequest();
    if (Callback) {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (RType == "json") {
                    try {
                        resp = JSON.parse(xhttp.responseText)
                    }
                    catch (error) {
                        if (ErrorIgnore == false) {
                            throw "Response Was Not JSON";
                        } else {
                            Callback(xhttp.responseText)
                            return
                        }
                    }
                    Callback(resp)
                    return
                } else {
                    if (RType == "request") {
                        Callback(xhttp)
                        return
                    } else {
                        if (RType == "text") {
                            Callback(xhttp.responseText)
                            return
                        }
                    }
                }
                Callback(xhttp.responseText)
            }
            if (this.readyState == 4 && this.status != 200) {
                Callback([xhttp, "Error: " + this.status])
            }
        };
    }
    xhttp.open(Type, Address, true);
    if (Headers) {
        for (var header in Headers) {
            xhttp.setRequestHeader(header, Headers[header])
        }
    }
    xhttp.send(formData);
}

function Proquest(Address, Type = "Get", Data = "", Headers = [], RType = "text", ErrorIgnore = false, Callback=function(resp){console.log(resp)}) {
    if (Data) {
        try {
            Data = JSON.stringify(Data)
        }
        catch (error) {
            Data = Data
        }
    }
    var xhttp = new XMLHttpRequest();
    if (Callback) {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (RType == "json") {
                    try {
                        resp = JSON.parse(xhttp.responseText)
                    }
                    catch (error) {
                        if (ErrorIgnore == false) {
                            throw "Response Was Not JSON";
                        } else {
                            Callback(xhttp.responseText)
                            return
                        }
                    }
                    Callback(resp)
                    return
                } else {
                    if (RType == "request") {
                        Callback(xhttp)
                        return
                    } else {
                        if (RType == "text") {
                            Callback(xhttp.responseText)
                            return
                        }
                    }
                }
                Callback(xhttp.responseText)
            }
            if (this.readyState == 4 && this.status != 200) {
                Callback([xhttp, "Error: " + this.status])
            }
        };
    }
    xhttp.open(Type, Address, true);
    if (Headers) {
        for (var header in Headers) {
            xhttp.setRequestHeader(header, Headers[header])
        }
    }
    if (Data) {
        xhttp.send(Data);
    } else {
        xhttp.send();
    }
}