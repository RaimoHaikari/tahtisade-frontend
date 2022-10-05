import { useState, useEffect } from "react";
import BulkUpdate from "./BulkUpdate";
import StatFinServices from "../../services/statFI";

const Admin = () => {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {

        async function loadData(){
            const data = await StatFinServices.fooBar();
            console.log(data);
            setLoaded(true);
        }

       loadData();
        
    }, []);

    if(!loaded){
        return (
            <div>Loading....</div>
        )
    }

    return (
        <div style={{padding: '5px'}}>
            <p style={{marginBottom: '10px'}}>Tähän näin tietojenhallinnan työkaluja</p>
            <BulkUpdate />
        </div>
    );
};

export default Admin;