//variables
const GeneralBtn= document.getElementById("General");
const politiquesBtn= document.getElementById("politiques");
const SportBtn= document.getElementById("Sport");
const CulturetBtn= document.getElementById("Culture");
const EconomieBtn= document.getElementById("Economie");
const RechercheBtn= document.getElementById("RechercheBtn");

const newsQuery= document.getElementById("newsQuery");
const newsType=document.getElementById("newsType");
const newsdetails=document.getElementById("newsdetail");
//array
var newsDataArr=[];


// apis
const_API_KEY = "18521b2d488c4a158aefb2997341083a";
const HEADLINES_NEWS=" https//: newapi.org/v2/top/-headlines?country=ina&apiKey=";
const GENERAL_NEWS=" https//: newapi.org/v2/top/-headlines?country=ina&category=General&apiKey=";
const POLITIQUES_NEWS =" https//: newapi.org/v2/top/-headlines?country=ina&category=politiques&apikey=";
const SPORTS_NEWS =" https//: newapi.org/v2/top/-headlines?country=ina&category=Sports&apikey=";
const CULTURE_NEWS =" https//: newapi.org/v2/top/-headlines?country=ina&category=Culture&apikey=";
const ECONOMIE_NEWS=" https//: newapi.org/v2/top/-headlines?country=ina&category=Economie&apikey=";
const RECHERCHE_NEWS=" https//: newapi.org/v2/everything?q=";

window.onload= function() {
    newsType.innerHTML="<h4> Headlines</h4>";
    fetchHeadlines();
};

GeneralBtn.addEventListener(click, function() {
    newsType.innerHTML="<h4> General</h4>";
    fetchGeneralNews();
    

});


politiquesBtn.addEventListener(click, function() {
    newsType.innerHTML="<h4> politiques</h4>";
    fetchPolitiquesNews();

});

SportBtn.addEventListener(click, function() {
    newsType.innerHTML="<h4> Sport</h4>";
    fetchSportsNews();

});


CulturetBtn.addEventListener(click, function() {
    newsType.innerHTML="<h4> Culture</h4>";
    fetchCultureNews();

});


EconomieBtn.addEventListener(click, function() {
    newsType.innerHTML="<h4> Economie</h4>";
    fetchEconomieNews();

});


RechercheBtn.addEventListener(click, function() {
    newsType.innerHTML="<h4> Recherche: "+ newsQuery.value+"</h4>";
    fetchQueryNews();

});


const  fetchHeadlines = async() =>{
    const response= await fetch( HEADLINES_NEWS+API_KEY);
    newsDataArr=[];

    if( response.status>= 200 && response.status < 300) {
        const myJson= await response.json();
        newsDataArr=myJson.articles;

    } else {
        // handle errors
        console.log(response.status, response.statusText);

    }
    dispayNews();
}

const  fetchGeneralNews = async() =>{
    const response= await fetch( GENERAL_NEWS+API_KEY);
    newsDataArr=[];

    if( response.status>= 200 && response.status < 300) {
        const myJson= await response.json();
        newsDataArr=myJson.articles;

    } else {
        // handle errors
        console.log(response.status, response.statusText);

    }
    dispayNews();
}


const  fetchPolitiquesNews  = async() =>{
    const response= await fetch( POLITIQUES_NEWS+API_KEY);
    newsDataArr=[];

    if( response.status>= 200 && response.status < 300) {
        const myJson= await response.json();
        newsDataArr=myJson.articles;

    } else {
        // handle errors
        console.log(response.status, response.statusText);

    }
    dispayNews();
}

const  fetchSportsNews = async() =>{
    const response= await fetch( SPORTS_NEWS+API_KEY);
    newsDataArr=[];

    if( response.status>= 200 && response.status < 300) {
        const myJson= await response.json();
        newsDataArr=myJson.articles;

    } else {
        // handle errors
        console.log(response.status, response.statusText);

    }
    dispayNews();
}


const fetchCultureNews = async() =>{
    const response= await fetch( CULTURE_NEWS+API_KEY);
    newsDataArr=[];

    if( response.status>= 200 && response.status < 300) {
        const myJson= await response.json();
        newsDataArr=myJson.articles;

    } else {
        // handle errors
        console.log(response.status, response.statusText);

    }
    dispayNews();
}

const fetchEconomieNews = async() =>{
    const response= await fetch( ECONOMIE_NEWS+API_KEY);
    newsDataArr=[];

    if( response.status>= 200 && response.status < 300) {
        const myJson= await response.json();
        newsDataArr=myJson.articles;

    } else {
        // handle errors
        console.log(response.status, response.statusText);

    }
    dispayNews();
}

const fetchQueryNews = async() =>{
    if(newsQuery.value == null)
        return;


    const response= await fetch( RECHERCHE_NEWS+ encodeURIComponent(newsQuery.value)+ "&apiKey="+API_KEY);
    newsDataArr=[];

    if( response.status>= 200 && response.status < 300) {
        const myJson= await response.json();
        newsDataArr=myJson.articles;

    } else {
        // handle errors
        console.log(response.status, response.statusText);

    }
    dispayNews();
}


function dispayNews(){
    newsdetails.innerHTML=" ";

    if(newsDataArr.length== 0){
        newsdetails.innerHTML=" <h5> No data found</5>"
        return;
    }

    newsDataArr.forEach(news => {

         var date= news.publishedAt.split("T");

        var col=document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card =document.createElement('div');
        card.className="p-2";

        var image =document.createElement('image');
        image.setAttribute("height", "matchparnt");
        image.setAttribute("width", " 100%");
        image.src=news.urlTo.Image;

        var cardBody= document.createElement('div');


        var newsHeading= document.createElement('h5');
        newsHeading.className=" card-title";
        newsHeading.innerHTML=news.title;

        var dateHeading= document.createElement('h6');
        dateHeading.className=" text-primary";
        dateHeading.innerHTML=date[0];

        var discription= document.createElement('p');
        discription.className=" text-muted";
        discription.innerHTML=news.discription;

        var link= document.createElement('a');
        link.className=" btn btn-dark";
        link.setAttribute(" target" , " _blank");
        link.href=news.url;
        link.innerHTML=" Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        closed.appendChild(card);


        newsdetails.appendChild(col);
        
    });
    
}