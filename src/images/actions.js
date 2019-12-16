import { GET_IMAGES_SUCCESS, GET_IMAGES_FAILURE } from './actionTypes';

export const getImagesSuccess = payload => ({
  type: GET_IMAGES_SUCCESS,
  payload,
});

export const getImagesFailure = payload => ({
  type: GET_IMAGES_FAILURE,
  payload,
});
