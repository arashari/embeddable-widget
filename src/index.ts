import { PricesWidget } from './PricesWidget';

const App = (() => {
    const scriptEl = document.getElementById('prices-widget');

    if (scriptEl) {
        const code = scriptEl.getAttribute("class-url") ?? '404';
        (window as any).code = code;
        fetch(`https://goakal.com/api/prices/${code}`)
        .then((res) => {
            res.json().then((data) => {
                console.log(data);

                if (!customElements.get('goakal-widget')) {
                    customElements.define('goakal-widget', PricesWidget(data));
                }
        
                const componentInstance = document.createElement('goakal-widget', {
                    is: 'goakal-widget',
                });

                scriptEl.parentNode?.replaceChild(componentInstance, scriptEl);
            })
        })
    }
})();

export default App;