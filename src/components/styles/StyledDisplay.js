import styled from "styled-components";

export const SyledDisplay=styled.div`
    box-sizing:border-box;
    display:flex;
    align-items:center;
    margin: 0 0 20px 0;
    padiing:20px;
    border: 4px solid #333;
    min-height:30px;
    width:100%;
    border-radius: 20px;
    color:${props=>(props.gameOver ? 'red':'#999')};
    background:black;
    font-family: Pixel, Ariel, Helvetica, sans-serif;
    font-size:0.8ren;

`