import React, { useContext, useState } from "react";
import { ToggleTheme } from "../App";
import './context.css';

function UseContext() {
  const [like, setLike] = useState(0);
  const [showPara, setShowPara] = useState(false);
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme ? "black" : "grey",
  };
  const adder = () => {
    setLike((e) => e + 1);
  };
  const Para = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis itaque officia quidem molestias ducimus, odio unde et tenetur. Dicta ipsam nobis asperiores voluptate autem, ipsa non odio repudiandae eum adipisci.";
  const contentBtn = () => {
    alert('Content Button Clicked');
    setShowPara((prevShowPara) => !prevShowPara);
  };
  useEffect(()=>{
    alert('Like Added!!!')
  },[like])
  return (
    <div style={themeStyle}>
      <br />
      {showPara && <p>{Para}</p>}
      <button className="content" onClick={contentBtn}>content</button>
      <br /><br /><br />
      <span>{like}</span>
      <br /><br />
      <button onClick={adder} className="content">Like</button>
    </div>
  );
}

export default UseContext;
