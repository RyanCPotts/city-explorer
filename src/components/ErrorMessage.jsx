function ErrorMessage(props){
    return(
        <div className = 'unauthotized access detected' role = 'alert'> {props.error} </div>
    )
}

export default ErrorMessage;