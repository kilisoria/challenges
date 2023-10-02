import * as types from './actionTypes';
import * as swapiService from '../../services/swapiService';

export const planetsRequest = () => {
  return {
    type: types.PLANETS_BEGIN,
  };
};

export const planetsSuccess = planets => {
  return {
    type: types.PLANETS_SUCCESS,
    planets,
  };
};

export const planetsError = message => {
  return {
    type: types.PLANETS_FAILED,
    message,
  };
};

export const planetRequest = () => {
  return {
    type: types.PLANET_BEGIN,
  };
};

export const planetSuccess = planet => {
  return {
    type: types.PLANET_SUCCESS,
    planet,
  };
};

export const planetError = message => {
  return {
    type: types.PLANET_FAILED,
    message,
  };
};


// Action Creators
export const getPlanets = () => {
  return async dispatch => {
    dispatch(planetsRequest());

    try {
      const responseData = await swapiService.getPlanets();
      const { data } = responseData;
      const { results: planets } = data;
     
      dispatch(planetsSuccess(planets));
    } catch (err) {
      dispatch(planetsError(err.message));
    }
  };
};

export const getPlanet = planetId => {
  return async dispatch => {
    dispatch(planetRequest());

    try {
      const responseData = await swapiService.getPlanet(planetId);
      const { data: planet } = responseData;
      dispatch(planetSuccess(planet));
    } catch (err) {
      dispatch(planetError(err.message));
    }
  };
};
