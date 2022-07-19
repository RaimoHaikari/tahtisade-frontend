import { useDispatch, useSelector } from 'react-redux';

import { updateDisplayType } from '../../../reducers/sharedReducer';

/*
import Card from '../components/MovieList/Card';
import TablePresentation from '../components/MovieList/TablePresentation';

*/
import Card from '../Card';
import TablePresentation from '../TablePresentation';
import GeneralTable from '../TablePresentation/GeneralTable';

import {
    TAB,
    BUTTON,
    CONTAINER
} from './tabElements';

/*
 * How TO - Tabs
 * https://www.w3schools.com/howto/howto_js_tabs.asp
 */
const GeneralTabs = ({ store }) => {

    const dispatch = useDispatch();

    const { displayTypes } = useSelector(state => state[store]);

    /* 
     *
     */
    const displayContent = (d, i) => {

        // eslint-disable-next-line default-case
        switch(d.content) {
            case 'MOVIELIST_TABLE':
                return <TablePresentation key={`${i}-tbl`} />
            case 'MOVIELIST_CARD':
                return <Card key={`${i}-card`} />
            case 'GENRELIST_TABLE':
                return <GeneralTable key={`${i}-tbl`} store='genreList' />

          }

    }
    
    /*
     *
     */
    const getTabContent = () => {

        return (
            <>
            {
                displayTypes.map((d, i) => {
                    
                    return(
                        <CONTAINER
                            key={i}
                            visible={d.active}
                        >
                            {
                                displayContent(d, i)
                            }
                        </CONTAINER>
                    )
                })
            }
            </>
        )
    }

    const getTabLinks = () => {

        return (
            <TAB>
                {
                    displayTypes.map((d,i) => {

                        return (
                            <BUTTON
                                key={i}
                                onClick={() => dispatch(updateDisplayType({
                                    type: d.name,
                                    store: store
                                }))}
                                active = {d.active}
                            >
                                {d.name}
                            </BUTTON>
                        )

                    })
                }
            </TAB>
        )
    }

    /*
    { getTabLinks() }
    { getTabContent() }
    */
    return (
        <div>
            { getTabLinks() }
            { getTabContent() }
        </div>
    );
};

export default GeneralTabs;