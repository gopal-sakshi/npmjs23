/*
    curl http://localhost:3033 --include
    - we get the http response headers

            HTTP/1.1 200 OK
            X-Powered-By: Express
            Content-Type: application/json; charset=utf-8
            Content-Length: 20
            ETag: W/"14-mI8m28UzN+PiAXO2f1uIJ5l09IU"
            Date: Fri, 09 Feb 2024 10:09:52 GMT
            Connection: keep-alive
            Keep-Alive: timeout=5

    "X-Powered-By" header
    - if prefixed by X- ===> its a non-standard header; defined by developer and can mean anything
    - but generally "X-Powered-By" ===> used by backend technologies like Express/Ajax to return version, framework, library in http response
    - but this should be omitted (as recommended by OWASP) - dont give public info about your tech stack
    - 

    plus, helmet adds many other important headers in http response, that stops attackers
    - X-Frame-Options
    - X-Content-Type-Options
    - Strict-Transport-Security
    - Referrer-Policy
    - Content-Security-Policy
    

*/