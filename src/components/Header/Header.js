import React from "react";
import "./Header.css";

import { createTheme, TextField, ThemeProvider } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import categories from "../../data/category";


const Header = ({category, setCategory, word, setWord, LightTheme}) => {
    const darkTheme = createTheme({
        palette: {
          primary:{
            main: LightTheme ? "#000" : "#fff",
            color: LightTheme ? "#000" : "#fff"
          },
          type: LightTheme ? "light" : "dark",
        },
      });

      //handles when the language is changed sets word to none.
      const handlechange=(language) =>{
        setCategory(language);
        setWord("");
      }

    return (
      <div className="header">
        <span className="title">{word ? word : "Word Book"}</span>
        <div className="inputs">
        <ThemeProvider theme={darkTheme}>
           <TextField 
           id="standard-basic" 
           variant="standard"
           value={word}
           onChange={(e)=>setWord(e.target.value)}
           className="search"
           label="Search a Word"
            />
           <TextField
          id="standard-select-currency"
          select
          label="Language"
          value={category}
          onChange={(e)=> handlechange(e.target.value)}
          variant="standard"
          className="select"
        >
            {categories.map((option)=> (
                <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
         </TextField>
        </ThemeProvider>
        </div>
      </div>
    );
  };
  
  export default Header;