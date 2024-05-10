// var wordList = [
//     { id: 1, lv: 'N1', source: '', scene: '', word: '', reading: [{ text: '', example: '' }], qiaoji: '', note: '', memory: '' }
// ]

//读取文件
function fileImport() {
    var selectedFile = document.getElementById('files').files[0];
    var name = selectedFile.name;//读取选中文件的文件名
    var size = selectedFile.size;//读取选中文件的大小

    var reader = new FileReader();//这是核心,读取操作就是由它完成.
    reader.readAsText(selectedFile);//读取文件的内容,也可以读取文件的URL
    reader.onload = function () {
        //当读取完成后回调这个函数,然后此时文件的内容存储到了result中,直接操作即可
        getCsv(this.result);
    }
}
//获取csv内容
function getCsv(csvContent) {
    var records = csvContent.split("\n");
    var result = [];
    var record = { word: '', reading: [] };
    var index = 0;
    for (var i = 1; i < records.length; i++) {
        var fields = records[i].split(",");
        if (fields[0] !== "") {
            record = { word: '', reading: [] };
            record.word = fields[0];
            record.reading.push({ text: fields[1], example: fields[2].Replace('\r'), memoryAnswer: '', memoryInput: '', memoryCount: '', memoryError: '' });
            index++;
        } else {
            result[index - 1].reading.push({ text: fields[1], example: fields[2].toString().Replace('\r'), memoryAnswer: '', memoryInput: '', memoryCount: '', memoryError: '' });
            record = { word: '', reading: [] };
        }
        result.push(record);
    }
    console.log(JSON.stringify(result), 'csvContent');
}

//创建下载
function createAndDownloadFile(fileName, content) {
    // var aTag = document.createElement('a');
    // var blob = new Blob([content]);
    // aTag.download = fileName;
    // aTag.href = URL.createObjectURL(blob);
    // aTag.click();
    // URL.revokeObjectURL(blob);
    var blob = new Blob([content], { type: "application/octet-stream" });
    //判断ie
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, "错题本.txt");
    } else {
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "错题本.txt";
        document.body.appendChild(a);
        a.onclick = function () {
            document.body.removeChild(a);
        };
        a.click();
    }


} 