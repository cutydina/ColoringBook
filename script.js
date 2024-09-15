let drawing = document.querySelector('#drawing');
let selectedColor = '#E80088';
let history = []; 

document.querySelectorAll('.color').forEach(function(colorDiv) {
    colorDiv.addEventListener('click', function() {
        selectedColor = this.getAttribute('data-color');
        document.querySelectorAll('.color').forEach(div => div.classList.remove('selected'));      
        this.classList.add('selected');
    });
});

drawing.addEventListener('click', function(event){
    if (event.target.tagName === 'path' || event.target.tagName === 'rect' || event.target.tagName === 'circle' || event.target.tagName === 'polygon') {
        let previousColor = event.target.style.fill;
        history.push({ element: event.target, color: previousColor }); 
        event.target.style.fill = selectedColor;
    }
});

document.getElementById('undo-button').addEventListener('click', function() {
    if (history.length > 0) {
        let lastAction = history.pop(); 
        lastAction.element.style.fill = lastAction.color;
    }
});