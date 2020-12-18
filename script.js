let arrow = document.querySelector(".arrow");
let arrowParent = document.querySelector(".arrow-down-area");
let login = document.querySelector(".login-container");
let topArrow = document.querySelector(".top-arrow");

if (arrow) {
    arrow.onclick = (e) =>
    {
        arrowParent.style.opacity = "0"
        
        setTimeout(() =>{
            arrowParent.style.visibility = "hidden"
            window.scrollTo({top: window.innerHeight, behavior: "smooth"})
        }, 800)
        setTimeout(() =>
        {
            login.style.visibility = "visible";
            login.style.opacity = "1";
        }, 1400)
    }

    topArrow.onclick = (e) =>
    {
        login.style.opacity = "0"
        
        setTimeout(() =>{
            login.style.visibility = "hidden"
            window.scrollTo({top: 0, behavior: "smooth"})
        }, 800)
        setTimeout(() =>
        {
            arrowParent.style.visibility = "visible";
            arrowParent.style.opacity = "1";
        }, 1400)
    }
}


if (window.pageYOffset > 0) {
    window.scrollTo({top : 0, behavior: "smooth"})
}

const resDrop = document.querySelector("#resDrop");

window.onresize = (e) =>
{
    if (window.innerWidth >= 768) {
        if (resDrop) {   
            if (resDrop.checked == true) {
                resDrop.checked = false
            }
        }
        const letChange = document.querySelector(".profile-res");
        letChange.style.display = "none";
    }

    unckeckmyButtons()
}

const forms =  document.querySelectorAll("#loginForm, #signupForm");


if (forms.length > 0) {
    for (const form of forms) {
        form.onchange = () =>
        {
            if (form.checked == true) {
                resDrop.checked = false
            }
        }
    }
}



const cards = document.querySelectorAll(".auth .card:first-child, .auth .card:nth-child(2)");

let count = 1;


if (cards.length > 0) {
    setInterval(() => {
        count = 1
        for (const card of cards) {
            count+= 0.1
            card.style.animation = `2s 2 alternate ${count}s toTop`
            card.style.animationFillMode = "both"
        }
        setTimeout(() => {
            for (const card of cards) {
                card.removeAttribute("style")
            }  
        }, 7000);
    }, 10000);

}


const NEWSNAV = document.querySelector(".news header nav")


if (NEWSNAV) {
    const newsMenu = document.querySelector("#newsDropMenu");
    
    newsMenu.onchange = (e) =>
    {
        if(newsMenu.checked)
        {
            window.scroll({top: 1, behavior: 'smooth'});
            document.body.style.overflow = "hidden";
        }else
        {
            document.body.removeAttribute("style")
            window.scroll({top: 0, behavior: 'smooth'});
        }
        
    }

    window.onscroll = () =>
    {
        if (window.pageYOffset == 0 ) {
            NEWSNAV.classList.remove('active')
        }
        if (window.pageYOffset > 0 ) {
            NEWSNAV.classList.add('active')
        }
    }
}



const business = document.querySelector(".business")
const navbar = document.querySelector(".business header nav");
const navbarAs = document.querySelectorAll(".business header nav a");
const nav = document.querySelector(".news-res-nav");
const navElements = document.querySelectorAll(".news-res-nav ul a");

