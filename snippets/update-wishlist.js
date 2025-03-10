function updateWishlistCounter(){
    const wishlistCount = JSON.parse(localStorage.getItem('wishList'))?.length;
    if (wishlistCount) {
        document.querySelector('.alg-wc-wl-counter').textContent = wishlistCount;
    } else {
        document.querySelector('.alg-wc-wl-counter').textContent = 0;
    }
};

    updateWishlistCounter();