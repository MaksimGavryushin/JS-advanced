const products = [
    {id: 1, title: 'Notebook', price: 2000, img: "img/Notebook612x612.jpg"},
    {id: 2, title: 'Mouse', price: 20, img: "img/Mouse612x612.jpg"},
    {id: 3, title: 'Keyboard', price: 200, img: "img/Keyboard-2612x612.jpg"},
    {id: 4, title: 'Gamepad', price: 50, img: "img/Gamepad612x612.jpg"},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (obj) => {
    return `<div class="product-item">
                <img src="${obj.img}" class="img-product">
                <h3>${obj.title}</h3>
                <p>${obj.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join("");
};

renderPage(products);