if (business) {
    const colorChnagerElements = document.querySelectorAll(".business main > div")
    
    window.onscroll = (e) =>
    {
        if (window.pageYOffset < 740) {            
            colorChanger(colorChnagerElements, "rgb(73, 0, 167)")
            business.style.backgroundColor = "#ffe086";
            navbar.style.backgroundColor = "#ffe086";
            nav.style.backgroundColor = "#ffe086";

            for (const navbarA of navbarAs) {
                navbarA.style.color = "#4900a7";
            }
            for (const elm of navElements) {
                elm.style.color = "#4900a7";
            }
        }
        if(window.pageYOffset > 740)
        {
            let bgColor = "rgb(49, 114, 110)";
            colorChanger(colorChnagerElements, "rgb(255, 246, 196)", bgColor)
            business.style.backgroundColor = bgColor;
        }
        if(window.pageYOffset > 1600)
        {
            let bgColor = "rgb(127, 181, 173)";
            colorChanger(colorChnagerElements, "rgb(1, 1, 122)", bgColor)
            business.style.backgroundColor = bgColor;
        }
        if(window.pageYOffset > 2110)
        {
            let bgColor = "rgb(237, 236, 185)";
            colorChanger(colorChnagerElements, "rgb(45, 85, 255)", bgColor)
            business.style.backgroundColor = bgColor;
        }
        if(window.pageYOffset > 2815)
        {
            let bgColor = "rgb(239, 133, 148)";
            colorChanger(colorChnagerElements, "rgb(99, 31, 69)", bgColor)
            business.style.backgroundColor = bgColor;
        }
        if(window.pageYOffset > 3750)
        {
            let bgColor = "rgb(115, 209, 205)";
            colorChanger(colorChnagerElements, "rgb(149, 44, 37)", bgColor)
            business.style.backgroundColor = bgColor;
        }
        if(window.pageYOffset > 4635)
        {
            let bgColor = "rgb(255, 226, 235)";
            colorChanger(colorChnagerElements, "rgb(45, 85, 255)", bgColor)
            business.style.backgroundColor = bgColor;
        }
        if(window.pageYOffset > 5475)
        {
            let bgColor = "rgb(127, 181, 173)";
            colorChanger(colorChnagerElements, "rgb(1, 1, 122)", bgColor)
            business.style.backgroundColor = bgColor;
        }
    }

}


function colorChanger(elements, color, bgColor) {

    for (const element of elements) {
        
        element.style.color = color;
    }
    for (const navbarA of navbarAs) {
        navbarA.style.color = color;
    }
    for (const elm of navElements) {
        elm.style.color = color;
    }
        navbar.style.backgroundColor = bgColor
        nav.style.backgroundColor = bgColor;

}

const profileMenus = document.querySelectorAll("nav input[type=checkbox], #animate-searchbar")

if (profileMenus.length > 0) {
    for (const profileMenu of profileMenus) {
        profileMenu.onchange = (e) =>
        {
            unckeckmyButtons()
        }
    }

}


function unckeckmyButtons()
{
            for (const propMenu of profileMenus) {
                if(propMenu.checked)
                {
                    propMenu.click();
                }
            }
}


const list = document.querySelector(".search-drop-menu-resp");
const focusOnInput = document.querySelector(".profile-res-input > input");
const resNav = document.querySelector(".profile-res");



if (list) {
    
    focusOnInput.onfocus = () =>
    {
        list.style.display = 'grid';
        resNav.style.display = "none";
    }
    focusOnInput.onblur = () =>
    {
        list.style.display = 'none';
        resNav.style.display = "grid";
        
    }    
}



let _cards = document.querySelectorAll(".card label.footer-menu-button")
let _mediaCard = document.querySelectorAll(".card .hover-content-footer > button.footer-menu-button:last-of-type");

if (document.querySelector(".index")) {
    _cards = document.querySelectorAll(".card button.footer-menu-button:last-of-type");
    _mediaCard = document.querySelectorAll(".card .hover-content-footer > button.footer-menu-button:first-child")
}

const cardToClose = document.querySelectorAll(".card");

    document.body.addEventListener("click", (e) =>
    {
        const isElm = e.target.tagName;
        if(isElm == "DIV" || isElm == "BODY" || isElm == "NAV" || isElm == "HEADER" || isElm == "FOOTER" || isElm == "P")
        {
            for (const _c of _cards) {
                const prnt = _c.parentElement.parentElement;
            const chld = prnt.querySelector(".popof-menu-card");
            if(prnt.hasAttribute("style"))
            {
                prnt.removeAttribute("style");
                chld.style.display = "none";
            }
        }
        for (const _c of _mediaCard) {
            const prnt = _c.parentElement.parentElement;
            const chld = prnt.querySelector(".popof-media-card");
            prnt.removeAttribute("style");
            chld.removeAttribute("style");
        }
    }
    });
    
