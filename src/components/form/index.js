import { useState } from "react";
import "./style.css";
const Forms = (props) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");
  const [genre, setgenre] = useState("");
  const [isPending, setIsPending] = useState("false");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {
      nom,
      prenom,
      age,
      genre,
    };
    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new membre added");
      setIsPending(false);
    });
  };
  return (
    <div className={props.showModel ? "forms active" : "forms"}>
      <h2>Form submit</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="text-box">
          <div className="input">
            <label> Nom :</label>
            <input
              type="text"
              required
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div className="input">
            <label>Prenom :</label>
            <input
              type="text"
              required
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="text-box">
          <div className="input">
            <label>Age :</label>
            <input
              type="text"
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
            ></input>
          </div>
          <div className="input">
            <label>Genre :</label>
            <select value={genre} onChange={(e) => setgenre(e.target.value)}>
              <option selected /* disabled */ hidden>
                Choose here
              </option>
              <option value="Femme">Femme</option>
              <option value="Homme">Homme</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
        </div>
        <label className="accept-title">Accept regulation :</label>
        <div className="accept">
          <p>J'Accept les regulations de site qui consite a .</p>
          <input type="radio" id="accept" name="drone" value="accept"></input>
        </div>

        {!isPending && <button className="btn">Submit</button>}
        {isPending && <button className="btn">Submit ...</button>}
      </form>
    </div>
  );
};

export default Forms;

// import React from "react";
// import { Modal, Button } from "react-bootstrap";
// const index = ({ showModel }) => {
//   console.log("form: " + showModel);
//   return (
//     <Modal show={showModel}>
//       <Modal.Header closeButton onClick={showModel}>
//         <Modal.Title>React Modal Popover Example</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="danger" onClick={showModel}>
//           Close
//         </Button>
//         <Button variant="dark" onClick={showModel}>
//           Store
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default index;
