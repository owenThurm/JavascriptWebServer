console.log('index.js called');

info = document.createElement('div');
info.innerText = 'hello world API request'
document.body.appendChild(info);

fetch('http://data.nba.net/prod/draft/2018/draft_pick.json').then((res) => {
  return res.json();
}).then((json) => {
  console.log(json);
});

