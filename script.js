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
    ['What is Machine Learning?',
    'Machine learning is an subset of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. It focuses on the development of computer programs that can access data and use it to learn for themselves.'],
    ['What Are the Different Types of Machine Learning?', 
    'Supervised Learning, <br/> Unsupervised Learning, <br/> Reinforcement Learning'],
    ['What is Cross-Validation?',
    'Cross-Validation in Machine Learning is a statistical resampling technique that uses different parts of the dataset to train and test a machine learning algorithm on different iterations. The aim of cross-validation is to test the model\'s ability to predict a new set of data that was not used to train the model. Cross-validation avoids the overfitting of data.'],
    ['What is Overfitting?',
    'The Overfitting is a situation that occurs when a model learns the training set too well, taking up random fluctuations in the training data as concepts. These impact the model\'s ability to generalize and don\'t apply to new data. '],
    ['Explain the Confusion Matrix with Respect to Machine Learning Algorithms?',
    'A confusion matrix (or error matrix) is a specific table that is used to measure the performance of an algorithm. It is mostly used in supervised learning; in unsupervised learning, it\'s called the matching matrix.'],
    ['What is Deep Learning?',
    'The Deep learning is a subset of machine learning that involves systems that think and learn like humans using artificial neural networks. The term \'deep\' comes from the fact that you can have several layers of neural networks.']
];
var PythonContent = [
    ['what is Python?', 
    'Python is a programming language.'],
    ['what is Intepreter?', 
    'Intepreter is a IDE.']
];