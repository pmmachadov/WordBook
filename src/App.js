import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

import { Container, Switch } from '@mui/material';
import { grey } from "@mui/material/colors";
import { withStyles } from "@mui/styles";

import Header from "./components/Header/Header";
import Definitions from "./components/Definitions/Definitions";
import Footer from "./components/Footer/Footer";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [LightTheme, setLightTheme] = useState(false);

  const dictionaryApi = async()=>{
    try{
      //get data for a specific word in a specific language using axios
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
      //extract data from the recieved object and set meanings
      setMeanings(data.data);
    }catch(error){console.error();}
  };
  //renders when the component is mounted 
  useEffect(() =>{
    dictionaryApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word, category]);

  //switch
  const DarkMode = withStyles({
    switchBase: {
      color: grey[50],
      "&$checked": {
        color: grey[900],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    <div className="App" 
    style={{
      height: "100vh", 
      backgroundColor: LightTheme ? "#fff" : "#282c34",
      color: LightTheme ? "black" : "white",
      transition: "all 0.5s linear",
    }}>
      <Container 
      maxWidth="md"
      style={{display:"flex", flexDirection:"column", height:"100vh"}}
      >
         <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10, justifyContent:"space-evenly" }}
        >
          <span>{LightTheme ? "Dark" : "Light"} Mode</span>
          <DarkMode
            checked={LightTheme}
            onChange={() => setLightTheme(!LightTheme)}
          />
        </div> 
        <Header 
        category={category} 
        setCategory={setCategory} 
        word={word} 
        setWord={setWord}
        LightTheme={LightTheme}/>
        {meanings && 
          <Definitions word={word} category={category} meanings={meanings} LightTheme={LightTheme}/>
        }
        <Footer/>
        </Container>
    </div>
  );
}

export default App;
