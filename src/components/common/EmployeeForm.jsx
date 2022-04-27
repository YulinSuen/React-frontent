import React from "react";

function Form(props) {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    emailId,
    setEmailId,
    navigate,
  } = props;

  const cancel = () => {
    navigate("/employees");
  };

  return (
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
                onClick={props.handleSave}
              >
                保存
              </button>
              <button type="button" className="btn btn-danger" onClick={cancel}>
                取消
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
