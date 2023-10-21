import './DropDownField.css'

const DropDownField = ({value,setValue,required,label,list,placeholder}) => {

    return (
        <div className='DropDownField'>
            <label>{label}</label>
            <select value={value} onChange={event => setValue(event.target.value)} required={required} placeholder={placeholder}>
                <option value=""></option>
                {list.map(item => <option key={item}>{item}</option>)}
            </select>
            <span className='error'></span>
        </div>
    )
}

export default DropDownField;