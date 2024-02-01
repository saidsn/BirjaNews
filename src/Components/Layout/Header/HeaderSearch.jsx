import React, { useEffect } from "react";
import "./HeaderSearch.css"
import { Link } from "react-router-dom";
const HeaderSearch = ({ items,searchData,setSearchData}) => {
    const ulStyle = {
        // position: 'absolute',
        // top: '100%', // Position right below the component
        // left: 0,
        width: '100%', // Adjust width as needed
        maxHeight: '300px', // Set a maximum height
        overflowY: 'auto', // Enable vertical scrolling
        backgroundColor: 'white',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        zIndex: 1000,
      };
    
      const liStyle = {
        padding: '10px',
        borderBottom: '1px solid #ddd', // Optional divider between items
        cursor: 'pointer',
        "&:hover": {
          backgroundColor: '#f5f5f5',
        },
      };
  return (
    <>
      {searchData && searchData.length > 0 && (
        <ul className="searchBar" style={ulStyle}>
          {items.map((item, index) => (
            <li key={index} style={liStyle}>
             <Link className="searchLink" to={`/herracxeberleri/${item.id}`} onClick={()=>setSearchData("")}> {item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default HeaderSearch;
