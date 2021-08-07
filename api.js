console.log('api file');

//URL

var x = new URL(
  '/us/webapps/home?p1=v1&p2=v2#hashcode1/2/3',
  'https://google.com:4000'
);
console.log('url is:', x.href);
console.log(x.protocol);
console.log(x.host);
console.log(x.pathname);
console.log(x.port);
console.log(x.search);
console.log(x.hash);
console.log(x.origin);
console.log(x.searchParams.get('p1'));
console.log(Object.fromEntries(x.searchParams));

var xen = encodeURI(x);
console.log('xen', xen);

var den = decodeURI(xen);
console.log('den', den);

var xencomp = encodeURIComponent(x);
console.log('xencomp', xencomp);

var dencomp = decodeURIComponent(xencomp);
console.log('dencomp', dencomp);

//
animate1id.onclick = function(e) {
  e.target.classList.toggle('animate11');
};

//circle
showCircle.onclick = function(e) {
  maincircleid.classList.toggle('animateCircle');
};

var x = [1, 2, [3, 4, [4, 5, [7, 8]]], [9, 10], 11, , , 12, 13];
console.log(x.flat(Infinity));
var y = x.flatMap(a => {
  console.log(a);
  return a;
});
console.log('y', y);

//BOM
// location.href = 'https://www.google.com';
// location.assign('https:///www.google.com');

var url = new URL('https://stackblitz.com/edit/js-ijwgxu?file=api.js&one=1'); //location.href
console.log(url.searchParams.get('file'));

//OR
var s = new URLSearchParams('?file=api.js&one=1');
console.log(s);
for (const key of s.keys()) {
  console.log(key);
}

//history

window.onpopstate = function(state) {
  console.log('state', state.state);
};

history.pushState({ name: 'first page' }, '', '#first');
history.pushState('its second page', '', '#second');
console.log('history', history.length);
history.forward();
history.back();

//notification
async function note() {
  console.log('notification');
  let permission = await Notification.requestPermission();
  console.log('permission', permission);
  const greeting = new Notification('Hi, How are you?', {
    body: 'Have a good day, This is JS',
    icon: 'https://js.cx/clipart/train.gif'
  });
  // setTimeout(() => greeting.close(), 10);
  greeting.addEventListener('show', function() {
    console.log('showed');
  });
  greeting.addEventListener('close', function() {
    console.log('closed');
  });
  greeting.addEventListener('click', function() {
    console.log('clicked');
  });
  greeting.addEventListener('error', function() {
    console.log('error');
  });
}

note()
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
