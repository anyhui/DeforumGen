function generateJSON() {
    var inputs = document.getElementsByName("name[]");
    var values = document.getElementsByName("value[]");
    var json = {};
    for (var i = 0; i < inputs.length; i++) {
        var name = inputs[i].value.trim();
        var value = values[i].value.trim();
        if (value === '') {
            alert('Prompt不能为空！');
            return;
        }
        if (json.hasOwnProperty(name)) {
            alert('帧数重复！');
            return;
        }
        json[name] = value;
    }
    var result = JSON.stringify(json, null, 4);
    document.getElementById("result").value = result;
    // 新增保存到本地功能
    var filename = 'deforum_' + new Date().toISOString() + '.json';
    var blob = new Blob([result], {type: "application/json"});
    saveAs(blob, filename);
}


// 添加输入框
// function addInput() {
//     var inputs = document.getElementById("inputs");
//     var lastInput = inputs.lastElementChild;
//     var lastValue = parseInt(lastInput.querySelector('input[name="name[]"]').value);
//     if (isNaN(lastValue)) {
//       lastValue = 0;
//     }
//     var defaultIncrement = parseInt(document.getElementById("default-increment").value);
//     var newValue = lastValue + defaultIncrement;
//     var newInput = document.createElement("div");
//     newInput.innerHTML = '<div><label>帧数：</label> <input type="text" name="name[]" value="' + newValue + '" required>  <label>Prompt指令：</label> <textarea name="value[]" required></textarea>  <button type="button" onclick="removeInput(this)">删除</button> <button type="button" onclick="translateInput(this)">翻译</button><label>译文：</label> <textarea name="translation[]" readonly></textarea></div>';
//     inputs.appendChild(newInput);
//   }
// function addInput() {
//     var inputs = document.getElementById("inputs");
//     var lastInput = inputs.lastElementChild;
//     var lastValue = 0;
//     if (lastInput) {
//       lastValue = parseInt(lastInput.querySelector('input[name="name[]"]').value);
//     }
//     var defaultIncrement = parseInt(document.getElementById("default-increment").value);
//     var newValue = lastValue + defaultIncrement;
//     var newInput = document.createElement("div");
//     newInput.innerHTML = '<div><label>帧数：</label> <input type="text" name="name[]" value="' + newValue + '" required>  <label>Prompt指令：</label> <textarea name="value[]" required></textarea>  <button type="button" onclick="removeInput(this)">删除</button> <button type="button" onclick="translateInput(this)">翻译</button><label>译文：</label> <textarea name="translation[]" readonly></textarea></div>';
//     inputs.appendChild(newInput);
//   }
  
function addInput() {
    var inputs = document.getElementById("inputs");
    if (!inputs) {
    //   return;
    }
    var lastInput = inputs.lastElementChild;
    var lastValue = 0;
    if (lastInput) {
      lastValue = parseInt(lastInput.querySelector('input[name="name[]"]').value);
    }
    var defaultIncrement = parseInt(document.getElementById("default-increment").value);
    if (isNaN(defaultIncrement)) {
      defaultIncrement = 1;
    }
    var newValue = lastValue + defaultIncrement;
    var newInput = document.createElement("div");
    newInput.innerHTML = '<div><label>帧数：</label> <input type="text" name="name[]" value="' + newValue + '" required>  <label>Prompt指令：</label> <textarea name="value[]" required></textarea>  <button type="button" onclick="removeInput(this)">删除</button> <button type="button" onclick="translateInput(this)">翻译</button><label>译文：</label> <textarea name="translation[]" readonly></textarea></div>';
    inputs.appendChild(newInput);
  }
    
  
function removeInput(button) {
    var input = button.parentNode;
    input.parentNode.removeChild(input);
}

// 从剪贴板读取JSON对象
function readJSON() {
    navigator.clipboard.readText().then(function(text) {
        // 将JSON字符串解析为对象
        var data = JSON.parse(text);
        // 获取所有输入框的容器
        var inputs = document.getElementById("inputs");
        // 清空所有输入框
        inputs.innerHTML = '';
        // 遍历所有属性
        for (var key in data) {
            // 创建一个新的输入框，并设置名称和值
            var div = document.createElement("div");
            div.innerHTML = '<label>帧数：</label><input type="text" name="name[]" required value="' + key + '"><label>Prompt指令：</label><textarea name="value[]" required>' + data[key] + '</textarea><button type="button" onclick="removeInput(this)">删除</button>  <button type="button" onclick="translateInput(this)">翻译</button><label>译文：</label> <textarea name="translation[]" readonly></textarea>';
            // 将新的输入框添加到容器中
            inputs.appendChild(div);
        }
    }).catch(function(error) {
        console.error('读取剪切板内容失败：', error);
    });
}

// 将JSON对象复制到剪贴板
function copyJSON() {
    // 获取JSON字符串
    var json = document.getElementById("result").value;
    // 将JSON字符串复制到剪贴板
    navigator.clipboard.writeText(json);
}

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function translateInput(button) {
   alert("备用功能，我不会写")
   
}
// function translateInput(button) {
//     var inputDiv = button.parentNode;
//     var valueTextarea = inputDiv.querySelector('textarea[name="value[]"]');
//     var translationTextarea = inputDiv.querySelector('textarea[name="translation[]"]');
//     var value = valueTextarea.value;
//     var translation = translate(value);
//     alert("我不会写");
//     translationTextarea.value = translation;
// }
