import {  ArrowRight, ArrowLeft, ButtonAction } from './styles';

export const Arrow = ({action, direction }) => {
    
    if(direction === 'right') {
        return <ArrowRight onClick={action}> <img src="icon-arrow-right.svg" alt="arrow" /> </ArrowRight>
    } else if(direction === 'left') {
        return <ArrowLeft onClick={action}> <img src="icon-arrow-left.svg" alt="arrow" />  </ArrowLeft>
    } else {
        return <ButtonAction />
    }  
}
 