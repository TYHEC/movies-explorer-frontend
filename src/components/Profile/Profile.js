import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
    return (
        <section className='profile'>
            <form className='profile__form'>
                <h2 className='profile__title'>Привет, Виталий!</h2>
                <div className='profile__container'>
                    <p className='profile__field-title'>Имя</p>
                    <input className='profile__field-value' defaultValue='Виталий' required></input>
                    <p className='profile__field-title'>E-mail</p>
                    <input className='profile__field-value' defaultValue='pochta@yandex.ru' required></input>
                </div>
                <Link to="/profile" className="profile__button">Редактировать</Link>
                <Link to="/" className="profile__link">Выйти из аккаунта</Link>
            </form>
        </section>
    )
}
export default Profile;