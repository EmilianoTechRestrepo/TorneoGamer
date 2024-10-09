import axios from "axios";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CREATE_GROUP_SUCCESS,
  CREATE_GROUP_FAIL,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_FAIL,
  FETCH_GROUP_SUCCESS,
  FETCH_GROUP_FAIL,
  UPDATE_PAYMENT_STATUS_SUCCESS,
  UPDATE_PAYMENT_STATUS_FAIL,
  DELETE_GROUP_SUCCESS,
  DELETE_GROUP_FAIL,
} from "./actions-types";

export const registerAdmin = (adminData) => async (dispatch) => {
  try {
    const response = await axios.post("/auth/register", adminData);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const loginAdmin = (adminData) => async (dispatch) => {
  try {
    const response = await axios.post("/auth/login", adminData);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const createGroup = (groupData) => async (dispatch) => {
  try {
    const response = await axios.post("/group/create", groupData);
    dispatch({
      type: CREATE_GROUP_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_GROUP_FAIL,
      payload: error.response?.data?.message || "Error al crear el grupo",
    });
  }
};

// Acción para obtener todos los grupos
export const fetchGroups = () => async (dispatch) => {
  try {
    const response = await axios.get("/group");
    dispatch({
      type: FETCH_GROUPS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_GROUPS_FAIL,
      payload: error.response?.data?.message || "Error al obtener los grupos",
    });
  }
};

// Acción para obtener un grupo por su ID
export const fetchGroupById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/group/${id}`);
    dispatch({
      type: FETCH_GROUP_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_GROUP_FAIL,
      payload: error.response?.data?.message || "Error al obtener el grupo",
    });
  }
};

// Acción para actualizar el estado de pago
export const updatePaymentStatus = (id, paymentStatus) => async (dispatch) => {
  try {
    const response = await axios.put(`/group/payment/${id}`, { paymentStatus });
    dispatch({
      type: UPDATE_PAYMENT_STATUS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PAYMENT_STATUS_FAIL,
      payload:
        error.response?.data?.message ||
        "Error al actualizar el estado de pago",
    });
  }
};

// Acción para eliminar un grupo
export const deleteGroup = (id) => async (dispatch) => {
  try {
    await axios.delete(`/group/${id}`);
    dispatch({
      type: DELETE_GROUP_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_GROUP_FAIL,
      payload: error.response?.data?.message || "Error al eliminar el grupo",
    });
  }
};
