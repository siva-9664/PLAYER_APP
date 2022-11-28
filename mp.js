let track_art =document.querySelector(".track-art");
let track_name =document.querySelector(".track-name");
let track_index=0;
is_playing =false;

let previous_button =document.querySelector(".previous-track");
let playPause_button=document.querySelector(".pause-play-track");
let next_track = document.querySelector(".next-track");

let current_track = document.createElement("audio");
let track_list =[
    {
        name:"Keseriya (Bhramastra)",
        image:"https://wapking.name/siteuploads/thumb/sft2/811_resize2x_200x200.webp",
        path:"https://pagalworld.com.se/files/download/type/64/id/6591"
    },
    {
        name:"Mere Dholna Arijit Version - Bhool Bhulaiyaa 2",
        image:"https://wapking.name/siteuploads/thumb/c/25_resize2x_200x200.webp",
        path:"https://pagalworld.com.se/files/download/type/128/id/6102"
    }
]

function loadTrack(track_index){
    current_track.src = track_list[track_index].path;
    current_track.load();
    track_art.style.backgroundImage =`url(${track_list[track_index].image})`;
    track_name.textContent = track_list[track_index].name;
}

loadTrack(track_index);

function previousTrack(){
    if(track_index > 0){
        track_index -= 1
    }else{
        track_index =0;
    }
    loadTrack(track_index);
    playTrack();
   
}
function playPauseTrack(){
    if(is_playing == false){
        playTrack();
    }else{
        pauseTrack();
    }
}

function nextTrack(){
    if(track_index < track_list.length - 1){
        track_index += 1;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}

function playTrack(){
    current_track.play();
    is_playing =true;
    playPause_button .innerHTML = '<i class="fa-solid fa-pause-circle"></i>'
}

function pauseTrack(){
    current_track.pause();
    is_playing = false;
    playPause_button.innerHTML ='<i class="fa-solid fa-play-circle"></i>'
}