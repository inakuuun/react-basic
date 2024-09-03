import React, {useState} from 'react';

const ToggleButton = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(prevState => !prevState)
    }

    React.useEffect(() => {
        console.log('Current state is',open)
        if(open)
        {
            console.log('Subscribe database...')
        }
        return () => {
            console.log('UnSubscribe database!')
        }
    },[open])

    return(
        <div>
            <h3>Toggleボタン</h3>
            <button onClick={toggle}>
                {open ? 'OPEN':'CLOSE'}
            </button>
        </div>
    );
};
export default ToggleButton;
