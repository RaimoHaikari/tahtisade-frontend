import React from 'react';

import { useFormik } from "formik";
import * as Yup from "yup";

import { useSelector } from "react-redux";

import MutationServices from "../../../services/mutations";

/*
 *         
addMovieCountry(
            googleID: Int!,
            country: String!
        ): Boolean!
 */
function ElokuavaMaa(props) {

    const { token } = useSelector(state => state.user);

    const formik = useFormik({
        initialValues: {
            googleID: "",
            country: ""
        },
        validationSchema: Yup.object({
            googleID: Yup.number().required().positive().integer(),
            country: Yup.string().required(),

        }),
        onSubmit: async (values) => {
            try {

                const {data, errors} = await MutationServices.addMovieCountry({
                    googleID: values.googleID,
                    country: values.country,
                    token: token
                });

                console.log(". DATA", data);
                console.log(". ERRORS", errors);
                

            } catch (e) {
                console.log(".... in Error ....");
                console.log(e)
            }
        }
    });

    //console.log(formik.errors);

    return (
        <form onSubmit={formik.handleSubmit}>  
            <div className='input-container'>
                <input 
                    id="googleID"
                    name="googleID"
                    type="text"
                    placeholder="GoodleID of the movie"
                    value={formik.values.googleID}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.googleID && formik.errors.googleID ? <p>{formik.errors.googleID }</p> : null
                }
            </div>
            <div className='input-container'>
                <input 
                    id="country"
                    name="country"
                    type="text"
                    placeholder="Production country of movie"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.country && formik.errors.country ? <p>{formik.errors.country }</p> : null
                }
            </div>
            <div className='input-container'>
                <button type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default ElokuavaMaa;