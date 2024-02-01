import React from "react";
import "./BizeYazin.css"

export const BizeYazin = () => {
  return (
    <div>
      <h1>BizeYazin</h1>

      <form action="" id="contactform">
        <div className="form-group">
          <input
            type="text"
            name="fullname"
            className="formControl"
            placeholder="Tam ad"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="formControl"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="phone"
            id="phone"
            className="formControl"
            placeholder="+994(XX) XXX-XX-XX"
            inputMode="text"
          />
        </div>
        <div className="form-group">
          <textarea
            name="text"
            placeholder="Mətn"
            rows="10"
            cols="100"
          ></textarea>
        </div>
        <input type="submit" id="submitBtn" value="Göndər" />
      </form>
    </div>
  );
};
