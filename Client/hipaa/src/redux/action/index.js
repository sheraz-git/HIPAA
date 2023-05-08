import axios from "axios";
import { ADD_TASK, GET_TASKS, DELETE_TASK, UPDATE_TASK } from "./type";
////////////////// ADD RECORDS////////////////////
export const addtask =
  (
    firstName,
    lastName,
    contact,
    email,
    SocialSecuritNumber,
    address,
    medicalHistory,
    token
  ) =>
  async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3000/api/create", {
        firstName: firstName,
        lastName: lastName,
        contact: contact,
        email: email,
        SocialSecuritNumber: SocialSecuritNumber,
        address: address,
        medicalHistory: medicalHistory
      },{
        headers: {
          authorization: token,
        },

      });
      dispatch({ type: ADD_TASK, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
////////////////// GET RECORDS////////////////////
export const gettask = (token) => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3000/api/getrecord", {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: GET_TASKS, payload: response.data.findrecord });
  } catch (error) {
    console.log(error);
  }
};


 ////////////////// DELETE RECORDS////////////////////
export const deleteTask = (id, token) => async (dispatch) => {
  try {
    const response = await axios
      .delete(`http://localhost:3000/api/deleterecord/${id}`, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        dispatch({ type: DELETE_TASK, payload: id });
      });
  } catch (error) {
    console.log(error);
  }
};
////////////////// UPDATE RECORDS////////////////////


export const updateTask = (id, updatedData, token) => async (dispatch) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/api/updaterecord/${id}`,
      updatedData,
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({ type: UPDATE_TASK, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};