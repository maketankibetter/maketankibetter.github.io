window.onload = (event) => {
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
                        ["https://balancer.3dtank.com/balancer/",                             "3dtank",  "https://3dtank.com/play/", '3D<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 14 8" fill="currentColor" style="height: 0.8em;display: inline;margin-top: 0.15em;"><path fill-rule="evenodd" d="m11.3 0c0.1 0 0.2 0.1 0.2 0.3v0.7h2.2c0.2 0 0.3 0.1 0.3 0.3v0.5c0 0.1-0.1 0.2-0.3 0.2h-2.2v1h2.2c0.2 0 0.3 0.1 0.3 0.3v2.5c0 0.1-0.1 0.2-0.3 0.2h-1.2v1h1.2c0.2 0 0.3 0.1 0.3 0.3v0.5c0 0.1-0.1 0.2-0.3 0.2h-2c-0.1 0-0.2-0.1-0.2-0.2v-1.8h-1v0.5c0 0.8-0.7 1.5-1.5 1.5h-0.8c-0.1 0-0.2-0.1-0.2-0.2v-0.5c0-0.2 0.1-0.3 0.2-0.3h0.8c0.3 0 0.5-0.2 0.5-0.5v-0.5h-1.3c-0.1 0-0.2-0.1-0.2-0.2v-2.5c0-0.2 0.1-0.3 0.2-0.3h2.3v-1h-2.3c-0.1 0-0.2-0.1-0.2-0.2v-0.5c0-0.2 0.1-0.3 0.2-0.3h2.3v-0.7c0-0.2 0.1-0.3 0.2-0.3zm1.8 5v-1h-4v1z"></path><path fill-rule="evenodd" d="m3 7.3c0-0.2 0.1-0.3 0.3-0.3h3.5c0.1 0 0.2 0.1 0.2 0.3v0.5c0 0.1-0.1 0.2-0.3 0.2h-3.5c-0.1 0-0.2-0.1-0.2-0.2zm3.8-6.3c0.1 0 0.2 0.1 0.2 0.3v4.5c0 0.1-0.1 0.2-0.2 0.2h-3.5c-0.2 0-0.3-0.1-0.3-0.3v-4.5c0-0.1 0.1-0.2 0.3-0.2zm-0.8 4v-1h-2v1zm-2-2h2v-1h-2zm-2.8-2c0.2 0 0.3 0.1 0.3 0.3v0.7h0.3c0.1 0 0.2 0.1 0.2 0.3v0.5c0 0.1-0.1 0.2-0.2 0.2h-0.3v4h0.3c0.1 0 0.2 0.1 0.2 0.3v0.5c0 0.1-0.1 0.2-0.2 0.2h-1.5c-0.2 0-0.3-0.1-0.3-0.2v-0.5c0-0.2 0.1-0.3 0.3-0.3h0.2v-4h-0.2c-0.2 0-0.3-0.1-0.3-0.2v-0.5c0-0.2 0.1-0.3 0.3-0.3h0.2v-0.8c0-0.1 0.1-0.2 0.3-0.2z"></path></svg>']];
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
        servselect.appendChild(thisserver);
        console.log(thisserver, serveradats[0])
        thisserver.setAttribute('title', "Error: could not get info about server status")
        fetch(serveradats[0]).then(response => {
            thisserver.classList.toggle('unknown');
            thisserver.classList.add('online');
            thisserver.setAttribute('status', 'online');
            thisserver.setAttribute('title', "")
        }).catch(error => {
            thisserver.classList.toggle('unknown');
            thisserver.classList.add('offline');
            thisserver.setAttribute('status', 'offline');
            thisserver.setAttribute('title', "")
        });
    })
    //accounts
    // structure: ["account1", "account2"]
    if (localStorage.getItem("mtb_accounts") === null){
        localStorage.setItem("mtb_accounts", '["."]');
    }
    let mtb_accounts = localStorage.getItem("mtb_accounts")
    if (localStorage.getItem("mtb_last_profile") === null){
        localStorage.setItem("mtb_last_profile", '');
    }
    let mtb_last_profile = localStorage.getItem("mtb_last_profile")
    let accounts = JSON.parse(mtb_accounts);
    const addacc = document.querySelector('div#accadd');
    if (accounts[0] == "."){
        addacc.setAttribute("style", "background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.2' viewBox='0 0 20 20' width='20' height='20'%3E%3Cpath d='m0 15.8v4.2h4.2l12.3-12.3-4.2-4.2zm19.7-11.3c0.4-0.4 0.4-1.1 0-1.6l-2.6-2.6c-0.5-0.4-1.2-0.4-1.6 0l-2 2.1 4.1 4.1z' fill='%23fff'/%3E%3C/svg%3E\");")
    }
    const accselect = document.querySelector('div#accselect');
    const accselecttext = document.querySelector('div.select[tabindex="7"]>span.selected');
    const fight = document.querySelector('a#play');
    let izvelets = ""
    let saite = ""
    function izveletieskontu(name){
        console.log("??", name);
        izvelets = name.toLowerCase();
        saite = "https://"+izvelets+".tankionline.com/play/"
        if (izvelets == "."){
            console.log("?");
            fight.setAttribute('href', "https://tankionline.com/play/");
            accselecttext.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 1056 213" fill="currentColor" style="height: 1em;display: inline;margin: auto 0;"><path fill-rule="evenodd" d="m1014.9 178v-55.7h-67.1v55.7zm0-89.1v-53.9h-100.1q-3.3 0-5.4-2.1-2.2-2.2-2.2-5.2v-20.1q0-3.3 2.2-5.5 2.1-2.1 5.4-2.1h133.9q3.1 0 5.2 2.1 2.1 2.2 2.1 5.5v198.1q0 3-2.1 5.2-2.1 2.1-5.2 2.1h-136.7q-3.1 0-5.2-2.1-2.1-2.2-2.1-5.2v-109.5q0-3 2.1-5.1c1.4-1.5 3.2-2.2 5.2-2.2zm-282.3 122q-2.1-2.1-2.1-5.2v-21.3q0-3.3 2.1-5.4 2.1-2.2 5.5-2.2h96.3v-169.3q0-3 2.2-5.2 2.1-2.1 5.1-2.1h28.3q3 0 5.2 2.1 2.1 2.2 2.1 5.2v198.2q0 3.1-2.1 5.2-2.2 2.1-5.2 2.1h-131.9q-3.4 0-5.5-2.1zm-69.7-32.9v-55.7h-67v55.7zm0-89.1v-53.9h-100.2q-3.3 0-5.4-2.1-2.2-2.2-2.2-5.2v-20.1q0-3.3 2.2-5.5 2.1-2.1 5.4-2.1h133.9q3.1 0 5.2 2.1 2.1 2.2 2.1 5.5v198.1q0 3-2.1 5.2-2.1 2.1-5.2 2.1h-136.7q-3 0-5.2-2.1-2.1-2.2-2.1-5.2v-109.5q0-3 2.1-5.1c1.5-1.5 3.2-2.2 5.2-2.2zm-281.1 121.5q-2.2-1.6-2.2-4v-19q0-2.4 2.2-4 2.1-1.7 5.1-1.7h81.5l-82.1-62.8q-2.7-1.9-4.5-3.7-2.2-2.2-2.2-5v-8q0-2.8 2.2-4.7 1.8-2.1 4.5-4l82.1-62.8h-81.5q-3 0-5.1-1.6-2.2-1.7-2.2-4v-19.1q0-2.3 2.2-4 2.1-1.6 5.1-1.6h131.4q3 0 5.1 1.6 2.2 1.7 2.2 4v17.2q0 2.8-1.9 4.9-1.8 1.9-4.5 4l-95.2 72.9v2.4l95.2 72.9q2.7 2.1 4.5 4 1.9 1.9 1.9 4.9v17.2q0 2.4-2.2 4-2.1 1.7-5.1 1.7h-131.4q-3 0-5.1-1.7zm-69.9-32.4v-55.7h-67v55.7zm0-89.1v-53.9h-100.1q-3.4 0-5.5-2.1-2.1-2.2-2.1-5.2v-20.1q0-3.3 2.1-5.5 2.1-2.1 5.5-2.1h133.8q3.1 0 5.2 2.1 2.2 2.2 2.2 5.5v198.1q0 3.1-2.2 5.2-2.1 2.1-5.2 2.1h-136.7q-3 0-5.1-2.1-2.2-2.1-2.2-5.2v-109.5q0-3 2.2-5.1c1.4-1.5 3.1-2.2 5.1-2.2zm-268.7 35.1v81.4q0 3.1-2.2 5.2-1.8 2.1-5.1 2.1h-27.7q-3 0-5.1-1.8-2.2-2.1-2.2-5.5v-197.8q0-3.3 2.2-5.4 2.1-2.2 5.1-2.2h27.7q3.3 0 5.1 2.2 2.2 2.1 2.2 5.4v78.4h89.6v-78.4q0-3.3 2.1-5.4 2.2-2.2 5.2-2.2h27.3q3.4 0 5.5 2.2 2.1 2.1 2.1 5.4c0 0 0 107.4 0 108.9 0 2.1-6 7.5-8.4 7.5-1.6 0-123.4 0-123.4 0z"/></svg>';
        }
        else if (izvelets == accounts[0].toLowerCase()) {
            fight.setAttribute('href', "https://tankionline.com/play/");
            accselecttext.innerHTML = name;
            localStorage.setItem("mtb_last_profile", name);
        } else {
            fight.setAttribute('href', saite);
            accselecttext.innerHTML = name;
            localStorage.setItem("mtb_last_profile", name);
        }
    }
    function pievienot (name) {
        let konts = document.createElement("span");
        if (name == "."){
            konts.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 1056 213" fill="currentColor" style="height: 1em;display: inline;"><path fill-rule="evenodd" d="m1014.9 178v-55.7h-67.1v55.7zm0-89.1v-53.9h-100.1q-3.3 0-5.4-2.1-2.2-2.2-2.2-5.2v-20.1q0-3.3 2.2-5.5 2.1-2.1 5.4-2.1h133.9q3.1 0 5.2 2.1 2.1 2.2 2.1 5.5v198.1q0 3-2.1 5.2-2.1 2.1-5.2 2.1h-136.7q-3.1 0-5.2-2.1-2.1-2.2-2.1-5.2v-109.5q0-3 2.1-5.1c1.4-1.5 3.2-2.2 5.2-2.2zm-282.3 122q-2.1-2.1-2.1-5.2v-21.3q0-3.3 2.1-5.4 2.1-2.2 5.5-2.2h96.3v-169.3q0-3 2.2-5.2 2.1-2.1 5.1-2.1h28.3q3 0 5.2 2.1 2.1 2.2 2.1 5.2v198.2q0 3.1-2.1 5.2-2.2 2.1-5.2 2.1h-131.9q-3.4 0-5.5-2.1zm-69.7-32.9v-55.7h-67v55.7zm0-89.1v-53.9h-100.2q-3.3 0-5.4-2.1-2.2-2.2-2.2-5.2v-20.1q0-3.3 2.2-5.5 2.1-2.1 5.4-2.1h133.9q3.1 0 5.2 2.1 2.1 2.2 2.1 5.5v198.1q0 3-2.1 5.2-2.1 2.1-5.2 2.1h-136.7q-3 0-5.2-2.1-2.1-2.2-2.1-5.2v-109.5q0-3 2.1-5.1c1.5-1.5 3.2-2.2 5.2-2.2zm-281.1 121.5q-2.2-1.6-2.2-4v-19q0-2.4 2.2-4 2.1-1.7 5.1-1.7h81.5l-82.1-62.8q-2.7-1.9-4.5-3.7-2.2-2.2-2.2-5v-8q0-2.8 2.2-4.7 1.8-2.1 4.5-4l82.1-62.8h-81.5q-3 0-5.1-1.6-2.2-1.7-2.2-4v-19.1q0-2.3 2.2-4 2.1-1.6 5.1-1.6h131.4q3 0 5.1 1.6 2.2 1.7 2.2 4v17.2q0 2.8-1.9 4.9-1.8 1.9-4.5 4l-95.2 72.9v2.4l95.2 72.9q2.7 2.1 4.5 4 1.9 1.9 1.9 4.9v17.2q0 2.4-2.2 4-2.1 1.7-5.1 1.7h-131.4q-3 0-5.1-1.7zm-69.9-32.4v-55.7h-67v55.7zm0-89.1v-53.9h-100.1q-3.4 0-5.5-2.1-2.1-2.2-2.1-5.2v-20.1q0-3.3 2.1-5.5 2.1-2.1 5.5-2.1h133.8q3.1 0 5.2 2.1 2.2 2.2 2.2 5.5v198.1q0 3.1-2.2 5.2-2.1 2.1-5.2 2.1h-136.7q-3 0-5.1-2.1-2.2-2.1-2.2-5.2v-109.5q0-3 2.2-5.1c1.4-1.5 3.1-2.2 5.1-2.2zm-268.7 35.1v81.4q0 3.1-2.2 5.2-1.8 2.1-5.1 2.1h-27.7q-3 0-5.1-1.8-2.2-2.1-2.2-5.5v-197.8q0-3.3 2.2-5.4 2.1-2.2 5.1-2.2h27.7q3.3 0 5.1 2.2 2.2 2.1 2.2 5.4v78.4h89.6v-78.4q0-3.3 2.1-5.4 2.2-2.2 5.2-2.2h27.3q3.4 0 5.5 2.2 2.1 2.1 2.1 5.4c0 0 0 107.4 0 108.9 0 2.1-6 7.5-8.4 7.5-1.6 0-123.4 0-123.4 0z"/></svg>';
        } else {konts.innerHTML = name;}
        konts.setAttribute("name", name)
        konts.classList.add("option");
        accselect.appendChild(konts);
        konts.addEventListener('click', () => {izveletieskontu(name)})
    }
    accounts.forEach(pievienot)
    const preloader = document.querySelector('.preloader');
    preloader.setAttribute('style', 'animation-play-state: running;');
    const errorlist = document.querySelector("div.errors");
    const inputacc = document.querySelector('input.accinput');
    inputacc.addEventListener('input', function() {
        if (this.value == " "){this.value = "";} // remove first space
        this.value = this.value.replace(/[^\x20-\x7E\u0080-\u02AF\u0400-\u04FF\u0590-\u05FF\u0600-\u06FF\u0530-\u058F0-9_ ]/g, '').replace(".", " ");
    });
    function kluda(header, text, klase){
        console.log(header, text)
        let error = document.createElement("div");
        error.classList.add(klase);
        error.innerHTML = "<h2>" + header + "</h2><p>" + text + "</p>";
        errorlist.appendChild(error);
    }
    addacc.addEventListener('click', () => {
        if (inputacc.value == "" && accounts[0] == "." && inputacc.getAttribute("class") == "accinput"){
            kluda("Pay attention!", "First time you add profile, you actually add name to the first (general) profile. After renaming you can add more profiles.", "warning")
        } else if (inputacc.value != ""){
            if (['.', 'game', 'space', 'test', 'new-ru', 'new-en', 'new-de', 'new-pl', 'pages', 'ratings', 'help', 'public-deploy1.test-eu', 'public-deploy2.test-eu', 'public-deploy3.test-eu', 'public-deploy4.test-eu', 'public-deploy5.test-eu', 'public-deploy6.test-eu', 'public-deploy7.test-eu', 'public-deploy8.test-eu', 'public-deploy9.test-eu', 'client-review-1-public.test-ru', 'client-review-2-public.test-ru', 'client-review-3-public.test-ru', 'client-review-4-public.test-ru', 'client-review-5-public.test-ru', 'client-review-6-public.test-ru', 'client-review-7-public.test-ru', 'client-review-8-public.test-ru', 'client-review-9-public.test-ru', 's.eu', 'helpdesk.eu', 'auth', 'war', 'event', 'helper', 'shop', 'mail', 'web-cdn', 'cdn'].includes(inputacc.value)){
                kluda("Error", "Invalid name. Try another", "error");
            } else{
                if (JSON.stringify(accounts) == JSON.stringify(['.'])){
                    accounts = '["'+inputacc.value+'"]';
                    localStorage.setItem("mtb_accounts", accounts);
                    accounts = JSON.parse(accounts);
                    document.querySelector('span[name="."]').remove();
                } else {
                    accounts.push(inputacc.value);
                    localStorage.setItem("mtb_accounts", JSON.stringify(accounts));
                }
                pievienot(inputacc.value);
                accselecttext.innerHTML = inputacc.value;
                izveletieskontu(inputacc.value)
                addacc.setAttribute("style", "")
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
                if (accounts[0] == "." || accounts.length == 1){
                    izveletieskontu(accounts[0])
                    fight.setAttribute('href', "https://tankionline.com/play/");
                } else {
                    if (mtb_accounts.includes(mtb_last_profile)){
                        accselecttext.innerHTML = mtb_last_profile;
                        izveletieskontu(mtb_last_profile)
                        console.log("glaggle")
                    } else {
                        accselecttext.innerHTML = "Choose your profile";
                    }
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
            fsb.forEach(anfsb => {anfsb.classList.add("full");})
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
            fsb.forEach(anfsb => {anfsb.classList.remove("full");})
        }
    }
    fsb.forEach(anfsb => {anfsb.addEventListener('click', toggleFullScreen)})
    //update statuses
    const reset = document.querySelector('div#reset');
    function resetservers(){
        reset.classList.toggle("off");
        console.log(serveri.length)
        let index = 0;
        serveri.forEach(serveris => {
            fetch(serverdata[serveris.getAttribute("i")][0]).then(response => {
                console.log(response.status, serverdata[serveris.getAttribute("i")][0])
                serveris.setAttribute("class", 'option online');
                serveris.setAttribute('status', 'online');
                index += 1;
                if (index == serveri.length){
                    console.log(index)
                    reset.classList.toggle("off");
                }
            }).catch(error => {
                console.log(404, serverdata[serveris.getAttribute("i")][0])
                serveris.setAttribute("class", 'option offline');
                serveris.setAttribute('status', 'offline');
                index += 1;
                if (index == serveri.length){
                    console.log(index)
                    reset.classList.toggle("off");
                }
            });
        })
    }
    reset.addEventListener('click', resetservers)
    //wallpapers
    window.onkeyup = function(e) {
        var event = e.which || e.keyCode || 0;
        if (event == 27) {
            const wpchoose = document.querySelector("div#wpchoose");
            wpchoose.classList.remove("open")
        }
    }
};