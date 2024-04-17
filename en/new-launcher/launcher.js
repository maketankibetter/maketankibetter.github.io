//server processor
const serverdata = [["https://balancer.eu.tankionline.com/balancer/", "main", "https://tankionline.com/play", "Main server"], 
                  ["https://balancer.public-deploy1.test-eu.tankionline.com/balancer", "test1", "https://public-deploy1.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy1.test-eu.tankionline.com/config.xml&amp;resources=../resources&amp;balancer=https://balancer.public-deploy1.test-eu.tankionline.com/balancer", "Test Server #1"],
                  ["https://balancer.public-deploy2.test-eu.tankionline.com/balancer", "test2", "https://public-deploy2.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy2.test-eu.tankionline.com/config.xml&amp;resources=../resources&amp;balancer=https://balancer.public-deploy2.test-eu.tankionline.com/balancer", "Test Server #2"],
                  ["https://balancer.public-deploy3.test-eu.tankionline.com/balancer", "test3", "https://public-deploy3.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy3.test-eu.tankionline.com/config.xml&amp;resources=../resources&amp;balancer=https://balancer.public-deploy3.test-eu.tankionline.com/balancer", "Test Server #3"],
                  ["https://balancer.public-deploy4.test-eu.tankionline.com/balancer", "test4", "https://public-deploy4.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy4.test-eu.tankionline.com/config.xml&amp;resources=../resources&amp;balancer=https://balancer.public-deploy4.test-eu.tankionline.com/balancer", "Test Server #4"],
                  ["https://balancer.public-deploy5.test-eu.tankionline.com/balancer", "test5", "https://public-deploy5.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy5.test-eu.tankionline.com/config.xml&amp;resources=../resources&amp;balancer=https://balancer.public-deploy5.test-eu.tankionline.com/balancer", "Test Server #5"],
                  ["https://balancer.public-deploy6.test-eu.tankionline.com/balancer", "test6", "https://public-deploy6.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy6.test-eu.tankionline.com/config.xml&amp;resources=../resources&amp;balancer=https://balancer.public-deploy6.test-eu.tankionline.com/balancer", "Test Server #6"],
                  ["https://balancer.public-deploy7.test-eu.tankionline.com/balancer", "test7", "https://public-deploy7.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy7.test-eu.tankionline.com/config.xml&amp;resources=../resources&amp;balancer=https://balancer.public-deploy7.test-eu.tankionline.com/balancer", "Test Server #7"],
                  ["https://balancer.public-deploy8.test-eu.tankionline.com/balancer", "test8", "https://public-deploy8.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy8.test-eu.tankionline.com/config.xml&amp;resources=../resources&amp;balancer=https://balancer.public-deploy8.test-eu.tankionline.com/balancer", "Test Server #8"],
                  ["https://balancer.public-deploy9.test-eu.tankionline.com/balancer", "test9", "https://public-deploy9.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy9.test-eu.tankionline.com/config.xml&amp;resources=../resources&amp;balancer=https://balancer.public-deploy9.test-eu.tankionline.com/balancer", "Test Server #9"],
                  ["https://balancer.review-1-public.test-ru.tankionline.com/balancer", "review1", "https://client-review-1-public.test-ru.tankionline.com/?config-template=https://c{server}.review-1-public.test-ru.tankionline.com/config.xml&amp;resources=https://resources-review-1-public.test-ru.tankionline.com&amp;balancer=https://balancer.review-1-public.test-ru.tankionline.com/balancer", "Client Review #1"],
                  ["https://balancer.review-2-public.test-ru.tankionline.com/balancer", "review2", "https://client-review-2-public.test-ru.tankionline.com/?config-template=https://c{server}.review-2-public.test-ru.tankionline.com/config.xml&amp;resources=https://resources-review-2-public.test-ru.tankionline.com&amp;balancer=https://balancer.review-2-public.test-ru.tankionline.com/balancer", "Client Review #2"],
                  ["https://balancer.review-3-public.test-ru.tankionline.com/balancer", "review3", "https://client-review-3-public.test-ru.tankionline.com/?config-template=https://c{server}.review-3-public.test-ru.tankionline.com/config.xml&amp;resources=https://resources-review-3-public.test-ru.tankionline.com&amp;balancer=https://balancer.review-3-public.test-ru.tankionline.com/balancer", "Client Review #3"],
                  ["https://balancer.review-4-public.test-ru.tankionline.com/balancer", "review4", "https://client-review-4-public.test-ru.tankionline.com/?config-template=https://c{server}.review-4-public.test-ru.tankionline.com/config.xml&amp;resources=https://resources-review-4-public.test-ru.tankionline.com&amp;balancer=https://balancer.review-4-public.test-ru.tankionline.com/balancer", "Client Review #4"],
                  ["https://balancer.review-5-public.test-ru.tankionline.com/balancer", "review5", "https://client-review-5-public.test-ru.tankionline.com/?config-template=https://c{server}.review-5-public.test-ru.tankionline.com/config.xml&amp;resources=https://resources-review-5-public.test-ru.tankionline.com&amp;balancer=https://balancer.review-5-public.test-ru.tankionline.com/balancer", "Client Review #5"],
                  ["https://balancer.review-6-public.test-ru.tankionline.com/balancer", "review6", "https://client-review-6-public.test-ru.tankionline.com/?config-template=https://c{server}.review-6-public.test-ru.tankionline.com/config.xml&amp;resources=https://resources-review-6-public.test-ru.tankionline.com&amp;balancer=https://balancer.review-6-public.test-ru.tankionline.com/balancer", "Client Review #6"],
                  ["https://balancer.review-7-public.test-ru.tankionline.com/balancer", "review7", "https://client-review-7-public.test-ru.tankionline.com/?config-template=https://c{server}.review-7-public.test-ru.tankionline.com/config.xml&amp;resources=https://resources-review-7-public.test-ru.tankionline.com&amp;balancer=https://balancer.review-7-public.test-ru.tankionline.com/balancer", "Client Review #7"],
                  ["https://balancer.review-8-public.test-ru.tankionline.com/balancer", "review8", "https://client-review-8-public.test-ru.tankionline.com/?config-template=https://c{server}.review-8-public.test-ru.tankionline.com/config.xml&amp;resources=https://resources-review-8-public.test-ru.tankionline.com&amp;balancer=https://balancer.review-8-public.test-ru.tankionline.com/balancer", "Client Review #8"],
                  ["https://balancer.review-9-public.test-ru.tankionline.com/balancer", "review9", "https://client-review-9-public.test-ru.tankionline.com/?config-template=https://c{server}.review-9-public.test-ru.tankionline.com/config.xml&amp;resources=https://resources-review-9-public.test-ru.tankionline.com&amp;balancer=https://balancer.review-9-public.test-ru.tankionline.com/balancer", "Client Review #9"],
                  ["https://balancer.3dtank.com/balancer/", "3dtank", "https://3dtank.com/play/", "3D坦克"]];