if (_cards.length > 0) {
    
    for (const _card of _cards) {
        _card.addEventListener("click", (e) =>
        {
            const controllMyPosition = (window.innerWidth - e.clientX)

            setTimeout(() => {

                var parent = _card.parentElement.parentElement;
                var child = parent.querySelector(".popof-menu-card");
                for (const _c of _cards) {
                    const prnt = _c.parentElement.parentElement;
                const chld = prnt.querySelector(".popof-menu-card");
                if(_card === _c) continue;
                if(prnt.hasAttribute("style"))
                {
                    prnt.removeAttribute("style");
                    chld.style.display = "none";
                }

            }
            for (const _c of _mediaCard) {
                const prnt = _c.parentElement.parentElement;
                const chld = prnt.querySelector(".popof-media-card");
                    if(chld.hasAttribute("style"))
                    {
                        chld.removeAttribute("style")
                    }
            }
            if (!(parent.hasAttribute("style"))) {
                parent.style.display = "grid";
                child.style.display = "block";
                if (controllMyPosition < 322) {
                    child.style.left = -35 + "px";
                    child.style.top = 98 + "%";
                    child.style.right = "unset";
                    child.style.bottom = "unset";
                }
                return;
            }else
            {
                parent.removeAttribute("style");
                child.style.display = "none";
            }
        }, 0)
        });
    }
}



if (_mediaCard.length > 0) {
    
    for (const _card of _mediaCard) {
        _card.addEventListener("click", (e) =>
        {
            const controllMyPosition = (window.innerWidth - e.clientX)
            
            setTimeout(() =>
            {

                const parent = _card.parentElement.parentElement;
                const child = parent.querySelector(".popof-media-card");
                for (const _c of _mediaCard) {
                    const prnt = _c.parentElement.parentElement;
                    const chld = prnt.querySelector(".popof-media-card");
                    if(_card === _c) continue;
                    if(prnt.hasAttribute("style"))
                    {
                        prnt.removeAttribute("style");
                        chld.style.display = "none";
                    }
                }
                for (const _c of _cards) {
                    const prnt = _c.parentElement.parentElement;
                    const chld = prnt.querySelector(".popof-menu-card");
                    if(chld.hasAttribute("style"))
                    {
                        chld.removeAttribute("style");
                    }

                }
                if (!(parent.hasAttribute("style"))) {
                    parent.style.display = "grid";
                    child.style.display = "block";
                    console.log(controllMyPosition)
                    if (controllMyPosition < 600) {
                        child.style.left = -134 + "px";
                        child.style.top = 99 + "%";
                    }
                    return;
                }else
                {
                    parent.removeAttribute("style");
                    child.style.display = "none";
                }
            } ,0)
        })
    }

}




const menuUnchecker = document.querySelectorAll(".details-imgs > input");
if (menuUnchecker.length > 0) {
    
    for (const perMenu of menuUnchecker) {
        perMenu.onclick = (e) =>{

            for (const pMenu of menuUnchecker) {
                if (pMenu.checked) {
                    pMenu.click();
                }
            }
        }
    }
}




const followBtns = document.querySelectorAll(".follow-card-footer button");

if (followBtns.length > 0) {
    const saveButton = document.querySelector(".header-area-first-section button:last-child")
    console.log(saveButton)
    for (const followBTN of followBtns) {
        followBTN.onclick = (e) =>
        {
            if(followBTN.textContent.toLowerCase() == "follow")
            {
                followBTN.textContent = "Following";
                followBTN.classList.add("following-btn");
                saveButton.innerHTML = "Done";
                saveButton.style.backgroundColor = "#e60023";
                saveButton.style.color = "white";
                
            }else
            {
                
                followBTN.textContent = "Follow";
                followBTN.classList.remove("following-btn");
            }
        }
    }
}


const listItems = document.querySelectorAll(".follow-pop-card > input[name=follow-list]");


if (listItems.length > 0) {
    for (const listItem of listItems) {
        listItem.onchange = (e) =>
        {
            for (const listITM of listItems) {
                
                const ITM =  document.querySelector("."+listITM.id);
                const getLabel = document.querySelector(`label[for=${listITM.id}]`)
                
                if (ITM.hasAttribute("style")) {
                    ITM.removeAttribute("style")
                    getLabel.classList.remove("my-background");
                }
            }
            if (listItem.checked) {
                const fullList = document.querySelector("."+ listItem.id);
                const getLabel = document.querySelector(`label[for=${listItem.id}]`)
                fullList.style.display = "grid";
                getLabel.classList.add("my-background");
            }
        }
    }
    
}