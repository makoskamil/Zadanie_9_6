var list = document.getElementById('list'),
    add = document.getElementById('addElem');

add.addEventListener('click', function() {
    var element = document.createElement('li');
    var liListElem = document.getElementsByTagName('li').length;
    element.innerHTML = 'item' + liListElem;
    
    list.appendChild(element);
});