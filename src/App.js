
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchForm from "./components/Search-Form";
import Thead from "./components/Thead";
import Tbody from "./components/Tbody"


function App() {
    const [employees, setEmployees] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ sorted, setSorted] = useState(false);
  
    //API call to render employees data
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=200&nat=us")
          .then((res) => res.json())
          .then((json) => {
            setEmployees(json.results);
          })
      
    }, []);

    //function to display input searched names
    function handleSearchTerm(event)  {
    setSearchTerm(event.target.value)
    }
}