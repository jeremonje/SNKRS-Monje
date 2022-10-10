import './Spinner.css'
import { Spinner } from 'reactstrap'

export const SpinnerComp = () => {
    return(
        <div className='spinner'>
        <Spinner className='loading'>'</Spinner>
        </div>
    );
}