if('serviceWorker' in navigator){
    navigator.serviceWorker.register('service-worker.js').then(function(data) {
        console.log('navigator ' ,data);
    }).catch(function(err){
           console.log("Some thing went wrong with service workder");
           console.log(err);
    })


}else{
    console.log("Service Worker is not avaliable");
}