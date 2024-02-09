function UserGreeting(props) {
    const welcomeMessage = <h2 className="welcome-message"> Welcome {props.userName}</h2>
    const plsLogInMsg = <h2 className="plsLogInMsg">Please Log in</h2>
    return (

        <div className= "third-component">
            <h1>Third Component</h1>
            {props.isLoggedIn  ? welcomeMessage:plsLogInMsg}
        </div>
    );
}
UserGreeting.defaultProps = {
    userName: "Guest",
    isLoggedIn: false,
}
export default UserGreeting;