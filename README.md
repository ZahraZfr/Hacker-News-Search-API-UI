# Name
hacker news search

## Description
This project show last news that exist in Hackernews.com and has search feature to show news about specific title. 
in these project used HTML ,[tailwind framwork of CSS ](https://github.com/tailwindlabs/tailwindcss) and [axiose library of REACT ](https://github.com/axios/axios#readme) and also [Context api library](https://reactjs.org/docs/hooks-reference.html) for transfer data between components.



## Installation

Use the [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) for package managing . to install package use these command :

```bash
yarn init
```
and for show result write below command
```bash
yarn start
```
## feature
search option
https://github.com/Lo-Agency/zahra-hacker-news-search/blob/master/Annotation%202021-10-17%20203943.png
## Usage
in app.jsx file , first import library and components
```bash
function App() {
  // set default value
  const [source, setSource] = useState("_by_date?tags=story");
  const [item, setItem] = useState([]);
  const [page, setPage] = useState(0);
```
and declare a function that in it we defind our data with useState hook and show them when useEffect hook defined.
```bash
function App() {
  // set default value
  const [source, setSource] = useState("_by_date?tags=story");
  const [item, setItem] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios
      .get(`http://hn.algolia.com/api/v1/search${source}&page=${page}`)
      .then((res) => {
        setItem(res.data.hits);
      })
      .catch();
  }, [source, page]);

```
in return we have component for each section of projectthat are in MyContext tag with .Provider property. it has also value attribute that we pass data that can contains variable or function , for component access to them.
```bash
  return (
    <MyContext.Provider 
      value={{ item, setItem, source, setSource, page, setPage }}
    >
      <Header />
      <Main />
      <Footer />
    </MyContext.Provider>
  );
}


export default App;
```

- in header component we have search section that get value of input and pass it to setSource function that replce with the current or defalut value that append to api

```bash
import { MyContext } from "./MyContext";
import { useContext } from "react";
```
My context is a file that Accepts a context object (the value returned from React.createContext) and returns the current context value, as given by the nearest context provider for the given context.
```bash
import {createContext} from 'react';

export const MyContext = createContext();

export default MyContext;
```
in every component we should what data need to use from data that defined in value attribute.
for example in header component we need item variable.
```bash
  let { item } = useContext(MyContext);
```
in input element used onChange attribute active we value of input changed.in it we set function that have setTimeOut function that in it two argument are exist. first one is a function that check user clean value or nit. if cleared , last news Is shown and if user enter any value it will pass to setSource function. in second argument we define how much later first argument Be called.
```bash
<input
          id="input"
          className="mb-5 px-2 tablet:mx-1 w-100 tablet:rounded-r-2xl text-blue-500 font-bold border-blue-500 outline-none h-12 box-border rounded-br-2xl"
          type="search"
          onChange={function () {
            clearTimeout(timer);
            timer = setTimeout(() => {
              // get input value to search

              if (document.getElementById("input").value === "") {
                setSource("_by_date?tags=story");
              } else {
                setSource(`?query=${document.getElementById("input").value}`);
              }
            }, 300);
          }}
        />
```
- in main component , data from api is shown. data is store in item value , setSource function can change item value (in app.jsx in axios section we defind it. and filter item which doesn't have title and map them with Parameter

- in footer component we have pagination that show user , which page To be shown.
```bash
        <button
          onClick={() => {
            if (page <= 0) {
              setPage(0);
            } else {
              setPage(page - 1);
            }
          }}
          className="bg-white text-blue-500 py-0.5 px-1.5 m-0.5 rounded shadow-2xl"
        >
          Previous
        </button>
```
page is variable that contains page Parameter from  api , and change page number can be changed with the setPage function.In this function, we check that if we are on the first page, the value will not be less than zero Otherwise subtract a value from the page value.
```bash
        <button
          onClick={() => {
            setPage(page);
          }}
          className="bg-white text-blue-500 py-0.5 m-0.5 px-1.5 rounded shadow-2xl"
        >
          {page}
        </button>
```
this botton show the current page number
```bash
        <button
          onClick={() => {
            setPage(page + 1);
          }}
          className="bg-white text-blue-500 m-0.5 py-0.5 px-1.5  rounded shadow-2xl"
        >
          Next
        </button>
```
next botton Increases the amount with each click
```bash
        <button
          onClick={() => {
            setPage(0);
          }}
          className="bg-blue-800 text-white-500 py-0.5 m-0.5 px-1.5 rounded shadow-2xl hover:bg-white hover:text-blue-500"
        >
          Reset
        </button>
```
and reset value set page value to 0 that means show the first page
- for style of each element Used from inline style in tailwind and for reponsive the project configure  them in tailwind.config.js file
```bash
// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
```
## Authors and acknowledgment
- owner : Zahra Zafarzade
- mentors : Aien Saidi , Hossein Rahimi and MohammadJavad Hasanzade
