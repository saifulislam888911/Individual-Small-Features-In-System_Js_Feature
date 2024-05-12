console.log('Js File : cart_Discount.js');



document.getElementById('applyDiscount').addEventListener('click', function(){
    console.log('Button Clicked : Apply');

    const productPrice = document.getElementById('productPrice');
    const productPricePrevious = parseFloat(productPrice.innerText);

    const discount = (productPricePrevious * (30/100));
    const discountedPrice = (productPricePrevious - discount);

    const productPriceFinal = document.getElementById('finalPrice');
    productPriceFinal.innerText = discountedPrice;

    console.log(productPricePrevious, discountedPrice )
})