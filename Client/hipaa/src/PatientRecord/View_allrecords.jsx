import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gettask, deleteTask, updateTask } from "../redux/action";
import { useEffect } from "react";
import Cookies from "js-cookie";
import Updaterecord from "../PatientRecord/Updaterecord";

function View_allrecords() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const token = Cookies.get("token");
  const [editingData, setEditingData] = useState(null);

  useEffect(() => {
    dispatch(gettask(token));
  }, [token]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id, token));
    console.log(id);
  };

  const handleEdit = (task) => {
    setEditingData({...task});
  };

  return (
    <>
      <div className="card-container">
        {tasks.tasks.length > 0 &&
          tasks.tasks.map((task, index) => (
            <div className="card" key={index}>
              <h2 className="card-title">FirstName : {task.firstName}</h2>
              <p className="card-description">LastName : {task.lastName}</p>
              <p className="card-description">Contact : {task.contact}</p>
              <p className="card-description">Email : {task.email}</p>
              <p className="card-description">
                SocialSecuritNumber : {task.SocialSecuritNumber}
              </p>
              <p className="card-description">Address : {task.address}</p>
              <p className="card-description">
                MedicalHistory : {task.medicalHistory}
              </p>
              <button onClick={() => handleDelete(task._id)} className="buttons">
                Delete
              </button>
              <button className="buttons" onClick={() => handleEdit(task)}>
                EDIT PROFILE
              </button>
            </div>
          ))}
      </div>
        {editingData && <Updaterecord data={editingData} />}
    </>
  );
}

export default View_allrecords;