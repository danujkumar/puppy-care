import React, {useState, useEffect} from 'react'

export default function Navigation2() {
    const [theme, setTheme] = useState("light-theme body");
    const toggleTheme = () => {
        if(theme === "dark-theme body")
            setTheme('light-theme body');
        else
            setTheme('dark-theme body');
    };
    useEffect (() =>{
        document.body.className = theme;
    },[theme]);
    const [showMediaIcons,setShowMediaIcons] = useState(false);
    return (
        <nav className={showMediaIcons ? "toggle-on toggle-off" : "toggle-off"}>
            <h1><i className="fa-solid fa-dog"></i>Puppy
                <span>Care</span>
            </h1>
            <ul className={showMediaIcons ? "items toggle" : "items"}>
                <li><a href='www.google.com'>Home</a></li>
                <li><a href='www.google.com'>About</a></li>
                <li><a href='www.google.com'>Services</a></li>
                <li><a href='www.google.com'>Pages<i className="fa-solid fa-angle-down"></i></a></li>
                <li id={showMediaIcons ? "" : "last"}><a href='www.google.com'>Contact</a></li>
            </ul>
            <div className={showMediaIcons ? "search search-on" : "search search-off"}>
                <input type="text" name="search" id="search" />
                <input type="button"  value="Search" id="button" />
                <i className="fa-solid fa-moon " onClick={toggleTheme}></i>
            </div>
           <div className="hamburger-menu">
                <div href="" onClick={()=>setShowMediaIcons(!showMediaIcons)}>
                <i className="fa-solid fa-bars"></i>
                </div>
            </div>
        </nav>
    )
}
