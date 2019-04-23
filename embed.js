(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/foldio/",
    "workerjs": "/foldio/worker.js",
    "tdworkerjs": "/foldio/tdworker.js",
    "monacoworkerjs": "/foldio/monacoworker.js",
    "pxtVersion": "0.19.20",
    "pxtRelId": "",
    "pxtCdnUrl": "/foldio/",
    "commitCdnUrl": "/foldio/",
    "blobCdnUrl": "/foldio/",
    "cdnUrl": "/foldio/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "simUrl": "/foldio/simulator.html",
    "partsUrl": "/foldio/siminstructions.html",
    "runUrl": "/foldio/run.html",
    "docsUrl": "/foldio/docs.html",
    "isStatic": true
};

    var scripts = [
        "/foldio/highlight.js/highlight.pack.js",
        "/foldio/bluebird.min.js",
        "/foldio/typescript.js",
        "/foldio/semantic.js",
        "/foldio/marked/marked.min.js",
        "/foldio/lzma/lzma_worker-min.js",
        "/foldio/blockly/blockly_compressed.js",
        "/foldio/blockly/blocks_compressed.js",
        "/foldio/blockly/msg/js/en.js",
        "/foldio/pxtlib.js",
        "/foldio/pxtcompiler.js",
        "/foldio/pxtblocks.js",
        "/foldio/pxteditor.js",
        "/foldio/pxtsim.js",
        "/foldio/target.js",
        "/foldio/pxtrunner.js"
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/foldio/jquery.js")

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
