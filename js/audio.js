
function audioApp(){
	var audio = new Audio();

	var audio_ext = ".mp3";
	var audio_index = 1;
	var is_playing = false;
	var playingtrack;
	var trackbox = document.getElementById("trackbox");
	var tracks = {
	    "track1":["Don't Stop", "dont_stop"],
		"track2":["Try Hard", "try_hard"],
		"track3":["Unpredictable", "unpredictable"]
	};
	for(var track in tracks){
		var tb = document.createElement("div");
		var pb = document.createElement("button");
		var tn = document.createElement("div");
		tb.className = "trackbar";
		pb.className = "playbutton";
		tn.className = "trackname";
		tn.innerHTML = audio_index+". "+tracks[track][0];
		pb.id = tracks[track][1];
		pb.addEventListener("click", switchTrack);
		tb.appendChild(pb);
		tb.appendChild(tn);
		trackbox.appendChild(tb);
		audio_index++;
	}
	audio.addEventListener("ended",function(){
	    document.getElementById(playingtrack).style.background = "url(../utilities/play.png)";
		playingtrack = "";
		is_playing = false;
	});
	function switchTrack(event){
		if(is_playing){
		    if(playingtrack != event.target.id){
			    is_playing = true;
				document.getElementById(playingtrack).style.background = "url(../utilities/play.png)";
			    event.target.style.background = "url(../utilities/pause.png)";
			    audio.src = "../utilities/"+event.target.id+".mp3";
	            audio.play();
			} else {
			    audio.pause();
			    is_playing = false;
				event.target.style.background = "url(../utilities/play.png)";
			}
		} else {
			is_playing = true;
			event.target.style.background = "url(../utilities/pause.png)";
			if(playingtrack != event.target.id){
				audio.src = "../utilities/"+event.target.id+".mp3";
			}
	        audio.play();
		}
		playingtrack = event.target.id;
	}
}
window.addEventListener("load", audioApp);