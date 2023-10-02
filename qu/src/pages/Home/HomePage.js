import Container from '@material-ui/core/Container';

import { AppContainer,CoreLink } from '../../styled/Common.styled';
import { HomeHeader, HomeImg } from './HomePage.styled';

import logo from '../../assets/logo.png';
import '../../App.css';

const HomePage = () => {
    return (
        <Container maxWidth="md">
            <AppContainer className="App">
                <HomeHeader>
                    <HomeImg src={logo} alt="logo" />
                    <p>
                        Web Developer Challenge
                      </p>
                    <CoreLink to="/planets">Go</CoreLink>
                </HomeHeader>
            </AppContainer>
        </Container>
    )
};

export default HomePage;