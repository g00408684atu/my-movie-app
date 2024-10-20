// Importing the useState hook from React to manage component state
import { useState } from "react";

function Create() {
  // State hooks to manage input fields like title year poster
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');
// Function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
  }
//  render the form and input fields / div forms is for each different input field
  return (
    <div className="text-center">
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            // Update the title/year/poster state when the input value changes
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>

        <div className="form-group">
          <label>Add Movie Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            onChange={(e) => { setYear(e.target.value) }}
          />
        </div>

        <div className="form-group">
          <label>Add Movie Poster: </label>
          <input type="text"
            className="form-control"
            value={poster}
            onChange={(e) => { setPoster(e.target.value) }}
          />
        </div>

        

        <div>
        <input type="submit" value="Add Movie" />
        </div>
      </form>
    </div>
  );
}

export default Create;