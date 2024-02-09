import logoUrl from "/react/reactjs/src/assets/logo192.png";
// const logoUrl = "/react/reactjs/src/assets/logo192.png";
const handleClick = (e) => (e.target.style.display = "none");
function ProfilePic() {
  return (
      <img
          className="react-logo"
      onClick={(e) => handleClick(e)}
      src={logoUrl}
      width={200}
      alt="Profile Picture"
    />
  );
}
export default ProfilePic;
