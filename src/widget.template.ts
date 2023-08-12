import styles from './styles/main.scss';
import star from './assets/star.svg';

const renderTemplate = () => {
    return `
            <style>${styles}</style>
            <div class="widget">
                <img src="${star}" alt="star" width="30px" height="30px" />
                <p>Hello world</p>
            </div>
        `;
};

export { renderTemplate };