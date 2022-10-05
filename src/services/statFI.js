import axios from "axios";


let backendUrl = 'https://statfin.stat.fi:443/PxWeb/api/v1/fi/StatFin/rpk/statfin_rpk_pxt_13kq.px';

/*
 *
 */
const fooBar = async () => {

    const response = await axios.post(
        backendUrl,
        {
            "query": [
              {
                "code": "Vuosi",
                "selection": {
                  "filter": "item",
                  "values": [
                    "2009",
                    "2010",
                    "2011",
                    "2012",
                    "2013",
                    "2014",
                    "2015",
                    "2016"
                  ]
                }
              },
              {
                "code": "Kunta",
                "selection": {
                  "filter": "item",
                  "values": [
                    "KU398"
                  ]
                }
              },
              {
                "code": "ICCS rikosluokka",
                "selection": {
                  "filter": "item",
                  "values": [
                    "SSS"
                  ]
                }
              },
              {
                "code": "Jutun luokittelu",
                "selection": {
                  "filter": "item",
                  "values": [
                    "SSS"
                  ]
                }
              },
              {
                "code": "Tiedot",
                "selection": {
                  "filter": "item",
                  "values": [
                    "rikokset_lkm"
                  ]
                }
              }
            ],
            "response": {
              "format": "json-stat2"
            }
          }
    );

    return response.data;
}




// eslint-disable-next-line import/no-anonymous-default-export
export default {
    fooBar
};