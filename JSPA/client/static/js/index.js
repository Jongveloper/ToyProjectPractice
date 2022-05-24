import Dashboard from '../views/Dashboard.js';
import Posts from '../views/Posts.js';
import Settings from '../views/Settings.js';
import NotFound from '../views/NotFound.js';

// 페이지 전환 함수
const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};
const router = async () => {
  const routes = [
    { path: '/', view: Dashboard },
    { path: '/posts', view: Posts },
    { path: '/settings', view: Settings },
    { path: '/404', view: NotFound },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  // default Routes를 / 로 설정
  if (!match) {
    match = {
      route: routes[routes.length - 1],
      isMatch: true,
    };
  }

  // console.log(match.route.view());

  const view = new match.route.view();

  document.querySelector('#app').innerHTML = await view.getHtml();
};

// 뒤로가기 하거나 새로고침 했을 때 router도 그 페이지에 맞게 동작하도록하는 설정
window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  // 클릭 이벤트 발생 시,
  // 해당 타겟이 'data-link' attribute가 있다면
  // 페이지 이동 함수 실행
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
