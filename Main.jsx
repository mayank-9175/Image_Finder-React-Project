import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Images from "./Images";
import { getimages } from "./service/api";
import Snackbars from "./Snackbars";
const Main = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("mountains");
  const [num, setNum] = useState(10);
  const [open,setOpen] = useState(false);
  const datas = async () => {
    let dataa = await getimages(text, num);
    setData(dataa.hits);
  };
  useEffect(() => {
      if(num<3||num>200)
      {
          setOpen(true);
          return;
      }
      else{
          setOpen(false);
      }
    datas(text, num);
  }, [text, num]);
  const onTextChange = (text) => {
    setText(text);
  };
  const onNumChange = (num) => {
    setNum(num);
  };
  return (
    <>
      <Navbar />
      <Search onTextChange={onTextChange} onNumChange={onNumChange} />
      <Images data={data} />
      <Snackbars open={open} setOpen={setOpen}/>
    </>
  );
};
export default Main;
