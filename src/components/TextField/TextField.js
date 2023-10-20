import './TextField.css'

const TextField = (args) => {

    return (
        <div className='TextField'>
            <label className='label'>{args.label}</label>
            <input value={args.value} onChange={event => args.setValue(event.target.value)} required={args.required} className='input' placeholder={args.placeholder} ></input>
            <span className='error'></span>
        </div>
    )
}

export default TextField;