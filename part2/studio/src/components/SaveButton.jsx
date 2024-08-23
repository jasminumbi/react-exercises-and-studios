import "./styling.css";

function SaveButton() {
  function handleClick() {
    alert("Pin saved!");
  }
  return (
    <button id="saveButton" onClick={handleClick}>
      Save
    </button>
  );
}

export default SaveButton;
