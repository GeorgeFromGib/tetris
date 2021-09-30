import React from 'react';
import Cell from './cell';
import { StyledStage } from './styles/StyledStage';

const stage=({stage})=>(
    <StyledStage width={stage[0].length} height={stage.length}>
        {stage.map(row=>row.map((cell,x)=> <Cell key={x}/>))}
    </StyledStage>
)

export default stage;