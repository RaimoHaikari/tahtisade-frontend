const BasicTheme = {
    breakPoints: {
        xs: 0,
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px'
    },
    navbar: {},
    frontpage: {
        primaryTitle_FontSize: '3rem'
    },
    colors: {
        backgroundColor: '#411a35',
        bgHover: '#000',
        bgLight: '#fcede8',     // Leipätekstin tausta,
        bgWhite: '#fff',        // Elokuvakuvakkeiden tausta
        bgSecondary: '#c7b3c2', // Passiivinen välilehtiotsikko, taulukon "joka toinen rivi"
        txtDefault: 'navy'
    },
    text: {
        fontSize: '1em',
        txtDefault: 'navy',     // Elokuvakuvakkeiden tekstit, Taulukkolistauksen normaali otsikko
        txtActive: 'red',       // Taulukkolistauksen aktivoitu otsikko
    }
}

export default BasicTheme;