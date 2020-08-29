import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Search Books</label>
          <input
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
