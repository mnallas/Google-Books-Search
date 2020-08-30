import React from "react";

const Form = (props) => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label>Search Books</label>
          <input className="form-control" {...props} />
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
