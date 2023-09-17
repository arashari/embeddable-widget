import styles from './styles/main.scss';
import tick from './assets/tick.svg';

const renderTemplate = (data: any[]) => {
    return `
            <style>${styles}</style>
            ${data.map((item) => `<div class="box">
                <p><b>${item.title}</b></p>
                <span>${item.description}</span>
                <ul>
                    ${item.checklist.map((desc: string) => `<li><img src="${tick}" alt="tick" width="16px" height="16px" /> ${desc}</li>`).join('')}
                </ul>

                <a href="https://goakal.com/buy/${item.id}" target="_blank" class="order-btn">Order Now</a>
            </div>`).join('')}
        `;
};

export { renderTemplate };