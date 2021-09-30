import React from 'react';
import { TETROMINOS } from '../tetrominos';
import { StyledCell } from './styles/StyledCell';

const cell=({type}) => (
    <StyledCell type={'L'} color={TETROMINOS['L'].color}>
    </StyledCell>
)

export default cell;