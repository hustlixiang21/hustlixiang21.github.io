const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,   
    autoplay: false,  
    audio: [
	 {
		name: 'secret base ~君がくれたもの~',
		artist: '茅野愛衣 / 戸松遥 / 早見沙織',
		url: 'http://music.163.com/song/media/outer/url?id=33911781.mp3',
		cover: 'http://p1.music.126.net/daZcHVIJicL3wXJWMIjAng==/7926379325753633.jpg?',
	    lrc: 'images/.lrc'
	 },
    ]
});

