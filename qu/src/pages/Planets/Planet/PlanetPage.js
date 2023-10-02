import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'; 
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Loading from '../../../components/Loading/Loading';

import { PlanetRowDiv } from './PlanetPage.styled';

import { getPlanet } from '../../../store/planet/actions';

const PlanetPage = ({ planet, getPlanet }) => {
  const location = useLocation();
  const [planetDetails, setPlanetDetails] = useState(null);

  useEffect(() => {
    getPlanet(location.state.id);
  }, [location.state.id, getPlanet]);

  useEffect(() => {
    if (planet.fetched) {
      setPlanetDetails(planet.planet);
    }
  }, [planet.fetched, planet.planet]);


  useEffect(() => {
    return () => {
      setPlanetDetails(null);
    }
  }, []);
    
  if (!planetDetails) return <Loading />;

  return (
    <Container>
      <h1>{`Planet: ${planetDetails.name}`}</h1>
      <PlanetRowDiv>{`Gratvity: ${planetDetails.gravity}`}</PlanetRowDiv>
      <PlanetRowDiv>{`Terrain: ${planetDetails.terrain}`}</PlanetRowDiv>
      <PlanetRowDiv>{`Climate: ${planetDetails.climate}`}</PlanetRowDiv>
      <PlanetRowDiv>{`Population: ${planetDetails.population}`}</PlanetRowDiv>
      <Button variant="contained" color="primary" href="/planets">
          Back
      </Button>  
  </Container>
  )
};

const mapStatesToProps = state => ({
  planet: state.planet,
});

const mapDispatchToProps = {
  getPlanet,
};

PlanetPage.propTypes = {
  planet: PropTypes.object,
  getPlanet: PropTypes.func,
}

export default connect(
  mapStatesToProps,
  mapDispatchToProps,
)(PlanetPage);
