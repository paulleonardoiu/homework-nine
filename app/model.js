var MODEL = (function(){
    var _homePage = ` <h1 class="header">APARTMENT #1</h1>
<div class="images">
    <div id="image" class="img"><img src="assets/images/apt-01.jpg" alt="apt1"></div>
    <div id="image" class="img"><img src="assets/images/apt-02.jpg" alt="apt2"></div>
    <div id="image" class="img"><img src="assets/images/apt-03.webp" alt="apt3"></div>
</div>
<div class="text">
    <div class="textBox">Choosing an apartment in Brooklyn, New York, can be an exciting yet daunting task, given the borough's diverse neighborhoods and housing options. To make an informed decision, it's essential to consider several factors that align with your preferences and needs. Here are five key aspects to keep in mind when selecting the perfect apartment in Brooklyn.</div>
    <div class="textBox">Brooklyn is known for its diverse neighborhoods, each with its unique character. Consider what matters most to you—proximity to work, public transportation, parks, nightlife, or a specific cultural scene. Do some research on different neighborhoods to find the one that aligns with your lifestyle and preferences. The choice between trendy Williamsburg, family-friendly Park Slope, or historic Brooklyn Heights will greatly impact your daily life.</div>
    <div class="textBox">Determine your budget before you start your apartment search. Brooklyn's rental market can vary widely in terms of pricing, so it's essential to know what you can comfortably afford. Remember to account for utilities, transportation costs, and potential rental fees. Brooklyn offers a range of housing options, from luxury high-rises to more affordable walk-up apartments, so there are choices to suit various budgets.
    </div>
    <div class="textBox">Consider the amenities that are important to you. Do you need a gym, on-site laundry, parking, or a pet-friendly building? Brooklyn's apartment buildings offer a wide range of amenities, so prioritize what matters most to you and focus your search on properties that meet your criteria.
    </div>
    <div class="textBox"> Investigate the safety of the neighborhood you're considering. You can research crime rates and talk to current residents to get a sense of the area's security. Additionally, assess the accessibility of public transportation options, as Brooklyn has an extensive subway and bus network, making it crucial for easy commuting to work or other parts of the city.
    </div>
    </div>`;
    var _aboutPage = `<h1 class="header">APARTMENT #2</h1>
    <div class="images">
        <div id="image" class="img"><img src="assets/images/apt-04.webp" alt="apt4"></div>
        <div id="image" class="img"><img src="assets/images/apt-05.jpg" alt="apt5"></div>
        <div id="image" class="img"><img src="assets/images/apt-06.jpeg" alt="apt6"></div>
    </div>
    <div class="text">
        <div class="textBox">Choosing an apartment in Brooklyn, New York, can be an exciting yet daunting task, given the borough's diverse neighborhoods and housing options. To make an informed decision, it's essential to consider several factors that align with your preferences and needs. Here are five key aspects to keep in mind when selecting the perfect apartment in Brooklyn.</div>
        <div class="textBox">Brooklyn is known for its diverse neighborhoods, each with its unique character. Consider what matters most to you—proximity to work, public transportation, parks, nightlife, or a specific cultural scene. Do some research on different neighborhoods to find the one that aligns with your lifestyle and preferences. The choice between trendy Williamsburg, family-friendly Park Slope, or historic Brooklyn Heights will greatly impact your daily life.</div>
        <div class="textBox">Determine your budget before you start your apartment search. Brooklyn's rental market can vary widely in terms of pricing, so it's essential to know what you can comfortably afford. Remember to account for utilities, transportation costs, and potential rental fees. Brooklyn offers a range of housing options, from luxury high-rises to more affordable walk-up apartments, so there are choices to suit various budgets.
        </div>
        <div class="textBox">Consider the amenities that are important to you. Do you need a gym, on-site laundry, parking, or a pet-friendly building? Brooklyn's apartment buildings offer a wide range of amenities, so prioritize what matters most to you and focus your search on properties that meet your criteria.
        </div>
        <div class="textBox"> Investigate the safety of the neighborhood you're considering. You can research crime rates and talk to current residents to get a sense of the area's security. Additionally, assess the accessibility of public transportation options, as Brooklyn has an extensive subway and bus network, making it crucial for easy commuting to work or other parts of the city.
        </div>
    </div>`;
    var _imagesPage = `<h1 class="header">APARTMENT #3</h1>
    <div class="images">
        <div id="image" class="img"><img src="assets/images/apt-07.jpeg" alt="apt7"></div>
        <div id="image" class="img"><img src="assets/images/apt-08.jpeg" alt="apt8"></div>
        <div id="image" class="img"><img src="assets/images/apt-09.jpg" alt="apt9"></div>
    </div>
    <div class="text">
        <div class="textBox">Choosing an apartment in Brooklyn, New York, can be an exciting yet daunting task, given the borough's diverse neighborhoods and housing options. To make an informed decision, it's essential to consider several factors that align with your preferences and needs. Here are five key aspects to keep in mind when selecting the perfect apartment in Brooklyn.</div>
        <div class="textBox">Brooklyn is known for its diverse neighborhoods, each with its unique character. Consider what matters most to you—proximity to work, public transportation, parks, nightlife, or a specific cultural scene. Do some research on different neighborhoods to find the one that aligns with your lifestyle and preferences. The choice between trendy Williamsburg, family-friendly Park Slope, or historic Brooklyn Heights will greatly impact your daily life.</div>
        <div class="textBox">Determine your budget before you start your apartment search. Brooklyn's rental market can vary widely in terms of pricing, so it's essential to know what you can comfortably afford. Remember to account for utilities, transportation costs, and potential rental fees. Brooklyn offers a range of housing options, from luxury high-rises to more affordable walk-up apartments, so there are choices to suit various budgets.
        </div>
        <div class="textBox">Consider the amenities that are important to you. Do you need a gym, on-site laundry, parking, or a pet-friendly building? Brooklyn's apartment buildings offer a wide range of amenities, so prioritize what matters most to you and focus your search on properties that meet your criteria.
        </div>
        <div class="textBox"> Investigate the safety of the neighborhood you're considering. You can research crime rates and talk to current residents to get a sense of the area's security. Additionally, assess the accessibility of public transportation options, as Brooklyn has an extensive subway and bus network, making it crucial for easy commuting to work or other parts of the city.
        </div>
    </div>`; 
    var _contactPage = `<h1 class="header">APARTMENT #4</h1>
    <div class="images">
        <div id="image" class="img"><img src="assets/images/apt-10.jpg" alt="apt10"></div>
        <div id="image" class="img"><img src="assets/images/apt-11.jpeg" alt="apt11"></div>
        <div id="image" class="img"><img src="assets/images/apt-12.jpeg" alt="apt12"></div>
    </div>
    <div class="text">
        <div class="textBox">Choosing an apartment in Brooklyn, New York, can be an exciting yet daunting task, given the borough's diverse neighborhoods and housing options. To make an informed decision, it's essential to consider several factors that align with your preferences and needs. Here are five key aspects to keep in mind when selecting the perfect apartment in Brooklyn.</div>
        <div class="textBox">Brooklyn is known for its diverse neighborhoods, each with its unique character. Consider what matters most to you—proximity to work, public transportation, parks, nightlife, or a specific cultural scene. Do some research on different neighborhoods to find the one that aligns with your lifestyle and preferences. The choice between trendy Williamsburg, family-friendly Park Slope, or historic Brooklyn Heights will greatly impact your daily life.</div>
        <div class="textBox">Determine your budget before you start your apartment search. Brooklyn's rental market can vary widely in terms of pricing, so it's essential to know what you can comfortably afford. Remember to account for utilities, transportation costs, and potential rental fees. Brooklyn offers a range of housing options, from luxury high-rises to more affordable walk-up apartments, so there are choices to suit various budgets.
        </div>
        <div class="textBox">Consider the amenities that are important to you. Do you need a gym, on-site laundry, parking, or a pet-friendly building? Brooklyn's apartment buildings offer a wide range of amenities, so prioritize what matters most to you and focus your search on properties that meet your criteria.
        </div>
        <div class="textBox"> Investigate the safety of the neighborhood you're considering. You can research crime rates and talk to current residents to get a sense of the area's security. Additionally, assess the accessibility of public transportation options, as Brooklyn has an extensive subway and bus network, making it crucial for easy commuting to work or other parts of the city.
        </div>
    </div>`;

    var _updateView = function(pageName){
        var pageContent = "_" + pageName;
        $("#app").html(eval(pageContent));
    }

    return{
        updateView: _updateView
    };
})();