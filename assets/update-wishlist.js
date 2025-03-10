<<<<<<< HEAD
function updateWishlistCounter(){
    const wishlistCount = JSON.parse(localStorage.getItem('wishList'))?.length;
    if (wishlistCount) {
        document.querySelector('.alg-wc-wl-counter').textContent = wishlistCount;
    } else {
        document.querySelector('.alg-wc-wl-counter').textContent = 0;
    }
=======
function updateWishlistCounter(){
    const wishlistCount = JSON.parse(localStorage.getItem('wishList'))?.length;
    if (wishlistCount) {
        document.querySelector('.alg-wc-wl-counter').textContent = wishlistCount;
    } else {
        document.querySelector('.alg-wc-wl-counter').textContent = 0;
    }
>>>>>>> 8d6381e73c881270f096098f63c9049fad2526aa
};