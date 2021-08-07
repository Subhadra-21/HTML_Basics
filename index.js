// Import stylesheets
import './style.css';
import './api.js';
import './canvas.js';

submitBtn.onclick = function(e) {
  console.log(document.forms);
  var form1 = document.forms.form1;
  console.log(form1);
  console.log(form1.elements.numbers);
  var elems = form1.elements.numbers;
  console.log(elems[0].value);
  console.log(elems[1].value);
  //back reference -> getting form from formelemnts
  console.log(elems[1].form);
};

var editablelikeDiv = document.getElementById('editablelike');
var textarea = document.createElement('textarea');
textarea.className = 'editablelike';
textarea.id = 'textarea1';

editablelikeDiv.addEventListener('click', function(e) {
  textarea.value = e.target.innerHTML;
  e.target.replaceWith(textarea);
  textarea.focus();
});

textarea.addEventListener('blur', function(e) {
  editablelikeDiv.innerHTML = textarea.value;
  textarea.replaceWith(editablelikeDiv);
});

//cut,copy,paste
//https://plnkr.co/edit/INN00qMSNKCLijyx

document.getElementById('form-one').addEventListener('submit', function(e) {
  console.log('event submitted');
});

window.onbeforeunload = function() {
  alert('Leave now?');
};

var observer = new MutationObserver(function(mutators) {
  console.log(mutators);
  console.log(mutators.oldValue);
});
observer.observe(editableDiv, {
  childList: true,
  subtree: true,
  attributes: true,
  characterData: true,
  characterDataOldValue: true
});

console.log(window.frames);

readFile.onchange = function(e) {
  console.log(e.target.files[0].name);
  var file = e.target.files[0];
  var reader = new FileReader(); //no param
  reader.readAsText(file);
  reader.onload = function(e) {
    console.log(reader.result);
    console.log(e);
  };
  reader.onerror = function(e) {
    console.log(reader.error);
  };
};
