var content = document.getElementsByClassName('content');
function hideContent() {
    if (document.getElementById('empty').style.display == '') {
        document.getElementById('empty').style.display = 'none';
    }
    for(var i=0; i<content.length; i++) {
        content[i].style.display = 'none';
    }
}
function show(content) {
    if(window.prevContent != content) {
        window.prevContent = content;
        hideContent()
        document.getElementById(content).style.display = 'block';
        loadQA(content, eval(content));
    }
}
function loadQA(content, QA) {
    var contents = "";
    for(var i=0; i<QA.length; i++) {
        var qacontent = '<div class="QAColumns"><h3 class="Question">' + QA[i][0] + '</h3>' +
        '<h4 class="Answer">' + QA[i][1] + '</h4></div>';
        contents += qacontent;
    }
    document.getElementById(content).innerHTML = contents;
}
var MLContent = [
    ['what is Machine learning?', 'Machine Learning is a subset of Artificial Intelligence.']
];
var PythonContent = [
    ['what is Python?', 'Python is a programming language.'],
    ['what is Intepreter?', 'Intepreter is a IDE.']
];