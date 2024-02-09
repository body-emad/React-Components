import profilePic from "/react/reactjs/src/assets/image.jpg"
function Card() {
    return (
        <div className= "Card">
            <img className="card-image" src={profilePic} width= "200px" height= "200px" alt="Profile Picture"></img>
            <h2>Body's Card</h2>
            <p className="card-paragraph">
                Lorem Ipsum is simply dummy text  
             
            </p>
        </div>
    );
}
export default Card;