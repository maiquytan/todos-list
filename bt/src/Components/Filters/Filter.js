import { useDispatch } from 'react-redux';
import filtersSlice from './filtersSlice';

export default function Filter({todos,filterStatus,setFilterStatus}){
    const dispatch =useDispatch();
   
    const onChangeStatus = (event) => {
        setFilterStatus(event.target.value);
        dispatch(filtersSlice.actions.statusFilterChange(event.target.value));
    }
    
    return(
        <form>
        <div  value= {filterStatus}  className= "filter">
            <div className='filter-header'>Filter status </div>
            <div className='filter-radio'>
            <input type='radio'  id='All' name="status" value ='All'  onChange={ onChangeStatus }/> 
            <label >All</label>
            <input type= 'radio' id='Completed' name="status" value='Completed' onChange={ onChangeStatus }/>
            <label >Completed</label>
            <input type ='radio' id='Todo' name="status" value ='Todo' onChange={ onChangeStatus }/> 
            <label >To do</label>
            
            </div>
        </div>
      </form>
    )
}