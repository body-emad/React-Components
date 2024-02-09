// this is the child component
// this child component revieves the props (key: value) from the parent component
import PropTypes from "prop-types"
function Student(props) {
    return (
        <div className="Student">
            <h3>Student Card</h3>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Favourite Subject: {props.favSubj ? props.favSubj: "Unknown"}</p>
            <p>Student:{props.isStudent  ? "Yes": "No"}</p>
        </div>
        

    );
}
// default Props in case there weren't any infos
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
    favSubj: "Nothing",
}
// it will give us a warning in the console if something was written wrong but it won't stop the app
Student.prototypes = {
    name: PropTypes.string, 
    age: PropTypes.number,
    isStudent: PropTypes.bool,
    
}
export default Student;