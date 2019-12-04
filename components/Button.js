import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import COLORS from '../styles/colors';

const Button = styled.button`
    text-align: center;
    outline: none;
    cursor: pointer;
    text-transform: uppercase;
    position: relative;
    text-decoration: none;
    white-space: nowrap;
    border-radius: 5px;
    padding: 20px;
    font-size: 16px;
    color: ${COLORS.white};
    background-color: ${props => props.bgColor};

    ${({ bgColor, glowing }) => css`
        ${glowing &&
            css`
                box-shadow: 0px 10px 40px -10px ${rgba(bgColor, 0.5)};
            `}
    `}
`;

export default Button;
