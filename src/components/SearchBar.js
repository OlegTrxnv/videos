import React, { useState } from "react";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onTermSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};


// class SearchBar extends React.Component {
//   state = { term: "" };

//   onInputChange = (event) => {
//     this.setState({ term: event.target.value });
//   };

//   onTermSubmit = (event) => {
//     event.preventDefault();
//     // calling callback from parent component
//     this.props.onTermSubmit(this.state.term);
//   };

//   render() {
//     return (
//       <div className="search-bar ui segment">
//         <form className="ui form" onSubmit={this.onTermSubmit}>
//           <div className="field">
//             <label>Video Search</label>
//             <input
//               type="text"
//               value={this.state.term}
//               onChange={this.onInputChange}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default SearchBar;
