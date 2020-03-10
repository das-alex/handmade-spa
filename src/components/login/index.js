import { arrowRight } from '../../icons';
import { routeTo } from '../../router/routerUtils';

import Store from '../../store/';

export default {
    render: async () => {
        return `
            <div class="wrapper">
                <div class="passport__block">
                    <div class="passport__header mb-50">
                        <p class="tag_p__header">ВАРБ паспорт</p>
                        <p class="tag_p_about__header">Для использования сервиса необходимо авторизироваться</p>
                    </div>
                    <!--<div class="passport__error mb-30">
                        <p>Такого пользователя не существует</p>
                    </div>-->
                    <div class="passport__body">
                        <form action="">
                            <div class="form_row mb-30">
                                <label for="login">Имя пользователя</label>
                                <input class="mt-8" id="login" name="login" type="text">
                            </div>
                            <div class="form_row mb-50">
                                <label for="password">Пароль</label>
                                <input class="mt-8" id="password" name="password" type="password">
                            </div>
                            <div class="form_row">
                                <button class="btn login">
                                    Войти
                                    ${arrowRight('btn_icon')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="background__color"></div>
            <div class="background__image"></div>
            <div class="image_info">
                <p><span class="info__sign"></span> Фотография взята с сайта mil.by</p>
            </div>
        `;
    },
    after: async () => {
        document.querySelector('form').addEventListener('submit', (event) => {
            event.preventDefault();

            const user = {
                username: event.target[0].value,
                password: event.target[1].value
            }
            Store.dispatch('authorize', user);
            // routeTo('/categories');
        });
    }
};