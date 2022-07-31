import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";
import * as actions from '../actions/index';


const Home = (props) => {
    const lists = useSelector((state) => state.Products);
    const dispatch = useDispatch();

    console.log(lists)
    return (
        <Fragment>
            <div> List Product</div>
            {lists.map((list, index) => {
                return (
                    <Fragment key={index} >
                        <div>{list.name}</div>
                        <button onClick={() => dispatch(actions.UpdateProduct("Con meo", index))}>Cập nhật</button>
                    </Fragment>
                )
            })}
            
        </Fragment>
    )
}


export default Home;