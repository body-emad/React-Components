function Button() {
  const handleclick = (e) => (e.target.textContent = "OUCH!");
  return (
    <button className="Button" onClick={(e) => handleclick(e)}>
      Click me
    </button>
  );
}
export default Button;
