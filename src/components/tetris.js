import React from 'react';

import Stage from './stage'
import Display from './display'
import StartButton from './startButton';
import { createStage } from '../gameHelpers';
import {StyledTetrisWrapper, StyledTetris} from '../components/styles/StyledTetris'

const tetris=()=> {

    return (
        <StyledTetrisWrapper>
            <StyledTetris>
            <Stage stage={createStage()}/>
            <aside>
                <div>
                <Display text="Score"/>
                <Display text="Rows"/>
                <Display text="Level"/>
                </div>
                <StartButton callback="" />
            </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default tetris;