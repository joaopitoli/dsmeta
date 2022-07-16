import axios from 'axios';
import vector from '../../assets/img/Vector.svg'
import { BASE_URL } from '../../utils/request';
import './style.css'

type Props = {
    saleId: number;
}

function handleClick(id:number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        console.log("SUCESSO")
    })
}

function NotificationButton({saleId}:Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={vector} alt="notificar" />
        </div>
    )
}

export default NotificationButton