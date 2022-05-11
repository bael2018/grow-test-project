import '../scss/components/_handler.scss'

const Error = ({ status }) => {
    return (
        <div className="empty"><h4>Произошла ошибка | cтатус ошибки {status}</h4></div>
    )
}

export default Error