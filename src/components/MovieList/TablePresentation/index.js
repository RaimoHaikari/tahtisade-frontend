import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import parse from 'html-react-parser';

import { updateSortingSetting } from '../../../reducers/sharedReducer';

import { BiSortDown, BiSortUp } from 'react-icons/bi';

import {
    TABLE,
    THEAD,
    TR,
    TBODY,
    TH,
    TD
} from './tableElements'

const TablePresentation = () => {

    const dispatch = useDispatch();

    /*
    let a = [1,2,3,4,5,6];
    let b = a.slice();

    console.log("a1", a)
    console.log("b1",b)

    a.sort((a,b) => b-a)

    console.log("a2", a)
    console.log("b2", b)
    */

    const {
        headers, 
        visibleData, 
        search, 
        sortingField, 
        sortingOrder
    } = useSelector(state => state.movieList);

    const onSortingChange = (field)  => {

        dispatch(updateSortingSetting({ field: field, store: 'movieList' }));

    }

    /*
     * Korostetaan löydetyt, hakutermiä vastaavat merkkijonot
     */
    const emphasizeSearched = (str) => {
        
        let match = search;
        let replace = "<mark>"+match+"</mark>";
        let regexp = new RegExp(match, "gi");

        return parse(str.replace(regexp, replace))
    }

    const displayTable = () => {
        return (
            <TABLE className='taulukko'>

                <THEAD>
                    <TR>
                    {
                        headers.map(header => {
                            return (
                                    <TH
                                        sortingField = {(sortingField && sortingField === header.field)}
                                        sortable = {header.sortable}
                                        key={header.field}
                                        onClick={() => header.sortable ? onSortingChange(header.field) :null}
                                    >
                                        {
                                            (sortingField && sortingField === header.field)
                                            ? (sortingOrder === 'asc')
                                                ? <BiSortUp />
                                                : <BiSortDown />
                                            : null
                                        }
                                        {header.name}
                                    </TH>
                            )
                        })
                    }
                    </TR>
                </THEAD>

                <TBODY>
                {
                    visibleData.map(m => {
                        return (
                            <TR key={m.id}>
                                <TD before="Nimi">
                                    {
                                        search !== ''
                                        ? emphasizeSearched(m.nimi)
                                        : m.nimi
                                    }</TD>
                                <TD before="Arvosteluja">{m.numberOfReviews}</TD>
                                <TD before="Keskiarvo">{m.averageOfReviews}</TD>
                            </TR>
                        )
                    })
                }
                </TBODY>
            
            </TABLE>
        )
    }

    return (
        <>
            {
                visibleData
                ? displayTable()
                : null
            }
        </>
    );
};

export default TablePresentation;