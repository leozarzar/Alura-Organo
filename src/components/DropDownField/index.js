import './DropDownField.css'

const DropDownField = (args) => {

    return (
        <div className='DropDownField'>
            <label>{args.label}</label>
            <select value={args.value} onChange={event => args.setValue(event.target.value)} required={args.required}>
                {args.list.map(item => <option key={item}>{item}</option>)}
            </select>
            <span className='error'></span>
        </div>
    )
}

export default DropDownField;