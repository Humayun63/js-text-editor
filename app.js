const textarea = document.getElementById('textarea');
document.getElementById('style').addEventListener('click', function (event) {
    const id = event.target.id;
    if (id === 'bold') {
        if (textarea.style.fontWeight === 'bold') {
            textarea.style.fontWeight = 'normal';
            event.target.style.backgroundColor = 'inherit';
        } else {
            textarea.style.fontWeight = 'bold';
            event.target.style.backgroundColor = 'blue';
        }
    } else if (id === 'italic') {
        if (textarea.style.fontStyle === 'italic') {
            textarea.style.fontStyle = 'normal';
            event.target.style.backgroundColor = 'inherit';
        } else {
            textarea.style.fontStyle = 'italic';
            event.target.style.backgroundColor = 'blue';
        }
    } else {
        if (textarea.style.textDecoration === 'underline') {
            textarea.style.textDecoration = 'none';
            event.target.style.backgroundColor = 'inherit';
        } else {
            textarea.style.textDecoration = 'underline';
            event.target.style.backgroundColor = 'blue';
        }
    }
});
document.getElementById('alignment').addEventListener('click', function (event) {
    const id = event.target.id;
    if (id === 'left') {
        textarea.style.textAlign = 'left';
    } else if (id === 'center') {
        textarea.style.textAlign = 'center';
    } else if (id === 'right') {
        textarea.style.textAlign = 'right';
    } else {
        textarea.style.textAlign = 'justify';
    }
});
document.getElementById('font-size').addEventListener('change', function (event) {
    console.log(event.target)
    const value = event.target.value;
    // const value = parseInt(valueString);
    textarea.style.fontSize = value + 'px';
});
document.getElementById('increase-font-size').addEventListener('click', function () {
    const valueElement = document.getElementById('font-size');
    let value = parseInt(valueElement.value);
    value++;
    valueElement.value = value;
    textarea.style.fontSize = value + 'px';
});
document.getElementById('text-color').addEventListener('change', function (event) {
    const value = event.target.value;
    textarea.style.color = value;
});
