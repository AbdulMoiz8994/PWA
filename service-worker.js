var cacheName= "demo-app";

var fileTOCache=[
    '/',
    '/index.js',
    '/index.html',
    '/About.html'

]


self.addEventListener('activate',(e) =>{
    console.log("sericeWorker Activated");
});

self.addEventListener('install',(e) =>{
   console.log("Service Workder insatll");
   e.waitUntil(
       caches.open(cacheName).then(function(cache){
            console.log("serviceWorker we are saving our file in cache");
          return  cache.addAll(fileTOCache)
       })
   )
});

self.addEventListener('fetch',(e) =>{
    console.log("serviceWorker Fetch",e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) =>{
            return response || fetch(e.request)
        })
    )
})