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
let statuses = [];
serverdata.forEach(serveradats => {
    fetch(serveradats[0]).then(response => {
        statuses.push([response.status, serveradats[1], serveradats[2], serveradats[3]])
    }).catch(error => {
        statuses.push([404, serveradats[1], serveradats[2], serveradats[3]])
    });
})
console.log(statuses)
window.onload = (event) => {
    const servselect = document.querySelector('div#servselect');
    const servselecttext = document.querySelector('div.select:nth-of-type(1)>span.selected');
    serverdata.forEach(serveradats => {
        let thisserver = document.createElement("span");
        thisserver.innerHTML += serveradats[3];
        thisserver.setAttribute('id', serveradats[1]);
        thisserver.setAttribute('link', serveradats[2]);
        thisserver.setAttribute('i', serverdata.indexOf(serveradats));
        thisserver.classList.add('option');
        thisserver.classList.toggle('unknown');
        thisserver.setAttribute('status', 'unknown');
        statuses.forEach(status => {
            if (serveradats[1] == status[1]){
                console.log(status[0])
                if (status[0] == 200){
                    thisserver.classList.add('online');
                    thisserver.setAttribute('status', 'online');
                    thisserver.classList.toggle('unknown');
                }
                else if (status[0] == 404){
                    thisserver.classList.add('offline');
                    thisserver.setAttribute('status', 'offline');
                    thisserver.classList.toggle('unknown');
                }
            }
        })
        if (thisserver.getAttribute('status') == "unknown"){thisserver.setAttribute('title', "Error: could not get info about server status")}
        servselect.appendChild(thisserver);
    })
    //accounts
    // structure: ["account1", "account2"]
    let mtb_accounts = []
    if (localStorage.getItem("mtb_accounts") === null){
        localStorage.setItem("mtb_accounts", '["."]');
    }
    mtb_accounts = localStorage.getItem("mtb_accounts")
    let accounts = JSON.parse(mtb_accounts);
    const accselect = document.querySelector('div#accselect');
    const accselecttext = document.querySelector('div.select:nth-of-type(2)>span.selected');
    const fight = document.querySelector('a#play');
    let izvelets = ""
    let saite = ""
    function pievienot (name) {
        let konts = document.createElement("span");
        if (name == "."){
            konts.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 404 100" width="404" height="100" style="margin-top: 0.125em;max-height: 1em;width: fit-content;"><style>.a{stroke:#fff;stroke-width: 0.5em;stroke-miterlimit:100;fill: #fff;}</style><path fill-rule="evenodd" class="a" d="m7.9 2q0 35.9 0 47.9 31.5 0 42.1 0 0-35.8 0-47.9c2.8 0 4.6 0 5.9 0.1 0 0 0.2 6.5 0.1 19.4-0.1 13 0 24.5 0 34.5q-36 0-48.1 0 0 27.9 0 42c0 0-4.7 0-5.5 0q0-71.9 0-96c2.8-0.1 4.7 0 5.5 0zm117.2 0q0 24.1 0 96c-9 0-27-0.1-54 0 0-7.5 0-22.5 0-45 8-0.1 23.9 0 48-0.1 0-7.5 0-22.3 0-44.9-8 0.1-24.2-0.1-48.2 0 0-0.9 0-3.1 0-6 0 0 27.2 0.1 54.2 0zm-48.1 57q0 8.2 0 33c7.1 0 21.1 0.1 42.1 0 0-5.5 0-16.6 0-33.1q-10.6 0-42.1 0.1zm81.2-4.9c0-2.3 0-5.9 0-7.9 13.5-18 24.7-32.2 29.1-38.2-22.5 0-39.7 0.1-47.2 0.1q0-4.6 0-6.1 36 0 48.1 0 3.9 4 6 6.1-22.6 31.4-30.1 41.8 22.6 31.5 30.1 42.1-4.6 4.5-6 6-36.1 0-48.1 0 0-4.5 0-6c22.6 0 39.8 0 47.3 0-13.6-17.9-29.2-37.9-29.2-37.9zm51-52.1c9.1 0 27.1 0.1 54 0q0 24.1 0 96c-8.9 0-27-0.1-54 0 0-7.5 0.1-22.6 0.1-45.1 8.1-0.1 23.9 0.1 47.9 0 0-7.5 0-22.3 0-44.8-8 0.1-24-0.1-48 0q0-1.5 0-5.9zm6 56.9c0 5.4 0 16.6 0 33.1 7 0 21 0.1 42 0 0-5.4 0-16.6 0-33.1-7 0-21-0.1-42 0zm63 33.1c9.1 0 18.2 0 26.6 0q12.7 0 21.6 0 0-30 0-90 1.5 0 5.9 0 0 24.1 0 96-13.5 0-54.1 0c0-2.5 0.1-3.9 0-6zm123.2-90q0 24.1 0 96c-9 0-27.1-0.2-54.1-0.1 0-7.5 0-22.4 0-44.9 8.1-0.1 24 0.2 48 0.1 0-7.6 0-22.6 0-45.1-8 0.1-24 0-48 0 0-0.9 0-3 0-6 0 0 27.1 0.1 54.1 0zm-48.1 57q0 8.2 0 33c7.1 0 21 0.2 42 0.1 0-5.5 0.1-16.5 0.1-33-7 0-21.1-0.2-42.1-0.1z"></path></svg>';
        } else{
            konts.innerHTML = name;
        }
        konts.setAttribute("name", name)
        konts.classList.add("option");
        accselect.appendChild(konts);
        konts.addEventListener('click', () => {
            izvelets = name.toLowerCase();
            saite = "https://"+izvelets+".tankionline.com/play/"
            if (izvelets == "."){
                fight.setAttribute('href', "https://tankionline.com/play/");
                accselecttext.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 404 100" width="404" height="100" style="margin-top: 0.125em;max-height: 1em;width: fit-content;"><style>.a{stroke:#fff;stroke-width: 0.5em;stroke-miterlimit:100;fill: #fff;}</style><path fill-rule="evenodd" class="a" d="m7.9 2q0 35.9 0 47.9 31.5 0 42.1 0 0-35.8 0-47.9c2.8 0 4.6 0 5.9 0.1 0 0 0.2 6.5 0.1 19.4-0.1 13 0 24.5 0 34.5q-36 0-48.1 0 0 27.9 0 42c0 0-4.7 0-5.5 0q0-71.9 0-96c2.8-0.1 4.7 0 5.5 0zm117.2 0q0 24.1 0 96c-9 0-27-0.1-54 0 0-7.5 0-22.5 0-45 8-0.1 23.9 0 48-0.1 0-7.5 0-22.3 0-44.9-8 0.1-24.2-0.1-48.2 0 0-0.9 0-3.1 0-6 0 0 27.2 0.1 54.2 0zm-48.1 57q0 8.2 0 33c7.1 0 21.1 0.1 42.1 0 0-5.5 0-16.6 0-33.1q-10.6 0-42.1 0.1zm81.2-4.9c0-2.3 0-5.9 0-7.9 13.5-18 24.7-32.2 29.1-38.2-22.5 0-39.7 0.1-47.2 0.1q0-4.6 0-6.1 36 0 48.1 0 3.9 4 6 6.1-22.6 31.4-30.1 41.8 22.6 31.5 30.1 42.1-4.6 4.5-6 6-36.1 0-48.1 0 0-4.5 0-6c22.6 0 39.8 0 47.3 0-13.6-17.9-29.2-37.9-29.2-37.9zm51-52.1c9.1 0 27.1 0.1 54 0q0 24.1 0 96c-8.9 0-27-0.1-54 0 0-7.5 0.1-22.6 0.1-45.1 8.1-0.1 23.9 0.1 47.9 0 0-7.5 0-22.3 0-44.8-8 0.1-24-0.1-48 0q0-1.5 0-5.9zm6 56.9c0 5.4 0 16.6 0 33.1 7 0 21 0.1 42 0 0-5.4 0-16.6 0-33.1-7 0-21-0.1-42 0zm63 33.1c9.1 0 18.2 0 26.6 0q12.7 0 21.6 0 0-30 0-90 1.5 0 5.9 0 0 24.1 0 96-13.5 0-54.1 0c0-2.5 0.1-3.9 0-6zm123.2-90q0 24.1 0 96c-9 0-27.1-0.2-54.1-0.1 0-7.5 0-22.4 0-44.9 8.1-0.1 24 0.2 48 0.1 0-7.6 0-22.6 0-45.1-8 0.1-24 0-48 0 0-0.9 0-3 0-6 0 0 27.1 0.1 54.1 0zm-48.1 57q0 8.2 0 33c7.1 0 21 0.2 42 0.1 0-5.5 0.1-16.5 0.1-33-7 0-21.1-0.2-42.1-0.1z"></path></svg>';
            }
            else if (izvelets == accounts[0]) {
                fight.setAttribute('href', "https://tankionline.com/play/");
                accselecttext.innerHTML = name;
            } else {
                fight.setAttribute('href', saite);
                accselecttext.innerHTML = name;
            }
        })
    }
    accounts.forEach(pievienot)
    const preloader = document.querySelector('.preloader');
    preloader.setAttribute('style', 'animation-play-state: running;');
    const addacc = document.querySelector('div#accadd');
    const errorlist = document.querySelector("div.errors");
    const inputacc = document.querySelector('input.accinput');
    inputacc.addEventListener('input', function() {
        this.value = this.value.replace(/[^\x20-\x7E\u0080-\u02AF\u0400-\u04FF\u0590-\u05FF\u0600-\u06FF\u0530-\u058F0-9_ ]/g, '');
    });
    addacc.addEventListener('click', () => {
        if (inputacc.value != ""){
            if (['.', 'game', 'space', 'test', 'new-ru', 'new-en', 'new-de', 'new-pl', 'pages', 'ratings', 'help', 'public-deploy1.test-eu', 'public-deploy2.test-eu', 'public-deploy3.test-eu', 'public-deploy4.test-eu', 'public-deploy5.test-eu', 'public-deploy6.test-eu', 'public-deploy7.test-eu', 'public-deploy8.test-eu', 'public-deploy9.test-eu', 'client-review-1-public.test-ru', 'client-review-2-public.test-ru', 'client-review-3-public.test-ru', 'client-review-4-public.test-ru', 'client-review-5-public.test-ru', 'client-review-6-public.test-ru', 'client-review-7-public.test-ru', 'client-review-8-public.test-ru', 'client-review-9-public.test-ru', 's.eu', 'helpdesk.eu'].includes(inputacc.value)){
                console.log("Invalid name. Try another")
                let error = document.createElement("div");
                error.classList.add("error");
                error.innerHTML = "<h2>Error</h2><p>Invalid name. Try another</p>";
                errorlist.appendChild(error);
            } else{
                console.log("else")
                if (JSON.stringify(accounts) == JSON.stringify(['.'])){
                    console.log("else if")
                    accounts = '["'+inputacc.value+'"]';
                    localStorage.setItem("mtb_accounts", accounts);
                    console.log(document.querySelector('span[name="."]'))
                    document.querySelector('span[name="."]').remove();
                    accselecttext.innerHTML = inputacc.value;
                } else {
                    accounts.push(inputacc.value);
                    localStorage.setItem("mtb_accounts", JSON.stringify(accounts));
                }
                pievienot(inputacc.value);
            }
            inputacc.value = "";
        }
        inputacc.classList.toggle("open");
    })
    const serveri = servselect.querySelectorAll('span');
    const serverlist = document.querySelector('div.select:nth-of-type(1)');
    const date = new Date(); 
    const month = date.getMonth();
    const day = date.getDate(); 
    serveri.forEach(serveris => {
        serveris.addEventListener('click', () => {
            const id = serveris.getAttribute('id');
            const index = serveris.getAttribute('i');
            const statuss = serveris.getAttribute('status');
            let saite = "";
            if (id != "main"){
                fight.setAttribute('href', serverdata[index][2]);
                serverlist.classList.remove("selected")
                accselecttext.innerHTML = "Available only for main servers";
            } else{
                serverlist.classList.add("selected")
                accselecttext.innerHTML = "Choose the account";
                if (izvelets == "main"){
                    fight.setAttribute('href', "https://tankionline.com/play/");
                }
                else {
                    fight.setAttribute('href', saite);
                }
            }
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
    //fullscreen
    const fsb = document.querySelectorAll('button.fsb');
    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            fsb.classList.add("full");
            console.log("FSB")
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
            fsb.classList.remove("full");
            console.log("!FSB")
        }
    }
    fsb.forEach(anfsb => {anfsb.addEventListener('click', toggleFullScreen)})
    //wallpapers
    window.onkeyup = function(e) {
        var event = e.which || e.keyCode || 0;
        if (event == 27) {
            const wpchoose = document.querySelector("div#wpchoose");
            wpchoose.classList.remove("open")
        }
    }
};