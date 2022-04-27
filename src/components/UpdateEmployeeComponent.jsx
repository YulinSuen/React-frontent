import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function UpdateEmployeeComponent(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((res) => {
      const { firstName, lastName, emailId } = res.data;
      setFirstName(firstName);
      setLastName(lastName);
      setEmailId(emailId);
    });
  }, [id]);

  const updateEmployee = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, emailId };
    EmployeeService.updateEmployee(employee, id).then(() => {
      navigate("/employees");
    });
  };

  const cancel = () => {
    navigate("/employees");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="textcenter">添加员工</h3>
            <div className="card-body">
              <form className="form">
                <div className="form-group">
                  <label>名</label>
                  <input
                    name="firstName"
                    placeholder="名"
                    className="form-control"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>姓</label>
                  <input
                    name="lastName"
                    placeholder="姓"
                    className="form-control"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>电子邮件</label>
                  <input
                    name="emailId"
                    placeholder="电子邮件"
                    className="form-control"
                    value={emailId}
                    onChange={(event) => setEmailId(event.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={updateEmployee}
                >
                  保存
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={cancel}
                >
                  取消
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateEmployeeComponent;
