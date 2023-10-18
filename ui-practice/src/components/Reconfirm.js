
import '../styles/Modal/Reconfirm.scss';

const Reconfirm = ({message, button1, button2, onCancel, onCheck}) => {
    
    return(
        <div className="ReconfirmContainer">
            <div className="ReconfirmModal">
                <p className="ReconfirmMessage">{message}</p>
                <div className="ReconfirmButtons">
                    <div className="CancelButton" onClick={()=>onCancel()}>{button1}</div>
                    <div className="ConfirmButton" onClick={()=>onCheck()}>{button2}</div>
                </div>
            </div>
        </div>
    )
}

export default Reconfirm;