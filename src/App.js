import { useState } from "react";
import { checkValidationName, validateEmail, checkPhoneNumber } from "./helpers";

import "./App.css";

const countryCodes = [
  {
    code: "AM",

    label: "+374",
  },

  {
    code: "RU",

    label: "+7",
  },

  {
    code: "CA",

    label: "+1",
  },
];

const gender = [
  {
    gender: "male",

    id: 1,
  },

  {
    gender: "female",

    id: 2,
  },
];

function App() {
  const [firstNameValue, setfirstNameValue] = useState("");
  const [lastNameValue, setlastNameValue] = useState("");
  const [emailValue, setemailValue] = useState("");
  const [phoneValue, setphoneValue] = useState("");
  const [countryCodeValue, setcountryCodeValue] = useState("AM");
  const [genderValue, setgenderValue] = useState(1);

  function checkValidation(e) {

      e.preventDefault();
   if(!checkValidationName(firstNameValue)) {alert("Wrong First Name!"); return}
   if(!checkValidationName(lastNameValue)) {alert("Wrong Last Name!"); return}
   if(!validateEmail(emailValue)) {alert("Wrong Email!"); return}
   if(!checkPhoneNumber(phoneValue)) {alert("Wrong Phone Number"); return}

   alert(`{
    firstName: ${firstNameValue},
    lastName: ${lastNameValue},
    email: ${emailValue},
    phone: {
       number: ${phoneValue},
       code: ${countryCodeValue},
      },
    gender: ${genderValue}
   }`)

   
  }

  return (
    <div  className="main">
      <form onSubmit={e => checkValidation(e) } className="form">
        {/* FirstName */}
        <label htmlFor="firstName">FirstName</label>
        <input
          id="firstName"
          value={firstNameValue}
          onChange={e => {
            setfirstNameValue(e.target.value);
          }}
          type="text"
        />
        {!firstNameValue.length ? <span>Required !</span> : checkValidationName(firstNameValue) ? <span>Validate</span> : <span>Max Length 15 Symbol !</span>}

        {/* LastName */}
        <label htmlFor="lastName">LastName</label>
        <input
          id="lastName"
          value={lastNameValue}
          onChange={e => {
            setlastNameValue(e.target.value);
          }}
          type="text"
        />
        {!lastNameValue.length ? <span>Required !</span> : checkValidationName(lastNameValue) ? <span>Validate</span> : <span>Max Length 15 Symbol !</span>}

        {/* Email */}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={emailValue}
          onChange={e => {
            setemailValue(e.target.value);
          }}
        />
        {!emailValue.length ? <span>Required !</span> : validateEmail(emailValue) ? <span>Validate</span> : <span>Im Wait...</span>}

        {/* PhoneNumber */}
        <div className="phoneNumber">
          <label htmlFor="phone">PhoneNumber</label>

          <select name="phone" onChange={e => setcountryCodeValue(e.target.value)}>
            {countryCodes.map((item, index) => {
              return <option key={index} value={item.code}>{item.label}</option>;
            })}
          </select>

          <input
            id="phone"
            type="number"
            value={phoneValue}
            onChange={e => {
              setphoneValue((e.target.value));
            }}
          />
          {String(phoneValue).length > 10 ? <span>Max Length 10</span> : null}
        </div>

        {/* Gender */}
        <label htmlFor="gender">Gender</label>
        <select name="gender" onChange={e => setgenderValue(e.target.value)}>
        {gender.map((item,index) =>{
          return <option key={index} value={item.id}>{item.gender}</option>
        })
      }
      </select>
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
