$(() => {
    $('#datepicker1').datepicker();
    $('#datepicker2').datepicker();
  
    let mobileMenuIcon = $('#mobile-cta');
    let mobileExitIcon = $('#mobile-exit');
    let menuItems = $('.menu-items');
    let meetUs = $('.meet-us');
    let menuDrop = $('.menu-drop');
    let adultsNumberMenu = $('.ad');
    let childrenNumberMenu = $('.ch');
    let adultsMenuArrow = $('.adults-arrow');
    let childrenMenuArrow = $('.children-arrow');
    let numbersAdults = $('.a');
    let numbersChildren = $('.c');
    let selectAdults = $('.valueA');
    let selectChildren = $('.valueC');

    let showMenu = false;
    let show = false;
    let showAdults = false;
    let showChildren = false;

    

    mobileMenuIcon.on('click', ()=> {
        if(!showMenu){
            menuItems.css('display','flex');
            showMenu = true;
        }
    })
   
    mobileExitIcon.on('click',() => {
        if(showMenu) {
            menuItems.css('display' ,'none');
            showMenu = false;
        }
    })
    adultsMenuArrow.on('click', () => {
        if (!showAdults) {
            adultsNumberMenu.addClass('menu-display');
            showAdults = true;
            numbersAdults.on('click', (e) => {

                adultsNumberMenu.removeClass('menu-display');
               
                
                selectAdults.text(e.target.textContent);
                console.log(selectAdults)
                showAdults = false;

            });
        }
    })

    childrenMenuArrow.on('click', () => {
        if (!showChildren) {
            childrenNumberMenu.addClass('menu-display');
            showChildren = true;
            numbersChildren.on('click', (e) => {

                childrenNumberMenu.removeClass('menu-display');
               
                
                selectChildren.text(e.target.textContent);
                console.log(selectChildren)
                showChildren = false;

            });
        }
    })




    meetUs.on('click', () => {
        if (!show) {
            menuDrop.addClass('menu-display');
            show = true;
        } else {
            menuDrop.removeClass('menu-display');
            show = false;
        }
    })





})