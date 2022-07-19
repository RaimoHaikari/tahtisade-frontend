const BasicTheme = {
    breakPoints: {
        xs: 0,
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px'
    },
    navbar: {
        height: '80px',
        marginTop: '0px',       // ... jos haluaisi piilottaa / näyttää tarpeen mukaan
        logoHeight: '70px',
        logoWidth: '70px',
        fontSize: '1.1rem',
        txtColor: 'red',
        navBtn: {
            backgroundColor: '#010606',
            bgHover: '#01bf71',
            color: '#01bf71',
            colorHover: '#010606'
        }
    },
    hero: {
        backgroundColor: '#411a35',
    },
    footer: {
        backgroundColor: '#101522',
    },
    frontpage: {
        primaryTitle_FontSize: '3rem'
    },
    general: {
        lineHeight: '2em',
        checkBoxSize: '1.2em'
    },
    colors: {
        backgroundColor: '#411a35',
        bgHover: '#000',
        bgPrimary: '#5e2750',   // Aktiivinen sivutuspallero
        bgLight: '#fcede8',     // Leipätekstin tausta,
        bgWhite: '#fff',        // Elokuvakuvakkeiden tausta
        bgSecondary: '#c7b3c2', // Passiivinen välilehtiotsikko, taulukon "joka toinen rivi"
        txtDefault: 'navy'
    },
    text: {
        fontSize: '1em',        // Elokuvakuvakkeen H1, välilehden otsikko
        txtDefault: 'navy',     // Elokuvakuvakkeiden tekstit, Taulukkolistauksen normaali otsikko
        txtActive: 'red',       // Taulukkolistauksen aktivoitu otsikko
        txtGray: '#b6b0a9ff',
        txtWhite: '#ffffff'
    },
    toolbar: {
        backgroundColor: '#f7f6f5',
        txtHover: 'red',
    }
}

export default BasicTheme;