let statuses = [];
for (let i = 0; i < serverdata.length; i++){
    let servstatus = 404;
    let xhr = new XMLHttpRequest();
    fetch(serverdata[i][0])
    .then(response => {
        servstatus = response.status;
        let thisserverdata = [servstatus, serverdata[i][1], serverdata[i][2], serverdata[i][3]];
        statuses.push(thisserverdata)
    })
    .catch(error => {
        let thisserverdata = [servstatus, serverdata[i][1], serverdata[i][2], serverdata[i][3]];
        statuses.push(thisserverdata)
    });
}
window.onload = (event) => {
    const servselect = document.querySelector('div#servselect');
    for (let i = 0; i < statuses.length; i++){
        let thisserver = document.createElement("span");
        thisserver.textContent = serverdata[i][3];
        thisserver.setAttribute('id', serverdata[i][1]);
        thisserver.setAttribute('link', serverdata[i][2]);
        thisserver.setAttribute('i', i);
        thisserver.classList.add('option');
        let jndex = 0;
        for (let j = 0; serverdata[i][1] != statuses[j][1]; j+=1){
            jndex+=1;
        };
        if (statuses[jndex][0] == 200){
            thisserver.classList.add('online');
            thisserver.setAttribute('status', 'online');
        }
        else {
            thisserver.classList.add('offline');
            thisserver.setAttribute('status', 'offline');
        }
        servselect.appendChild(thisserver);
    }
    const serveri = servselect.querySelectorAll('span');
    const fight = document.querySelector('a#play');
    const servselecttext = document.querySelector('div.select:nth-of-type(1)>span.selected');
    const date = new Date(); 
    const month = date.getMonth();
    const day = date.getDate(); 
    console.log(month); 
    serveri.forEach(serveris => {
        serveris.addEventListener('click', () => {
            const id = serveris.getAttribute('id');
            const index = serveris.getAttribute('i');
            const statuss = serveris.getAttribute('status');
            fight.setAttribute('href', serverdata[index][2]);
            servselecttext.textContent = serverdata[index][3];
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
        console.log("if")
        if (audio.paused) {
            console.log("if2");
            audio.play();
        }
    } else {
        console.log("else")
        if (!audio.paused == false) {
            console.log("if2");
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
                console.log("audio.volume = 1", audio.volume);
                audio.volume = "0";
                audiobutton.classList.add("muted");
                localStorage.setItem("mtb_soundstatus", "off");
            }
        }
    }
    audiobutton.addEventListener('click', toggleAudio);
};