var c = $window({title:"Notepad", width: 273, height:306, style: {background: '#f9f99b'}, html:"<p id='notepad'>Insert Here...</p>"});
document.getElementById("notepad").contentEditable=true;
document.getElementById("notepad").cursor = 'text'
c.el.header.style.background = '#f9f99b';
c.el.header.style.border = 'solid black 1px';
c.el.header.children[0].style.color = 'black'
c.el.header.children[1].style.background = '#3c89ff none repeat scroll 0% 0%'
c.el.header.children[2].remove()
c.el.header.children[2].style.border = 'solid black 1px';
c.el.header.children[1].style.border = 'solid black 1px';
c.el.header.children[2].style.background = 'red';
