export default {
    renderTo: 'dash__content',
    render: async () => {
        return `
        <div class="dash__content_header">
            <div class="dash__content_header_top">
                <p class="pure white_p dash__content_header_p">Отделения</p>
            </div>
            <div class="dash__content_header_bottom">
            </div>
        </div>
        <div class="dash__content_body">
        </div>
        `;
    },
    after: async () => {

    }
};