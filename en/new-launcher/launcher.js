//server processor
const serverdata = [["https://balancer.eu.tankionline.com/balancer/",                     "main",    "https://tankionline.com/play",                                                                                                                                                                                                                                                                "Main server"], 
                    ["https://balancer.public-deploy1.test-eu.tankionline.com/balancer",  "test1",   "https://public-deploy1.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy1.test-eu.tankionline.com/config.xml&resources=../resources&balancer=https://balancer.public-deploy1.test-eu.tankionline.com/balancer",                               "Test Server #1"],
                    ["https://balancer.public-deploy2.test-eu.tankionline.com/balancer",  "test2",   "https://public-deploy2.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy2.test-eu.tankionline.com/config.xml&resources=../resources&balancer=https://balancer.public-deploy2.test-eu.tankionline.com/balancer",                               "Test Server #2"],
                    ["https://balancer.public-deploy3.test-eu.tankionline.com/balancer",  "test3",   "https://public-deploy3.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy3.test-eu.tankionline.com/config.xml&resources=../resources&balancer=https://balancer.public-deploy3.test-eu.tankionline.com/balancer",                               "Test Server #3"],
                    ["https://balancer.public-deploy4.test-eu.tankionline.com/balancer",  "test4",   "https://public-deploy4.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy4.test-eu.tankionline.com/config.xml&resources=../resources&balancer=https://balancer.public-deploy4.test-eu.tankionline.com/balancer",                               "Test Server #4"],
                    ["https://balancer.public-deploy5.test-eu.tankionline.com/balancer",  "test5",   "https://public-deploy5.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy5.test-eu.tankionline.com/config.xml&resources=../resources&balancer=https://balancer.public-deploy5.test-eu.tankionline.com/balancer",                               "Test Server #5"],
                    ["https://balancer.public-deploy6.test-eu.tankionline.com/balancer",  "test6",   "https://public-deploy6.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy6.test-eu.tankionline.com/config.xml&resources=../resources&balancer=https://balancer.public-deploy6.test-eu.tankionline.com/balancer",                               "Test Server #6"],
                    ["https://balancer.public-deploy7.test-eu.tankionline.com/balancer",  "test7",   "https://public-deploy7.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy7.test-eu.tankionline.com/config.xml&resources=../resources&balancer=https://balancer.public-deploy7.test-eu.tankionline.com/balancer",                               "Test Server #7"],
                    ["https://balancer.public-deploy8.test-eu.tankionline.com/balancer",  "test8",   "https://public-deploy8.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy8.test-eu.tankionline.com/config.xml&resources=../resources&balancer=https://balancer.public-deploy8.test-eu.tankionline.com/balancer",                               "Test Server #8"],
                    ["https://balancer.public-deploy9.test-eu.tankionline.com/balancer",  "test9",   "https://public-deploy9.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy9.test-eu.tankionline.com/config.xml&resources=../resources&balancer=https://balancer.public-deploy9.test-eu.tankionline.com/balancer",                               "Test Server #9"],
                    ["https://balancer.review-1-public.test-ru.tankionline.com/balancer", "review1", "https://client-review-1-public.test-ru.tankionline.com/?config-template=https://c{server}.review-1-public.test-ru.tankionline.com/config.xml&resources=https://resources-review-1-public.test-ru.tankionline.com&balancer=https://balancer.review-1-public.test-ru.tankionline.com/balancer", "Client Review #1"],
                    ["https://balancer.review-2-public.test-ru.tankionline.com/balancer", "review2", "https://client-review-2-public.test-ru.tankionline.com/?config-template=https://c{server}.review-2-public.test-ru.tankionline.com/config.xml&resources=https://resources-review-2-public.test-ru.tankionline.com&balancer=https://balancer.review-2-public.test-ru.tankionline.com/balancer", "Client Review #2"],
                    ["https://balancer.review-3-public.test-ru.tankionline.com/balancer", "review3", "https://client-review-3-public.test-ru.tankionline.com/?config-template=https://c{server}.review-3-public.test-ru.tankionline.com/config.xml&resources=https://resources-review-3-public.test-ru.tankionline.com&balancer=https://balancer.review-3-public.test-ru.tankionline.com/balancer", "Client Review #3"],
                    ["https://balancer.review-4-public.test-ru.tankionline.com/balancer", "review4", "https://client-review-4-public.test-ru.tankionline.com/?config-template=https://c{server}.review-4-public.test-ru.tankionline.com/config.xml&resources=https://resources-review-4-public.test-ru.tankionline.com&balancer=https://balancer.review-4-public.test-ru.tankionline.com/balancer", "Client Review #4"],
                    ["https://balancer.review-5-public.test-ru.tankionline.com/balancer", "review5", "https://client-review-5-public.test-ru.tankionline.com/?config-template=https://c{server}.review-5-public.test-ru.tankionline.com/config.xml&resources=https://resources-review-5-public.test-ru.tankionline.com&balancer=https://balancer.review-5-public.test-ru.tankionline.com/balancer", "Client Review #5"],
                    ["https://balancer.review-6-public.test-ru.tankionline.com/balancer", "review6", "https://client-review-6-public.test-ru.tankionline.com/?config-template=https://c{server}.review-6-public.test-ru.tankionline.com/config.xml&resources=https://resources-review-6-public.test-ru.tankionline.com&balancer=https://balancer.review-6-public.test-ru.tankionline.com/balancer", "Client Review #6"],
                    ["https://balancer.review-7-public.test-ru.tankionline.com/balancer", "review7", "https://client-review-7-public.test-ru.tankionline.com/?config-template=https://c{server}.review-7-public.test-ru.tankionline.com/config.xml&resources=https://resources-review-7-public.test-ru.tankionline.com&balancer=https://balancer.review-7-public.test-ru.tankionline.com/balancer", "Client Review #7"],
                    ["https://balancer.review-8-public.test-ru.tankionline.com/balancer", "review8", "https://client-review-8-public.test-ru.tankionline.com/?config-template=https://c{server}.review-8-public.test-ru.tankionline.com/config.xml&resources=https://resources-review-8-public.test-ru.tankionline.com&balancer=https://balancer.review-8-public.test-ru.tankionline.com/balancer", "Client Review #8"],
                    ["https://balancer.review-9-public.test-ru.tankionline.com/balancer", "review9", "https://client-review-9-public.test-ru.tankionline.com/?config-template=https://c{server}.review-9-public.test-ru.tankionline.com/config.xml&resources=https://resources-review-9-public.test-ru.tankionline.com&balancer=https://balancer.review-9-public.test-ru.tankionline.com/balancer", "Client Review #9"],
                    ["https://balancer.3dtank.com/balancer/",                             "3dtank",  "https://3dtank.com/play/", '3D<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 14 8" fill="currentColor" style="height: 0.8em;display: inline;margin-top: 0.15em;"><path fill-rule="evenodd" d="m11.3 0c0.1 0 0.2 0.1 0.2 0.3v0.7h2.2c0.2 0 0.3 0.1 0.3 0.3v0.5c0 0.1-0.1 0.2-0.3 0.2h-2.2v1h2.2c0.2 0 0.3 0.1 0.3 0.3v2.5c0 0.1-0.1 0.2-0.3 0.2h-1.2v1h1.2c0.2 0 0.3 0.1 0.3 0.3v0.5c0 0.1-0.1 0.2-0.3 0.2h-2c-0.1 0-0.2-0.1-0.2-0.2v-1.8h-1v0.5c0 0.8-0.7 1.5-1.5 1.5h-0.8c-0.1 0-0.2-0.1-0.2-0.2v-0.5c0-0.2 0.1-0.3 0.2-0.3h0.8c0.3 0 0.5-0.2 0.5-0.5v-0.5h-1.3c-0.1 0-0.2-0.1-0.2-0.2v-2.5c0-0.2 0.1-0.3 0.2-0.3h2.3v-1h-2.3c-0.1 0-0.2-0.1-0.2-0.2v-0.5c0-0.2 0.1-0.3 0.2-0.3h2.3v-0.7c0-0.2 0.1-0.3 0.2-0.3zm1.8 5v-1h-4v1z"/><path fill-rule="evenodd" d="m3 7.3c0-0.2 0.1-0.3 0.3-0.3h3.5c0.1 0 0.2 0.1 0.2 0.3v0.5c0 0.1-0.1 0.2-0.3 0.2h-3.5c-0.1 0-0.2-0.1-0.2-0.2zm3.8-6.3c0.1 0 0.2 0.1 0.2 0.3v4.5c0 0.1-0.1 0.2-0.2 0.2h-3.5c-0.2 0-0.3-0.1-0.3-0.3v-4.5c0-0.1 0.1-0.2 0.3-0.2zm-0.8 4v-1h-2v1zm-2-2h2v-1h-2zm-2.8-2c0.2 0 0.3 0.1 0.3 0.3v0.7h0.3c0.1 0 0.2 0.1 0.2 0.3v0.5c0 0.1-0.1 0.2-0.2 0.2h-0.3v4h0.3c0.1 0 0.2 0.1 0.2 0.3v0.5c0 0.1-0.1 0.2-0.2 0.2h-1.5c-0.2 0-0.3-0.1-0.3-0.2v-0.5c0-0.2 0.1-0.3 0.3-0.3h0.2v-4h-0.2c-0.2 0-0.3-0.1-0.3-0.2v-0.5c0-0.2 0.1-0.3 0.3-0.3h0.2v-0.8c0-0.1 0.1-0.2 0.3-0.2z"/></svg>']];
