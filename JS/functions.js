let counter = 0;
let sum = document.querySelector('.plus');
let show = document.querySelector('.counter');
let less = document.querySelector('.minus');
let add_to_cart = document.querySelector('.add-to-cart');
let cart_icon = document.querySelector('.cart_icon');
let cart_icon_mobile = document.querySelector('.cart_icons');
let cart_empty = document.getElementById('cart_show_empty');
let cart_counter = document.getElementById('cart_counter');
let images = document.querySelectorAll('menu-image');
let del = document.getElementById('delete-btn');
let shop = document.querySelector('.shop');

sum.addEventListener('click', function() {
  counter++;
  show.innerHTML = counter;
});

less.addEventListener('click', function() {
    if (counter == 1){
        show.innerHTML = counter;
    }else{
        counter--;
        show.innerHTML = counter; 
    }
});
add_to_cart.addEventListener('click', function() {
     let shop_shown = document.getElementById('shop_shown');
    cart_number(counter);
    let show = document.getElementById('cart_show');
    show.style.visibility = 'visible';
    cart_empty.style.display = 'none';
    shop_shown.style.display = 'flex';
    shop_shown.style.visibility = 'visible';
});

let count_items = 0;
function cart_number(counter){
    cart_counter.style.display= "block";
    cart_counter.style.position = "absolute";
    cart_counter.style.backgroundColor = "hsl(26, 100%, 55%)";
    cart_counter.style.color = "hsl(0, 0%, 100%)";
    cart_counter.style.borderRadius = "37%";
    cart_counter.style.margin = "0 auto";
    cart_counter.style.width = "1.5%";
    cart_counter.style.height = "1.8%";
    cart_counter.style.fontSize = "x-small";
    cart_counter.style.top = "5%";
    cart_counter.style.left = "84.5%";  

    let sum_num  = count_items + counter;  
    if(count_items >= 1){
        cart_counter.innerHTML = sum_num;
    }else{
        cart_counter.innerHTML = sum_num;
    }
    count_items = sum_num;
    cart_total(sum_num);
}

function cart_total(sum_num){
    total_price = document.getElementById('total_price');
    total_item = document.getElementById('total_item');
    flex_content = document.querySelector('.shop_flex');
    cart_empty.style.visibility= 'hidden';
    
    shop.style.visibility='visible';
    shop.style.display='flex';
    flex_content.style.visibility='visible';
    flex_content.style.display='flex';
    flex_content.style.flexDirection = 'column';

     
    total_item.innerHTML = sum_num;
    total_price.innerHTML = ('$' + sum_num * 125);
}

cart_icon.addEventListener('click', function() {
    let show = document.getElementById('cart_show');
    let shop_shown = document.getElementById('shop_shown');
    if(show.style.visibility === 'visible'){
        show.style.visibility= 'hidden';
        show.style.display= 'none';
        shop.style.visibility= 'hidden';
        shop_shown.style.visibility = 'hidden';
        shop_shown.style.display = 'none';
    }else{
        show.style.visibility= 'visible';
        show.style.display= 'flex';
    }
});

cart_icon_mobile.addEventListener('click', function() {
    let show = document.getElementById('cart_show');
    let shop_shown = document.getElementById('shop_shown');
    if(show.style.visibility === 'visible'){
        show.style.visibility= 'hidden';
        show.style.display= 'none';
        shop.style.visibility= 'hidden';
        shop_shown.style.visibility = 'hidden';
        shop_shown.style.display = 'none';
    }else{
        show.style.visibility= 'visible';
        show.style.display= 'flex';
    }
});

del.addEventListener('click', function(){
    let shop_shown = document.getElementById('shop_shown');
        shop_shown.style.visibility = 'hidden';
        shop_shown.style.display = 'none';
        cart_empty.style.visibility = 'visible';
        cart_empty.style.display = 'flex';
        count_items = 0;
        cart_counter.style.display= "none";


});

//cart_show_empty.toogle.shop

