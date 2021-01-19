'use strict';

const btns = document.querySelectorAll('.tab-btn'); 
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

// 이렇게 .about에 클릭 이벤트를 걸어놓으면, 이벤트 버블링에 의해 
// .event 안에 존재하는 모든 자식노드들에 클릭 이벤트가 걸림.
// 이벤트 버블링은 특정 화면 요소에서 이벤트가 발생했을 때 해당 이벤트가 더 상위의 화면 요소들로 전달되어 가는 특성을 말함.
// 이벤트 버블링은 좀 더 공부를 해보자ㅠ 지금 당장은 이해가 안 감...
about.addEventListener('click', function(e){
  // console.log(e.target);
  // event.target은 이벤트버블링의 가장 마지막에 위치한 최하위의 요소를 반환합. 즉 클릭된 요소를 기준으로 사용
  // 왜냐면 이벤트 버블링 자체가 클릭된 요소에서 시작해서 부모 요소로 이벤트를 전달하는 거니까. '클릭 요소 = 최하위 요소'

  // console.log(e.currentTarget);
  // event.currentTarget의 경우 이벤트가 바인딩된 요소, 해당하는 요소를 반환

  // console.log(e.target.dataset.id);
  // 여기서 dataset의 id(즉, data-id="" 라는 속성)의 속성값을 가지고 있는 애들, 즉 tab-btn인 애들만 값이 찍히고, 
  // 나머지는 클릭해도 undefined가 나옴. 이걸로 버튼 클릭해서 안에 content display를 바꿀 수 있겠지?
  const id = e.target.dataset.id;
  if (id) { // id === true인 경우, id값이 존재하는 경우, undefined가 아닌 경우에만 if문을 실행하겠다는 거!
    // remove active from other buttons -> 일단 모든 버튼 중에서 active가 있는 애가 있다면 active를 먼저 지워줘야 기존에 보이던 content를 지워줄 수 있겠지. 
    btns.forEach(function(btn){
      btn.classList.remove('active');
      e.target.classList.add('active'); // 클릭이벤트가 발생한 타겟 버튼에 대해서는 active를 새로 붙여줘야 하지?
    });
    // hide other articles -> 앞에서 버튼들에 했듯이 content에서도 똑같이 active 있는 애들 지우고 시작하는 거
    articles.forEach(function(article){
      article.classList.remove('active');
    });
    // 여기서 const id는 각각의 .content들에 지정해 준 id 속성값과 같으므로, 이걸로 뭔가를 해줄 수 있겠지?
    const element = document.getElementById(id);
    element.classList.add('active');
  }
});