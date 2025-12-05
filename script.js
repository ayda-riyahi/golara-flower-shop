const products = [
    { id: 1, name: 'سبد گل چوبی', price: '2,260,000', image: 'photo/sabad1.webp', category: 'sabad-gol' },
    { id: 2, name: 'سبد گل رز و آفتابگردان', price: '3,750,000', image: 'photo/sabad2.jpg', category: 'sabad-gol' },
    { id: 3, name: 'سبد گل میخک و داوودی', price: '5,600,000', image: 'photo/sabad3.webp', category: 'sabad-gol' },
    { id: 4, name: 'سبد گل شیب دار لیسیانتوس', price: '4,500,000', image: 'photo/sabad4.webp', category: 'sabad-gol' },
    { id: 5, name: 'سبد گل حصیری گندم', price: '2,000,000', image: 'photo/sabad5.webp', category: 'sabad-gol' },
    { id: 6, name: 'سبد گل کوچک بنفش', price: '1,620,000', image: 'photo/sabad6.jpg', category: 'sabad-gol' },
    { id: 7, name: 'دسته گل رز سفید', price: '3,250,000', image: 'photo/daste1.jpg', category: 'daste-gol' },
    { id: 8, name: 'دسته گل رز سفید و نباتی', price: '6,150,000', image: 'photo/daste2.jpg', category: 'daste-gol' },
    { id: 9, name: 'دسته گل لوکس رز', price: '4,700,000', image: 'photo/daste3.jpg', category: 'daste-gol' },
    { id: 10, name: 'دسته گل ظریف تم صورتی', price: '3,200,000', image: 'photo/daste4.webp', category: 'daste-gol' },
    { id: 11, name: 'دسته گل بنفش آلسترومریا', price: '4,105,000', image: 'photo/daste5.jpg', category: 'daste-gol' },
    { id: 12, name: 'دسته گل لیلیوم تسلیت', price: '2,170,000', image: 'photo/daste6.jpg', category: 'daste-gol' },
    { id: 13, name: 'جام گل شادی', price: '5,000,000', image: 'photo/jam1.jpg', category: 'taj-gol' },
    { id: 14, name: 'جام گل استرلیتزیا', price: '9,900,000', image: 'photo/jam2.webp', category: 'taj-gol' },
    { id: 15, name: 'جام گل آنتوریوم', price: '7,350,000', image: 'photo/jam3.webp', category: 'taj-gol' },
    { id: 16, name: 'جام گل تسلیت', price: '6,760,000', image: 'photo/jam4.jpg', category: 'taj-gol' },
    { id: 17, name: 'جام گل منحنی لیلیوم', price: '9,200,000', image: 'photo/jam5.webp', category: 'taj-gol' },
    { id: 18, name: 'جام گل سفید و آبی', price: '4,170,000', image: 'photo/jam6.webp', category: 'taj-gol' },
    { id: 19, name: 'ورزیا زبرا', price: '2,500,000', image: 'photo/giahan1.jpg', category: 'giahan' },
    { id: 20, name: 'بونسای کاج نانا', price: '1,300,000', image: 'photo/giahan2.jpg', category: 'giahan' },
    { id: 21, name: 'ارکیده بنفش', price: '5,200,000', image: 'photo/giahan3.jpg', category: 'giahan' },
    { id: 22, name: 'سانسوریا ابلق', price: '2,950,000', image: 'photo/giahan4.jpg', category: 'giahan' },
    { id: 23, name: 'اگلونما صورتی', price: '1,850,000', image: 'photo/giahan5.jpg', category: 'giahan' },
    { id: 24, name: 'درانسا کامپکت', price: '1,200,000', image: 'photo/giahan6.jpg', category: 'giahan' }
];

function displayProducts(category) {
    const productList = document.getElementById(category);
    productList.innerHTML = '';

    const productsToShow = products.filter(product => product.category === category && product.id >= 2 && product.id <= 4
        || product.category === category && product.id >= 7 && product.id <= 9
        || product.category === category && product.id >= 13 && product.id <= 15
        || product.category === category && product.id >= 19 && product.id <= 21
    );

    productsToShow.forEach(product => {
        const productLink = document.createElement('a');
        productLink.href = `productidpage/product${product.id}.html`;

        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        const nameP = document.createElement('p');
        nameP.textContent = product.name;

        const priceSpan = document.createElement('span');
        priceSpan.className = 'price';
        priceSpan.textContent = product.price;

        const currencySpan = document.createElement('span');
        currencySpan.className = 'currency';
        currencySpan.textContent = 'تومان';

        productDiv.appendChild(img);
        productDiv.appendChild(nameP);
        productDiv.appendChild(priceSpan);
        productDiv.appendChild(currencySpan);

        productLink.appendChild(productDiv);
        productList.appendChild(productLink);
    });
}

displayProducts('sabad-gol');
displayProducts('daste-gol');
displayProducts('taj-gol');
displayProducts('giahan');


document.getElementById('open-menu').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('menu').classList.add('open');
});

document.getElementById('close-menu').addEventListener('click', function () {
    document.getElementById('menu').classList.remove('open');
});

document.getElementById('search-button').addEventListener('click', function () {
    const searchTerm = document.getElementById('search-term').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));

    localStorage.setItem('searchResults', JSON.stringify(filteredProducts));
    window.location.href = 'search.html';
    document.getElementById('search-term').value = '';
});







