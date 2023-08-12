import styles from './styles/main.scss';
import star from './assets/star.svg';

const renderTemplate = () => {
    return `
            <style>${styles}</style>
            <div class="widget">
                <div class="marquee">
                    <div class="track">
                        <p class="blink">you have been widget'ed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you have been widget'ed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you have been widget'ed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you have been widget'ed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you have been widget'ed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you have been widget'ed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you have been widget'ed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you have been widget'ed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you have been widget'ed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you have been widget'ed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you have been widget'ed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you have been widget'ed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you have been widget'ed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you have been widget'ed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you have been widget'ed</p>
                    </div>
                </div>
            </div>
        `;
};

export { renderTemplate };