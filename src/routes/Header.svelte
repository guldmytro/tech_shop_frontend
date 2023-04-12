<script>
    import logoImg from '$lib/assets/img/logo.svg';
    import userImg from '$lib/assets/img/icon-user.svg';
    import searchImg from '$lib/assets/img/icon-search.svg';
    import servicesImg from '$lib/assets/img/icon-services.svg';
    import arrowImg from '$lib/assets/img/icon-arrow-down.svg';

    import MiniCart from './MiniCart.svelte';
</script>

<header class="header">
    <div class="container">
        <div class="header-row">
            <a href="/" class="header-logo">
                <img src={logoImg} width="162" height="46" alt="логотип" class="header-logo__img">
            </a>
            <form class="header-search form">
                <fieldset class="form__fieldset">
                    <input type="search" class="form__input" name="search" required placeholder="Пошук товарів">
                    <button type="submit" class="form__btn" aria-label="Пошук">
                        <img src={searchImg} alt="лупа">
                    </button>
                </fieldset>
            </form>
            <div class="header-controls">
                <div class="header-controls__group">
                    <button type="button" class="header-controls__btn">
                        <img src={userImg} alt="користувач" width="150" height="150">
                    </button>
                </div>
                <MiniCart/>
            </div>
        </div>
        <!-- /.header-row -->
        <div class="header-row">
            <div class="header-supermenu">
                <button type="button" class="header-supermenu__btn">
                    <img src={servicesImg} alt="сервіси">
                    <span>Каталог товарів</span>
                    <img src={arrowImg} alt="стрілка вниз" class="arrow">
                </button>
                <div class="supermenu">
                    <ul class="supermenu-group">
                        <li class="supermenu-group__item has-children">
                            <span class="supermenu-group__label">
                        ПНБ та тепловізори
                    </span>
                            <ul class="supermenu-subgroup">
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Тепловізори</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Приціл</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Прилади нічного бачення</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Оптичні приціли</a>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Аксесуари для ПНБ</a>
                                </li>
                            </ul>
                        </li>
                        <li class="supermenu-group__item has-children">
                            <span class="supermenu-group__label">
                        Екіпірування
                    </span>
                            <ul class="supermenu-subgroup">
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Тепловізори</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Приціл</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Прилади нічного бачення</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Оптичні приціли</a>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Аксесуари для ПНБ</a>
                                </li>
                            </ul>
                        </li>
                        <li class="supermenu-group__item has-children">
                            <span class="supermenu-group__label">
                        Енергосистеми
                    </span>
                            <ul class="supermenu-subgroup">
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Тепловізори</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Приціл</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Прилади нічного бачення</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Оптичні приціли</a>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Аксесуари для ПНБ</a>
                                </li>
                            </ul>
                        </li>
                        <li class="supermenu-group__item has-children">
                            <span class="supermenu-group__label">
                        Відеонагляд
                    </span>
                            <ul class="supermenu-subgroup">
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Тепловізори</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Приціл</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Прилади нічного бачення</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Оптичні приціли</a>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Аксесуари для ПНБ</a>
                                </li>
                            </ul>
                        </li>
                        <li class="supermenu-group__item has-children">
                            <span class="supermenu-group__label">
                        Реєстратори
                    </span>
                            <ul class="supermenu-subgroup">
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Тепловізори</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Приціл</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Прилади нічного бачення</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Оптичні приціли</a>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Аксесуари для ПНБ</a>
                                </li>
                            </ul>
                        </li>
                        <li class="supermenu-group__item has-children">
                            <span class="supermenu-group__label">
                        Джерела живлення
                    </span>
                            <ul class="supermenu-subgroup">
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Тепловізори</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Приціл</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Прилади нічного бачення</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Оптичні приціли</a>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Аксесуари для ПНБ</a>
                                </li>
                            </ul>
                        </li>
                        <li class="supermenu-group__item has-children">
                            <span class="supermenu-group__label">
                        Все для монтажу
                    </span>
                            <ul class="supermenu-subgroup">
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Тепловізори</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Приціл</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Прилади нічного бачення</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Оптичні приціли</a>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Аксесуари для ПНБ</a>
                                </li>
                            </ul>
                        </li>
                        <li class="supermenu-group__item has-children">
                            <span class="supermenu-group__label">
                        Домофони, контроль доступу
                    </span>
                            <ul class="supermenu-subgroup">
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Тепловізори</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Приціл</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Прилади нічного бачення</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Оптичні приціли</a>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Аксесуари для ПНБ</a>
                                </li>
                            </ul>
                        </li>
                        <li class="supermenu-group__item has-children">
                            <span class="supermenu-group__label">
                        Мережеве обладнання
                    </span>
                            <ul class="supermenu-subgroup">
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Тепловізори</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Приціл</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Прилади нічного бачення</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Оптичні приціли</a>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Аксесуари для ПНБ</a>
                                </li>
                            </ul>
                        </li>
                        <li class="supermenu-group__item has-children">
                            <span class="supermenu-group__label">
                        Сигналізація
                    </span>
                            <ul class="supermenu-subgroup">
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Тепловізори</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Приціл</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Прилади нічного бачення</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Оптичні приціли</a>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Аксесуари для ПНБ</a>
                                </li>
                            </ul>
                        </li>
                        <li class="supermenu-group__item has-children">
                            <span class="supermenu-group__label">
                        Типові рішення
                    </span>
                            <ul class="supermenu-subgroup">
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Тепловізори</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Приціл</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Прилади нічного бачення</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Оптичні приціли</a>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Аксесуари для ПНБ</a>
                                </li>
                            </ul>
                        </li>
                        <li class="supermenu-group__item has-children">
                            <span class="supermenu-group__label">
                        Програмне забезпечення
                    </span>
                            <ul class="supermenu-subgroup">
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Тепловізори</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Приціл</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item has-children">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Прилади нічного бачення</a>
                                    <ul class="subgroup-list">
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Монокуляр</a>
                                        </li>
                                        <li class="subgroup-list__item">
                                            <a class="subgroup-list__link" href="archive-product.html">Бінокуляр</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Оптичні приціли</a>
                                </li>
                                <li class="supermenu-subgroup__item">
                                    <a href="archive-product.html" class="supermenu-subgroup__title">Аксесуари для ПНБ</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <ul class="header-menu">
                <li class="header-menu__item">
                    <a href="/" class="header-menu__link">Головна</a>
                </li>
                <li class="header-menu__item">
                    <a href="/shop" class="header-menu__link">Магазин</a>
                </li>
                <li class="header-menu__item">
                    <a href="archive-blog.html" class="header-menu__link">Блог</a>
                </li>
                <li class="header-menu__item">
                    <a href="archive-blog.html" class="header-menu__link">Контакти</a>
                </li>
            </ul>
        </div>
        <!-- /.header-row -->
    </div>
</header>
<!-- /.header -->