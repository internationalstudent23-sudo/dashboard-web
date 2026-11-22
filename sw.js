// 서비스 워커 설치 및 활성화
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// 네트워크 요청 처리 (실시간 구글 시트 데이터를 항상 최신으로 유지)
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});