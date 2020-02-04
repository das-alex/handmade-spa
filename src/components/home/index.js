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
                        <li class="dash_menu_item">Первая ссылка</li>
                        <li class="dash_menu_item">Вторая ссылка</li>
                    </ul>
                </div>
                <div class="dash__content">
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="dashboard__modal">
            <div class="dash__modal_box">
                <!--Modal content placed here-->
            </div>
        </div>`
    },
    after: async () => {}
};