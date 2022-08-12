// import React, { useState, useContext } from "react";
// import { PostContext } from "../../contexts/PostContext";


// const Search = () => {
//     const { filterPosts } = useContext(PostContext);
//     const [search, setSearch] = useState('');
//     const [criteria, setCriteria] = useState('all')

//     const onSearchChange = (e) => {
//         setSearch(e.target.value);
//         filterPosts(e.target.value, criteria);
//     };

//     const onSearchSubmit = (e) => {
//         e.preventDefault();

//         filterPosts(search, criteria);
//     };

//     const onSearchCriteriaChange = (e) => {
//         setCriteria(e.target.value);
//         filterPosts(search, e.target.value);
//     };



//     return (

//         <form className="search-form" onSubmit={onSearchSubmit}>
//         <div className="search-input-container">
//             <input type="text" 
//             placeholder="Please, select the search criteria" 
//             name="search" 
//             onChange={onSearchChange} 
//             value={search} />

//             <button className="btn" title="Please, select the search criteria">
//                 <i className="fa-solid fa-magnifying-glass"></i>
//             </button>
//         </div>

//         <div className="filter">
//             <span>Search Criteria:</span>
//             <select name="criteria" className="criteria" onChange={onSearchCriteriaChange}>
//                 <option value="all">Not selected</option>
//                 <option value="firstName">Title</option>
//                 <option value="lastName">Genre</option>
//                 <option value="email">Author</option>
//             </select>
//         </div>
//     </form>
//         // <div className="search">
//         //     <h2>Search a post</h2>
//         //     <input
//         //         className="search"
//         //         name="search"
//         //         type="text"
//         //         placeholder="Search..."
//         //         onChange={onSearchChange} 
//         //         value={search} 


//         //     />
//         //     {/* <Catalog data={search(posts)}/> */}
//         // </div>
//     )
// }

// export default Search;