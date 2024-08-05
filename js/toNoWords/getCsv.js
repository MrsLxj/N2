var inputType = "local";
var stepped = 0, rowCount = 0, errorCount = 0, firstError;
var start, end;
var firstRun = true;
var maxUnparseLength = 10000;
function printStats(msg) {
    if (msg)
        console.log(msg);
    // console.log("       Time:", (end - start || "(Unknown; your browser does not support the Performance API)"), "ms");
    // console.log("  Row count:", rowCount);
    if (stepped)
        console.log("    Stepped:", stepped);
    console.log("     Errors:", errorCount);
    if (errorCount)
        console.log("First error:", firstError);
}
function now() {
    return typeof window.performance !== 'undefined'
        ? window.performance.now()
        : 0;
}
function buildConfig() {
    return {
        delimiter: $('#delimiter').val(),
        header: $('#header').prop('checked'),
        dynamicTyping: $('#dynamicTyping').prop('checked'),
        skipEmptyLines: $('#skipEmptyLines').prop('checked'),
        preview: parseInt($('#preview').val() || 0),
        step: $('#stream').prop('checked') ? stepFn : undefined,
        encoding: $('#encoding').val(),
        worker: $('#worker').prop('checked'),
        comments: $('#comments').val(),
        complete: completeFn,
        error: errorFn,
        download: inputType == "remote"
    };
}

function errorFn(err, file) {
    end = now();
    console.log("ERROR:", err, file);
    enableButton();
}
function enableButton() {
    $('#submit').prop('disabled', false);
}