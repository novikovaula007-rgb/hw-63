import telegramIcon from '../../assets/telegram-icon.webp'
import firebaseIcon from '../../assets/firebase_icon.png'

const Contacts = () => {
    return (
        <div>
            <div style={{display: 'flex', gap: '5px'}}>
                <img src={telegramIcon} alt='telegram' style={{width: '20px', height: '20px'}}/>
                <a href='https://t.me/feodlaos' style={{textDecoration: 'none', color: 'black'}}>telegram</a>
            </div>
            <div style={{display: 'flex', gap: '5px'}}>
                <img src={firebaseIcon} alt='firebase' style={{width: '20px', height: '20px'}}/>
                <a href='https://js-30-ulyana-default-rtdb.europe-west1.firebasedatabase.app/'
                   style={{textDecoration: 'none', color: 'black'}}>firebase</a>
            </div>
        </div>
    );
};

export default Contacts;