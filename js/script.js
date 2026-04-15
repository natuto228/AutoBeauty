// ===== ДАННЫЕ ТОВАРОВ =====
const products = [
    { 
        id: 1, 
        name: "Шампунь High Foam", 
        price: 990, 
        category: "body", 
        shortDesc: "Бесконтактная мойка, 1л", 
        description: "Профессиональная автохимия для бесконтактной мойки. Обеспечивает густую пену, которая эффективно удаляет дорожную грязь, битумные пятна и следы насекомых. Не повреждает ЛКП.", 
        specs: "Объём: 1 литр; pH: 7.2 (нейтральный); Страна: Германия; Расход: 30-50 мл на мойку; Срок годности: 3 года.", 
        image: "shampoo-high-foam.jpg",
        reviews: ["Отличная пена! Рекомендую.", "Хороший шампунь, пенится отлично.", "Лучшая пена из всех, что пробовал."] 
    },
    { 
        id: 2, 
        name: "Шампунь Anti-Grease", 
        price: 650, 
        category: "body", 
        shortDesc: "Для удаления битума, 500мл", 
        description: "Эффективно удаляет битумные пятна, следы насекомых и другие стойкие загрязнения. Безопасен для ЛКП.", 
        specs: "Объём: 500 мл; pH: 7.0; Страна: Россия.", 
        image: "shampoo-anti-grease.jpg",
        reviews: ["Отлично отмывает битум!", "Хорошее средство."] 
    },
    { 
        id: 3, 
        name: "Полироль Black Gloss", 
        price: 1290, 
        category: "body", 
        shortDesc: "Восстанавливает блеск, 250мл", 
        description: "Полироль для темных автомобилей. Убирает царапины, придает глубокий блеск.", 
        specs: "Объём: 250 мл; Тип: абразивная.", 
        image: "polish-black-gloss.jpg",
        reviews: ["Машина блестит как новая!", "Хорошо убирает паутинку."] 
    },
    { 
        id: 4, 
        name: "Воск Liquid Wax", 
        price: 790, 
        category: "body", 
        shortDesc: "Защита на 3 месяца, 250мл", 
        description: "Жидкий воск для легкого нанесения. Создает защитный слой на 3 месяца.", 
        specs: "Объём: 250 мл; Состав: карнаубский воск.", 
        image: "wax-liquid.jpg",
        reviews: ["Легко наносится, блеск отличный."] 
    },
    { 
        id: 5, 
        name: "Керамика 9H", 
        price: 1990, 
        category: "body", 
        shortDesc: "Нано-керамическое покрытие", 
        description: "Керамическое покрытие для кузова. Твердость 9H, защита от царапин и химии.", 
        specs: "Объём: 50 мл; Состав: SiO2.", 
        image: "ceramic-9h.jpg",
        reviews: ["Очень стойкое покрытие."] 
    },
    { 
        id: 6, 
        name: "Очиститель салона", 
        price: 790, 
        category: "interior", 
        shortDesc: "Для ткани и кожи, 500мл", 
        description: "Мягкий очиститель для всех типов обивки. Удаляет пятна, не оставляет разводов.", 
        specs: "Объём: 500 мл; Без запаха.", 
        image: "cleaner-interior.jpg",
        reviews: ["Хорошо чистит сидения."] 
    },
    { 
        id: 7, 
        name: "Коврики EVA", 
        price: 3490, 
        category: "interior", 
        shortDesc: "Водоотталкивающие", 
        description: "Автомобильные коврики из EVA, не впитывают влагу, легко моются.", 
        specs: "Материал: EVA; Цвет: черный.", 
        image: "mats-eva.jpg",
        reviews: ["Отличные коврики, подходят идеально."] 
    },
    { 
        id: 8, 
        name: "Чехлы тканевые", 
        price: 2990, 
        category: "interior", 
        shortDesc: "Универсальные", 
        description: "Тканевые чехлы для сидений, дышащие, защищают от загрязнений.", 
        specs: "Состав: полиэстер; Универсальный размер.", 
        image: "covers-fabric.jpg",
        reviews: ["Недорогие и качественные."] 
    },
    { 
        id: 9, 
        name: "Очиститель стёкол", 
        price: 450, 
        category: "glass", 
        shortDesc: "Без разводов, 1л", 
        description: "Специальное средство для стёкол, не оставляет разводов, быстро высыхает.", 
        specs: "Объём: 1 л; Без аммиака.", 
        image: "cleaner-glass.jpg",
        reviews: ["Действительно без разводов."] 
    },
    { 
        id: 10, 
        name: "Антидождь", 
        price: 590, 
        category: "glass", 
        shortDesc: "Для лобового стекла, 250мл", 
        description: "Создает водоотталкивающую пленку на стекле, улучшает видимость в дождь.", 
        specs: "Объём: 250 мл; Нанесение: на влажное стекло.",
        image: "anti-rain.jpg", 
        reviews: ["Эффект хороший, капли скатываются."] 
    }
];

