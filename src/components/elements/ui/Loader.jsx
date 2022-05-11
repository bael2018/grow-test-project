import '../../../scss/components/_loader.scss'

const Loader = () => {
    return (
        <div className='loader'>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader