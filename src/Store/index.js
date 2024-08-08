
let cartProducts = []

let wishlistProduct = []



function handleCart(id,name,imgSrc,price, desc){
    cartProducts.push({
        id: id,
        title: name,
        price: price,
        imageSrc: imgSrc,
        desc : desc
    })

 

   localStorage.setItem("cartProduct" , JSON.stringify(cartProducts));
}
let cartProducts2 = JSON.parse(localStorage.getItem("cartProduct"))

cartProducts = [...cartProducts2]


function handelWishlist(id,name,imgSrc,price, desc){

    wishlistProduct.push({
        id: id,
        title: name,
        price: price,
        imageSrc: imgSrc,
        desc : desc
    })

    localStorage.setItem("wishlistProduct" , JSON.stringify(wishlistProduct));
}
let wishlistProduct2 = JSON.parse(localStorage.getItem("wishlistProduct"))

wishlistProduct = [...wishlistProduct2]