let statuses = {};
for (let i = 0; i < serverdata.length; i++){
    console.log(i)
    let servstatus = 404;
    let xhr = new XMLHttpRequest();
    fetch(serverdata[i][0])
    .then(response => {
        servstatus = response.status;
        let thisserverdata = [servstatus, serverdata[i][1]];
        statuses[serverdata[i][1]] = servstatus
    })
    .catch(error => {
        let thisserverdata = [servstatus, serverdata[i][1]];
        statuses[serverdata[i][1]] = servstatus
    });
}
console.log(statuses)
console.log(statuses["3dtank"])
window.onload = (event) => {
    const servselect = document.querySelector('div#servselect');
    for (let i = 0; i < serverdata.length; i++){
        let thisserver = document.createElement("span");
        thisserver.innerHTML += serverdata[i][3];
        thisserver.setAttribute('id', serverdata[i][1]);
        thisserver.setAttribute('link', serverdata[i][2]);
        thisserver.setAttribute('i', i);
        thisserver.classList.add('option');
        thisserver.setAttribute('status', 'unknown');
        thisserver.classList.toggle('unknown');
        if (statuses[serverdata[i][1]] == 200){
            thisserver.classList.add('online');
            thisserver.setAttribute('status', 'online');
            thisserver.classList.toggle('unknown');
        }
        else if (statuses[serverdata[i][1]] == 404){
            thisserver.classList.add('offline');
            thisserver.setAttribute('status', 'offline');
            thisserver.classList.toggle('unknown');
        }
        if (thisserver.getAttribute('status') == "unknown"){thisserver.setAttribute('title', "Error: could not get info about server status")}
        servselect.appendChild(thisserver);
    }
    const serveri = servselect.querySelectorAll('span');
    const fight = document.querySelector('a#play');
    const servselecttext = document.querySelector('div.select:nth-of-type(1)>span.selected');
    const date = new Date(); 
    const month = date.getMonth();
    const day = date.getDate(); 
    serveri.forEach(serveris => {
        serveris.addEventListener('click', () => {
            const id = serveris.getAttribute('id');
            const index = serveris.getAttribute('i');
            const statuss = serveris.getAttribute('status');
            fight.setAttribute('href', serverdata[index][2]);
            servselecttext.innerHTML = serverdata[index][3];
            if (id == "3dtank" && month == 3 && day == 1){
                fight.textContent = "Bĭnggìlìng!"
            }
            else{
                fight.textContent = "FIGHT!"
            }
            servselecttext.classList.remove("online");
            servselecttext.classList.remove("offline");
            servselecttext.classList.add(statuss);
        });
    });
    //musicprocessor
    const audio = document.querySelector('audio#music');
    const audiobutton = document.querySelector('button.music');
    if (localStorage.getItem("mtb_soundstatus") != "off"){
        if (audio.paused) {
            audio.play();
        }
    } else {
        if (!audio.paused == false) {
            audio.pause();
            audiobutton.classList.add("muted");
        }
    }
    audio.volume = 1;
    function toggleAudio () {
        if (audio.paused) {
            audio.play();
            audiobutton.classList.remove("muted");
            localStorage.setItem("mtb_soundstatus", "on");
        }
        else{
            if (audio.volume == "0") {
                audio.volume = 1;
                audiobutton.classList.remove("muted");
                localStorage.setItem("mtb_soundstatus", "on");
            } else{
                audio.volume = "0";
                audiobutton.classList.add("muted");
                localStorage.setItem("mtb_soundstatus", "off");
            }
        }
    }
    audiobutton.addEventListener('click', toggleAudio);
    //wallpapers
    window.onkeyup = function(e) {
        var event = e.which || e.keyCode || 0;
        if (event == 27) {
            const wpchoose = document.querySelector("div#wpchoose");
            wpchoose.classList.remove("open")
        }
    }
};