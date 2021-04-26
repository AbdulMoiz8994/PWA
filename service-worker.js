var cacheName = "demo-app";

// addAll takes an array that's why are making in  array []
var fileTOCache = [
  "/",
  "/index.js",
  "/index.html",
  // '/About.html'  
];

self.addEventListener("activate", (e) => {
  console.log("sericeWorker Activated");
});

self.addEventListener("install", (e) => {
  console.log("Service Workder insatll");
  e.waitUntil(
    caches.open(cacheName).then(function (data) {
      console.log("serviceWorker we are saving our file in cache");
      return data.addAll(fileTOCache);
    })
  );
});

self.addEventListener("fetch", (e) => {
  console.log("serviceWorker Fetch", e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
