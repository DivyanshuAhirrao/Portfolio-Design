function streamVedio() {
    const video = document.querySelector('video')
    const option = {video:true}
    navigator.mediaDevices.getUserMedia(option)
    .then(stream=>vedio.srcObject=stream)
    .catch(err=>console.log(err))
}