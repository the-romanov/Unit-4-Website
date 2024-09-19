let toggle = false;
let toggle2 = false;
/* SOCIALS FUNCTION */
function goX() {location.assign("https://x.com")}
function goInsta() {location.assign("https://instagram.com")}
function goYT() {location.assign("https://youtube.com")}
function goTiktok() {location.assign("https://tiktok.com")}
function revealSide() {if (toggle) 
    {$("#sidebar").animate({left: '-20%'});} 
    else 
    {$("#sidebar").animate({left: '0%'})} 
    toggle = !toggle; 
    document.getElementById("sidebarAudio").play();}
/* SIDEBAR FUNCTION */
function goHome() {location.assign("index.html")}
function goTheLore() {location.assign("the-lore.html")}
function goCharacters() {location.assign("characters.html")}
function goChangeLogs(){
location.assign("change-logs-v.0.0.1.html")}
function goGallery(){location.assign("gallery.html")}
function goMultiplayer() {location.assign("multiplayer.html")}
function goAbout() {location.assign("about.html")}
function goSupport() {location.assign("support.html")}
function account() {location.assign("account.html")}
function volumeToggle() {if (toggle2) {
$("#audioBar").animate({right: '-96.5%'});}
else
{$("#audioBar").animate({right: '-86%'});}
toggle2 = !toggle2;
}
/* FOOTER FUNCTION */
function tosPage(){location.assign("terms-of-service.html")}
function ppPage(){location.assign("privacy-policy.html")}
function ciPage(){location.assign("company-information.html")}
function eulaPage(){location.assign("eula.html")}
function ePage(){location.assign("enquiries.html")}
function fPage(){location.assign("forums.html")}
function preOrderPage() {location.assign("preorder.html")}
/*ADDED BELOW TO STOP PAGE SPACE WASTING, TO ALLOW LESS SIZE OF PROJECT FILES*/
document.addEventListener("DOMContentLoaded", () => {
/*HTML FOR HEADER FOR ALL PAGES*/
    const headerHTML = `
    <div id="audioBar" style="position: fixed;right:-96.5%; bottom:50%; background-color: #484848; padding: 5px; width:100%; z-index:9;">
    <div id="audioControl" style="width:30%">
        <button onclick="volumeToggle()" class="buttons" style="width:12%" id="audioButton"><img style="width:100%" src="./Images/Header/Speaker.png"></button>
        <input style="width:30%"type="range" id="audioSlider" min="0" max="100" value="100">
    </div>
    </div>
    <audio id="sidebarAudio">
    <source src="Audio/Sidebar.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
    </audio>
    <div id="header" style="position: sticky; top:0; background: linear-gradient(to bottom, #484848 0%, #000000 100%); background-position: 10% 50%; background-repeat: no-repeat; background-size: cover; z-index: 3;">
    <div style="display: flex; justify-content: space-between; margin-left:20px; margin-right:20px;">
    <div class="headersize">
    <button id="selectorbutton" class="buttons" style="width:100%" onclick="revealSide()"><img width="100%" src="Images/Header/SidebarToggle.png"></button>
    </div>
    <div class="headersize">
    <img style="float:left; margin-top:1%" width="100%" height="70%" src="Images/Header/TheNewGalaxyHeader4KNoBG.png">
    </div>
    <div style="margin:2%">
    <div class="headersize">
    <button class="buttons" onclick="account()"><img style="float:right" width="90%" height="100%" src="Images/Header/Account.png"></button>
    </div></div>
    <div class="headersize">
    <button class="buttons" style="width:100%; margin-top:10%;" onclick="preOrderPage()"><img width="100%" src="Images/Header/PreOrderNoBG.png"></button>
    </div>
</div></div>
<!--HEADER ABOVE-->
<!--SIDEBAR BELOW-->
<div id="sidebar" style="background-color: #3e3e3e; width:20%; height:100vh; position:fixed; left:-20%; z-index: 2; justify-content:center; align-items:center;">
    <img style="margin-left:10%" width="80%" src="Images/Sidebar/TNGHeader.png">
    <button class="buttons sidebar" onclick="goHome()"><img width="80%" src="Images/Sidebar/HOME.png"></button>
    <button class="buttons sidebar" onclick="goTheLore()"><img width="80%" src="Images/Sidebar/THELORE.png"></button>
    <button class="buttons sidebar" onclick="goCharacters()"><img width="80%" src="Images/Sidebar/CHARACTERS.png"></button>
    <button class="buttons sidebar" onclick="goChangeLogs()"><img width="80%" src="Images/Sidebar/CHANGELOGS.png"></button>
    <button class="buttons sidebar" onclick="goMultiplayer()"><img width="80%" src="Images/Sidebar/MULTIPLAYER.png"></button>
    <button class="buttons sidebar" onclick="goAbout()"><img width="80%" src="Images/Sidebar/ABOUT.png"></button>
    <button class="buttons sidebar" onclick="goSupport()"><img width="80%" src="Images/Sidebar/SUPPORT.png"></button>
    <button class="buttons sidebar" onclick="goGallery()"><img width="70%" src="Images/Sidebar/GALLERY.png"></button>
</div>
<!--SIDEBAR ABOVE-->
    `;
/*HTML FOR FOOTER FOR ALL PAGES*/
const footerHTML = `
    <!--GRADIENT DIVISOR BETWEEN PAGE & FOOTER (BELOW)-->
    <div id="divisor"; style="height:2vh; background: linear-gradient(to bottom, #484848 0%, #000000 100%);"></div>
    <!--GRADIENT DIVISOR BETWEEN PAGE & FOOTER (ABOVE)-->
        <!--FOOTER BELOW-->
        <div id-"footer" style="display: grid; place-items: center; background: linear-gradient(to bottom, #000000 0%, #484848 100%); background-position: 50% 50%; background-repeat: no-repeat; background-size: cover;">
        <img style="width:50%" class="footerbuttonsimage" src="Images/Footer/COPYRIGHT.png">
        <div style="height: 2vh"></div>
        <div style="background-position: 100% 100%; display: flex; justify-content: center;">
        <img class="cpsline" style="float:left; width:10%; height:10%; background-position: 10% 10%;" src="Images/Footer/CGSLogo.png">
        <img class="cpsline" background-position: 50% 50%; width="20%" height="100%" src="Images/Footer/Pegi.png">
        <button class="buttons socials" onclick="goX()"><img width="100%" class="cpsline" src="Images/Footer/XLogo.png"></button>
        <button class="buttons socials" onclick="goInsta()"><img width="100%" class="cpsline" src="Images/Footer/InstagramLOGO.png"></button>
        <button class="buttons socials" onclick="goYT()"><img width="100%" class="cpsline" src="Images/Footer/YouTubeLOGO.png"></button>
        <button class="buttons socials" onclick="goTikTok()"><img width="100%" class="cpsline" src="Images/Footer/TikTokLOGO.png"></button>
        </div>
        <div style="height: 2vh"></div>
        <div style="height: 100%; width: 80%; background-position: 100% 100%; display: flex; justify-content: center;">
            <button class="buttons footerbuttons" onclick="tosPage()"><img type="image" class="footerbuttonsimage" src="Images/Footer/TOS.png"></button>
            <button class="buttons footerbuttons" onclick="ppPage()"><img type="image" class="footerbuttonsimage" src="Images/Footer/PP.png"></button>
            <button class="buttons footerbuttons" onclick="ciPage()"><img type="image" class="footerbuttonsimage" src="Images/Footer/CI.png"></button>
            <button class="buttons footerbuttons" onclick="eulaPage()"><img type="image" class="footerbuttonsimage" src="Images/Footer/EULA.png"></button>
            <button class="buttons footerbuttons" onclick="ePage()"><img type="image" class="footerbuttonsimage" src="Images/Footer/E.png"></button>
            <button class="buttons footerbuttons" onclick="fPage()"><img type="image" class="footerbuttonsimage" src="Images/Footer/F.png"></button>
        </div>
        <div style="height: 2vh"></div>
    </div>
    `;
    /* INSERT HTML */
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});