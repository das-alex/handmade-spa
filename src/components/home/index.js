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
                <div class="dash__header_right_side"></div>
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
                <div class="dash__content">
                    
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="dashboard__modal">
            <div class="dash__modal_box">
                <div class="modal_box__header">
                    Модальное окно
                </div>
                <div class="modal_box__body">
                </div>
                <div class="modal_box__footer">
                </div>
            </div>
        </div>`
    },
    after: async () => {}
};