import './TextField.css'

const TextField = ({value,setValue,label,required,placeholder}) => {

    return (
        <div className='TextField'>
            <label className='label'>{label}</label>
            <input value={value} onChange={event => setValue(event.target.value)} required={required} className='input' placeholder={placeholder} ></input>
            <span className='error'></span>
        </div>
    )
}

export default TextField;