// ===== ДАННЫЕ СТАТЕЙ =====
const articles = [
    { 
        id: 1, 
        title: "Как выбрать шампунь для бесконтактной мойки", 
        date: "1 марта 2026", 
        author: "Гоголева Виктория", 
        content: "<h2>Почему важна бесконтактная мойка?</h2>" +
                 "<p>Бесконтактная мойка с использованием активной пены позволяет удалить грязь без механического воздействия, сохраняя лакокрасочное покрытие автомобиля. Главное - выбрать качественный шампунь, который не повредит кузов и эффективно справится с загрязнениями.</p>" +
                 "<h2>На что обратить внимание при выборе?</h2>" +
                 "<p>При выборе шампуня для бесконтактной мойки важно обратить внимание на уровень pH, концентрацию активной пены, наличие ингибиторов коррозии. Оптимальный pH - нейтральный (7.0-7.5).</p>" +
                 "<h2>Наши рекомендации</h2>" +
                 "<p>Лучшие шампуни: High Foam от AutoBeauty и Anti-Grease. Оба продукта показывают отличные результаты.</p>" 
    },
    { 
        id: 2, 
        title: "Керамическое покрытие: стоит ли?", 
        date: "2 марта 2026", 
        author: "Бацуренко Никита", 
        content: "<h2>Преимущества керамики</h2>" +
                 "<p>Керамическое покрытие обеспечивает долговременную защиту кузова от царапин, химических реагентов и ультрафиолета. Срок службы до 3 лет.</p>" +
                 "<h2>Недостатки</h2>" +
                 "<p>Высокая цена и сложность нанесения. Требует профессиональной подготовки кузова.</p>" +
                 "<h2>Что выбрать: воск или керамику?</h2>" +
                 "<p>Если бюджет ограничен - воск. Для максимальной защиты - керамика.</p>" 
    },
    { 
        id: 3, 
        title: "Уход за салоном: как сохранить кожу", 
        date: "5 марта 2026", 
        author: "Манта-Стайл Илья",  
        content: "<h2>Почему кожа требует ухода?</h2>" +
                 "<p>Кожаные салоны подвержены выцветанию и трещинам. Регулярная чистка и кондиционирование продлевают срок службы.</p>" +
                 "<h2>Лучшие средства</h2>" +
                 "<p>Используйте специальные очистители и кондиционеры для кожи. Избегайте агрессивной химии.</p>" +
                 "<h2>Советы</h2>" +
                 "<p>Чистите салон каждые 2-3 месяца, не оставляйте авто под прямыми солнечными лучами.</p>" 
    },
    { 
        id: 4, 
        title: "Топ-5 полиролей для чёрного авто", 
        date: "9 февраля 2026", 
        author: "Понева Ольга", 
        content: "<h2>Почему чёрный цвет сложный?</h2>" +
                 "<p>На чёрном кузове видны все царапины и разводы. Нужны специальные полироли.</p>" +
                 "<h2>Рейтинг</h2>" +
                 "<p>1. Black Gloss - лучший по цене/качеству.<br>2. Deep Black - для профессионалов.<br>3. Midnight Shine - для быстрой полировки.</p>" +
                 "<h2>Советы по нанесению</h2>" +
                 "<p>Наносите полироль мягкой салфеткой, работайте в тени.</p>" 
    }
];

// ===== КОРЗИНА (localStorage) =====
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
}

