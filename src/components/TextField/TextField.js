import './TextField.css'

const TextField = (args) => {

    return (
        <div className='TextField'>
            <label className='label'>{args.label}</label>
            <input className='input' placeholder={args.placeholder} ></input>
            <span className='error'></span>
        </div>
    )
}

export default TextField;