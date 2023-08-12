import { WidgetElement } from './WidgetElement';

const App = (() => {
    const scriptEl = document.getElementById('top-widget');
    if (scriptEl) {
        if (!customElements.get('custom-widget')) {
            customElements.define('custom-widget', WidgetElement());
        }

        const componentInstance = document.createElement('custom-widget', {
            is: 'custom-widget',
        });

        const container = document.body;
        container.appendChild(componentInstance);
    }
})();

export default App;