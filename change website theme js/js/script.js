   

function hideCheck()
{
    var HeaderBtn = document.getElementById("headerBtn");
    var Header = document.querySelector(".headerOuter");
    if(HeaderBtn.checked == true)
    {
        Header.style.display = "none";
    }
    else
    {
        Header.style.display = "flex";
    }
}

function linkHide()
{
    var LinkBtn = document.getElementById("linksBtn");
    var NavBar = document.querySelector(".navbar");
    if(LinkBtn.checked == true)
    {
        NavBar.style.display = "none";
    }
    else{
        NavBar.style.display = "flex";
    }
}

function sectionHide()
{
    var leftSectionBtn = document.getElementById("leftMenuBtn");
    var lSection = document.querySelector("#boxLeft");
    var boxRight = document.querySelector("#mainContainer");
    
    if(leftSectionBtn.checked == true)
    {
        lSection.style.display = "none";
        boxRight.style.margin = "auto";
    }
    else{
        lSection.style.display = "block";
    }
}

function backgrounddColor()
{
    var colorPicker = document.querySelector("#bgColorBtn").value;
    var bodyColor = document.querySelector("#mainContainer");
    var bodyColor1 = document.querySelector("#boxLeft");
    bodyColor.style.backgroundColor = colorPicker;
    bodyColor1.style.backgroundColor = colorPicker;
}

function headerTextColor()
{
    var TextColorBtn = document.querySelector("#textColorBtn").value;
    document.querySelector("#HeaderText").style.color = TextColorBtn;
    document.querySelector("#HeaderText1").style.color = TextColorBtn;
}

function bgImageChange()
{

    var BgImageChanger = document.querySelector("#bgImageBtn").value;
    alert(BgImageChanger);
    var img=document.createElement("img");
    
    img1=BgImageChanger.split('\\');
    //alert(img1[2]);
    img.setAttribute('src',"F:\\CODING\\AGT Training\\Divs practice\\tmp1\\"+img1[2]);
    var theme=document.querySelector(".themeEl");
    theme.appendChild(img);
    theme.innerHTML=`<img src='${img1[2]}'/>`;
    document.querySelector("#backgroundImage").style.backgroundImage = img1[2];
}

function navBarChange()
{
    var NavbarLinks = document.querySelector("#LinksbgColorBtn").value;
    document.querySelector(".navbarLinks").style.color = NavbarLinks;
}