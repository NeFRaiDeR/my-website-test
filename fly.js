const btn = document.querySelectorAll('.country-btn')
const catalog = document.querySelector('.catalog')

btn.forEach(button => {
    button.addEventListener('click', function() {
        const country = this.dataset.country;

        switch(country){
            case 'france':
                catalog.innerHTML =`
                <div class="card">
                    <img src="img/card_1.png">
                    <div>Марсель Руссо</div>
                    <h2>Охота Амура</h2>
                    <a>Холст, масло (50х80)</a>
                    <p>14 500 руб</p>
                    <button>В корзину</button>
                </div>
                <div class="card">
                    <img src="img/card_2.png">
                    <div>Анри Селин</div>
                    <h2>Дама с собачкой</h2>
                    <a>Акрил, бумага (50х80)</a>
                    <p>16 500 руб</p>
                    <button>В корзину</button>
                </div>
                <div class="card">
                    <img src="img/card_3.png">
                    <div>Франсуа Дюпон</div>
                    <h2>Процедура</h2>
                    <a>Цветная литография (40х60)</a>
                    <p>20 000 руб</p>
                    <button>В корзину</button>
                </div>
                <div class="card">
                    <img src="img/card_4.png">
                    <div>Луи Детуш</div>
                    <h2>Роза</h2>
                    <a>Бумага, акрил (50х80)</a>
                    <p>12 000 руб</p>
                    <button>В корзину</button>
                </div>
                <div class="card">
                    <img src="img/card_5.png">
                    <div>Франсуа Дюпон</div>
                    <h2>Птичья трапеза</h2>
                    <a>Цветная литография (40х60)</a>
                    <p>22 500 руб</p>
                    <button>В корзину</button>
                </div>
                <div class="card">
                    <img src="img/card_6.png">
                    <div>Пьер Моранж</div>
                    <h2>Пейзаж с рыбой</h2>
                    <a>Цветная литография (40х60)</a>
                    <p>20 000 руб</p>
                    <button>В корзину</button>
                </div>`;
                break;
            case 'germany':
                catalog.innerHTML=`
                <div class="card">
                    <img src="img/german_1.png">
                    <div>Курт Вернер</div>
                    <h2>Над городом</h2>
                    <a>Цветная литография (40х60)</a>
                    <p>16 000 руб</p>
                    <button>В корзину</button>
                </div>
                <div class="card">
                    <img src="img/german_2.png">
                    <div>Макс Рихтер</div>
                    <h2>Птенцы</h2>
                    <a>Холст, масло (50х80)</a>
                    <p>14 500 руб</p>
                    <button>В корзину</button>
                </div>
                <div class="card">
                    <img src="img/german_3.png">
                    <div>Мартин Майер</div>
                    <h2>Среди листьев</h2>
                    <a>Цветная литография (40х60)</a>
                    <p>20 000 руб</p>
                    <button>В корзину</button>
                </div>
                <div class="card">
                    <img src="img/german_4.png">
                    <div>Герман Беккер</div>
                    <h2>Яркая птица</h2>
                    <a>Цветная литография (40х60)</a>
                    <p>13 000 руб</p>
                    <button>В корзину</button>
                </div>
                <div class="card">
                    <img src="img/german_5.png">
                    <div>Вульф Бауэр</div>
                    <h2>Дятлы</h2>
                    <a>Бумага, акрил (50х80)</a>
                    <p>20 000 руб</p>
                    <button>В корзину</button>
                </div>
                <div class="card">
                    <img src="img/german_6.png">
                    <div>Вальтер Хартманн</div>
                    <h2>Большие воды</h2>
                    <a>Бумага, акрил (50х80)</a>
                    <p>23 000 руб</p>
                    <button>В корзину</button>
                </div>`;
                break;
            case 'england':
                catalog.innerHTML=`
                <div class="card">
                    <img src="img/eng_1.png">
                    <div>Пол Смит</div>
                    <h2>Дикий зверь</h2>
                    <a>Акварель, бумага (50х80)</a>
                    <p>19 500 руб</p>
                    <button>В корзину</button>
                </div>
                <div class="card">
                    <img src="img/eng_2.png">
                    <div>Джон Уайт</div>
                    <h2>Скалистый берег</h2>
                    <a>Цветная литография (40х60)</a>
                    <p>17 500 руб</p>
                    <button>В корзину</button>
                </div>
                <div class="card">
                    <img src="img/eng_3.png">
                    <div>Джим Уотсон</div>
                    <h2>Река и горы</h2>
                    <a>Акварель, бумага (50х80)</a>
                    <p>20 500 руб</p>
                    <button>В корзину</button>
                </div>
                <div class="card">
                    <img src="img/eng_4.png">
                    <div>Юджин Зиллион</div>
                    <h2>Белый попугай</h2>
                    <a>Цветная литография (40х60)</a>
                    <p>16 500 руб</p>
                    <button>В корзину</button>
                </div>
                <div class="card">
                    <img src="img/eng_5.png">
                    <div>Эрик Гиллман</div>
                    <h2>Ночная рыба</h2>
                    <a>Бумага, акрил (50х80)</a>
                    <p>12 500 руб</p>
                    <button>В корзину</button>
                </div>
                <div class="card">
                    <img src="img/eng_6.png">
                    <div>Альфред Барр</div>
                    <h2>Рыжий кот</h2>
                    <a>Цветная литография (40х60)</a>
                    <p>21 000 руб</p>
                    <button>В корзину</button>
                </div>`;
                break;
        }
        console.log(`Нажата кнопка: ${country}`);
    });
});