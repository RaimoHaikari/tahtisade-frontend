import ElokuavaMaa from "./ElokuvaMaa";
import BulkUpdate from "./BulkUpdate";

const Admin = () => {
    return (
        <div style={{padding: '5px'}}>
            <p style={{marginBottom: '10px'}}>Tähän näin tietojenhallinnan työkaluja</p>
            <BulkUpdate />
        </div>
    );
};

export default Admin;