function addToCart(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) return;
    const existing = cart.find(item => item.id == productId);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
    }
    saveCart();
    alert(`${product.name} добавлен в корзину!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id != productId);
    saveCart();
    renderCartModal();
}

function clearCart() {
    cart = [];
    saveCart();
    renderCartModal();
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function renderCartModal() {
    const listDiv = document.getElementById('cart-items-list');
    if (!listDiv) return;
    if (cart.length === 0) {
        listDiv.innerHTML = '<p>Корзина пуста</p>';
        document.getElementById('cart-total').textContent = '0';
        return;
    }
    let html = '';
    cart.forEach(item => {
        html += `
            <div class="cart-item">
                <div>
                    <a href="product.html?id=${item.id}">${item.name}</a>
                    <br>${item.price} ₽ x ${item.quantity} = ${item.price * item.quantity} ₽
                </div>
                <button onclick="removeFromCart(${item.id})">🗑️</button>
            </div>
        `;
    });
    listDiv.innerHTML = html;
    document.getElementById('cart-total').textContent = getCartTotal();
}

// ===== ОТОБРАЖЕНИЕ ТОВАРОВ =====
function renderPopularProducts() {
    const container = document.getElementById('popular-products');
    if (!container) return;
    const popularIds = [1, 3, 6];
    const popular = products.filter(p => popularIds.includes(p.id));
    container.innerHTML = popular.map(p => `
        <div class="product-card" data-id="${p.id}" data-category="${p.category}">
            <h3>${p.name}</h3>
            <p>${p.shortDesc}</p>
            <div class="price">${p.price} ₽</div>
            <button class="add-to-cart" data-id="${p.id}">В корзину</button>
            <a href="product.html?id=${p.id}" class="btn-link">Подробнее →</a>
        </div>
    `).join('');
    attachCartButtons();
}

function renderCatalogGrid() {
    const container = document.getElementById('catalog-grid');
    if (!container) return;
    container.innerHTML = products.map(p => `
        <div class="product-card" data-id="${p.id}" data-category="${p.category}">
            <h3>${p.name}</h3>
            <p>${p.shortDesc}</p>
            <div class="price">${p.price} ₽</div>
            <button class="add-to-cart" data-id="${p.id}">В корзину</button>
            <a href="product.html?id=${p.id}" class="btn-link">Подробнее →</a>
        </div>
    `).join('');
    attachCartButtons();
}

function renderBlogGrid() {
    const container = document.getElementById('blog-grid');
    if (!container) return;
    container.innerHTML = articles.map(a => `
        <div class="blog-card">
            <h3>${a.title}</h3>
            <p class="blog-date">${a.date}</p>
            <p>${a.content.substring(0, 100)}...</p>
            <a href="article.html?id=${a.id}" class="btn-link">Читать далее →</a>
        </div>
    `).join('');
}

function attachCartButtons() {
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.removeEventListener('click', cartHandler);
        btn.addEventListener('click', cartHandler);
    });
}

function cartHandler(e) {
    e.preventDefault();
    const id = parseInt(this.getAttribute('data-id'));
    addToCart(id);
}

// ===== СТРАНИЦА ТОВАРА =====
function renderProductPage() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const product = products.find(p => p.id === id);
    if (!product) {
        document.getElementById('product-detail').innerHTML = '<p>Товар не найден</p>';
        return;
    }
    document.title = `${product.name} — AutoBeauty`;
    const html = `
        <div class="product-image">
            <img src="images/${product.image}" alt="${product.name}" class="product-detail-img" onerror="this.src='https://placehold.co/400x400?text=No+Image'">
        </div>
        <div class="product-info">
            <h1>${product.name}</h1>
            <p class="product-short-desc">${product.shortDesc}</p>
            <div class="price">${product.price} ₽</div>
            <button class="add-to-cart" data-id="${product.id}">Добавить в корзину</button>
            <div class="tabs">
                <button class="tab-btn active" data-tab="description">Описание</button>
                <button class="tab-btn" data-tab="specs">Характеристики</button>
                <button class="tab-btn" data-tab="reviews">Отзывы</button>
            </div>
            <div id="description" class="tab-content active">
                <p>${product.description}</p>
            </div>
            <div id="specs" class="tab-content">
                <ul class="specs-list">${product.specs.split(';').map(s => `<li>${s}</li>`).join('')}</ul>
            </div>
            <div id="reviews" class="tab-content">
                ${product.reviews.map(r => `<div class="review"><p>${r}</p></div>`).join('')}
            </div>
        </div>
    `;
    document.getElementById('product-detail').innerHTML = html;
    attachCartButtons();
    initTabs();
}

// ===== СТРАНИЦА СТАТЬИ =====
function renderArticlePage() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const article = articles.find(a => a.id === id);
    if (!article) {
        document.getElementById('article-content').innerHTML = '<p>Статья не найдена</p>';
        return;
    }
    document.title = `${article.title} — AutoBeauty`;
    const html = `
        <h1>${article.title}</h1>
        <div class="article-meta">
            <span>${article.date}</span>
            <span>Автор: ${article.author}</span>
        </div>
        <div class="article-image"> ${article.title}</div>
        ${article.content}
        <div class="related-articles">
            <h3>Похожие статьи</h3>
            <ul>
                ${articles.filter(a => a.id !== id).slice(0, 3).map(a => `<li><a href="article.html?id=${a.id}">${a.title}</a></li>`).join('')}
            </ul>
        </div>
    `;
    document.getElementById('article-content').innerHTML = html;
}

// ===== ТАБЫ =====
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    tabBtns.forEach(btn => {
        btn.removeEventListener('click', tabHandler);
        btn.addEventListener('click', tabHandler);
    });
    function tabHandler(e) {
        const tabId = this.getAttribute('data-tab');
        tabBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
    }
}

// ===== ФИЛЬТРАЦИЯ =====
function initFilters() {
    const filterItems = document.querySelectorAll('.filter-list li');
    const productCards = document.querySelectorAll('.product-card');
    if (!filterItems.length) return;
    filterItems.forEach(filter => {
        filter.addEventListener('click', () => {
            filterItems.forEach(f => f.classList.remove('filter-active'));
            filter.classList.add('filter-active');
            const category = filter.getAttribute('data-category');
            productCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// ===== ПОДБОР ПО КУЗОВУ =====
function initBodySelector() {
    const bodyBtns = document.querySelectorAll('.body-btn');
    const bodyResult = document.getElementById('body-result');
    const recommendations = {
        sedan: 'Для седана рекомендуем: полироль для кузова + чехлы на сиденья + очиститель стёкол',
        hatchback: 'Для хэтчбека рекомендуем: шампунь High Foam + коврики EVA + очиститель салона',
        suv: 'Для внедорожника рекомендуем: керамическое покрытие + щётка для колёс + антидождь'
    };
    bodyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const bodyType = btn.getAttribute('data-body');
            bodyResult.textContent = recommendations[bodyType];
            bodyResult.style.background = '#f5f5f5';
            bodyResult.style.padding = '15px';
            bodyResult.style.borderRadius = '15px';
            bodyResult.style.color = '#D32F2F';
            bodyResult.style.fontWeight = 'bold';
        });
    });
}

// ===== ПОДПИСКА =====
function initSubscribe() {
    const subscribeBtn = document.getElementById('subscribe-btn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', () => {
            const emailInput = document.getElementById('subscribe-email');
            const email = emailInput ? emailInput.value : '';
            if (email && email.includes('@')) {
                alert(`Спасибо за подписку! Скидка 15% отправлена на ${email}`);
                emailInput.value = '';
            } else {
                alert('Пожалуйста, введите корректный email');
            }
        });
    }
}

// ===== ФОРМА ОБРАТНОЙ СВЯЗИ =====
function initFeedbackForm() {
    const form = document.getElementById('feedback-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('form-name').value;
            alert(`Сообщение отправлено! Спасибо, ${name}! Мы ответим вам в ближайшее время.`);
            form.reset();
        });
    }
}

// ===== БУРГЕР-МЕНЮ =====
function initBurger() {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');
    if (burger && navMenu) {
        burger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// ===== КОРЗИНА МОДАЛ =====
function initCartModal() {
    const cartIcon = document.querySelector('.cart-icon');
    const modal = document.getElementById('cart-modal');
    const closeSpan = document.querySelector('.cart-close');
    const clearBtn = document.getElementById('clear-cart-btn');
    if (cartIcon && modal) {
        cartIcon.addEventListener('click', () => {
            renderCartModal();
            modal.style.display = 'block';
        });
        if (closeSpan) closeSpan.onclick = () => modal.style.display = 'none';
        window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };
    }
    if (clearBtn) clearBtn.addEventListener('click', () => { clearCart(); renderCartModal(); });
}

// ===== ТЕКУЩИЙ ГОД =====
function setCurrentYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', () => {
    setCurrentYear();
    updateCartCount();
    initBurger();
    initCartModal();
    initSubscribe();
    initFeedbackForm();
    initBodySelector();
    
    if (document.getElementById('popular-products')) renderPopularProducts();
    if (document.getElementById('catalog-grid')) renderCatalogGrid();
    if (document.getElementById('blog-grid')) renderBlogGrid();
    if (document.getElementById('product-detail')) renderProductPage();
    if (document.getElementById('article-content')) renderArticlePage();
    
    setTimeout(() => {
        initFilters();
        attachCartButtons();
    }, 100);
});