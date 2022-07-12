import vector from '../../assets/img/Vector.svg'
import './style.css'


function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={vector} alt="notificar" />
        </div>
    )
}

export default NotificationButton