
const cartProducts = []

const wishlistProduct = []

let count = 6
let increament = ()=> {
    count++
    console.log(count);
}




function handleCart(id,name,imgSrc,price, desc){
    cartProducts = {
        id: id,
        title: name,
        price: price,
        imageSrc: imgSrc,
        desc : desc
    }
    localStorage.setItem("cartProduct" , JSON.stringify(cartProducts));
}


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



