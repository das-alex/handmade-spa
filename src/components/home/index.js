export default {
    render: async () => {
        return `
        <div class="dashboard__wrapper">
            <div class="dash__header">
                <div class="dash__header_left_side">
                    <p class="white_p h_logo">
                        <span class="light_p">ВАРБ</span> 
                        <span class="bold_p">информационная система</span>
                    </p>
                </div>
                <div class="dash__header_right_side">
                    <p class="white_p">
                        <span class="light_p">Привет, username!</span>
                        <span class="bold_p logout_menu_btn">Выйти</span>
                    </p>
                </div>
            </div>
            <div class="dash__main">
                <div class="dash__left-side">
                    <ul class="dash_menu">
                        <li class="dash_menu_item"><a class="pure_a nav_menu_link" href="#/">Главная</a></li>
                        <li class="dash_menu_item"><a class="pure_a nav_menu_link" href="#/categories">Категории</a></li>
                        <li class="dash_menu_item"><a class="pure_a nav_menu_link" href="#/departments">Отделения</a></li>
                        <li class="dash_menu_item">Страницы отделений</li>
                        <li class="dash_menu_item">Документы</li>
                        <li class="dash_menu_item">Учёт и регистрация УМКД</li>
                        <li class="dash_menu_item">Новости</li>
                        <li class="dash_menu_item">Анонсы</li>
                        <li class="dash_menu_item">Пользователи</li>
                        <li class="dash_menu_item">План-календарь</li>
                        <li class="dash_menu_item">Настройки</li>
                    </ul>
                </div>
                <home-content class="dash__content"></home-content>
            </div>
            <div class="clearfix"></div>
        </div>`
    },
    after: async () => {}
};