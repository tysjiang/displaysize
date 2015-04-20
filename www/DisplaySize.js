window.BCB_getDisplaySize = function(str, callback) {
    cordova.exec(callback, function(err) {
        callback('Can not get size');
    }, "DisplaySize", "get", [str]);
};

