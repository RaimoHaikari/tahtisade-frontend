import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    HeroP
} from './herosectionElements'

const HeroSection = () => {
    return (
        <HeroContainer>

        
            <HeroBg />

            <HeroContent>
                <HeroH1>Tähtisadetta</HeroH1>
                <HeroP>
                    <span>Katsaus elokuvien ensi-ilta-arvosteluihin</span>
                </HeroP>
            </HeroContent>

        </HeroContainer>
    );
};

export default HeroSection;