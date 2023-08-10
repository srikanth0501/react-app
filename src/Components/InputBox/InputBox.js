import React, {useState} from "react";

const InputBox = props => {

    const [phoneNumber, setPhoneNumber] = useState("")



    const _handleClick = () => {
        alert(phoneNumber)
    }


    return (
        <div >
            <input type="text" value={phoneNumber}  placeholder="Phone Number " onChange={e => {
            setPhoneNumber(e.target.value)
        }} />
        <input type="button" onClick={_handleClick} value="Submit" />
        </div>
    )
}

export default InputBox;