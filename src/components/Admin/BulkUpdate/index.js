import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { bulkUpdate, initializeMovies } from "../../../reducers/updateReducer";

const BulkUpdate = () => {

    const { loading, data} = useSelector(state => state.update);

    const dispatch = useDispatch();

    const googleBtnHandler = () => {
        dispatch(bulkUpdate());
    }

    useEffect(() => {
        dispatch(initializeMovies());
    }, []);

    console.log("D", data);

    /*
        <div>
            <button
                onClick={googleBtnHandler}
            >Lue Google</button>
        </div>
    */
    return (
        <>
        {
            loading
            ? <p>Ladataan...</p>
            : data === null
                ? <p>NULL</p>
                : <p>Valmista tuli....</p>
        }
        </>
    );
};

export default BulkUpdate;