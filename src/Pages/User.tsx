import { createContext, useState } from "react";
import ApiService from "../Services/Api.service";
import AuthService from "../Services/Auth.service";
import { Route, useNavigate } from "react-router-dom";
import create from "zustand";
import { useUserStore } from "../Stores/userStore";

export const UserPage = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    avatar: "https://via.placeholder.com/128x128",
    bio: "Software Engineer and Technology Enthusiast",
    location: "San Francisco, CA",
    work: "OpenAI",
    education: "Stanford University",
    contact: "johndoe@email.com",
  });

  const [sports, setSports] = useState(["Football", "Basketball", "Volleyball"]);

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Submit the form data to update the user profile
  };

  return (
    <div className="box has-background-white-bis animated fadeIn">
      <div className="columns">
        <div className="column is-2">
          <figure className="image is-square">
            <img src={user.avatar} alt={user.name} />
          </figure>
        </div>
        <div className="column">
          <p className="title is-4">{user.name}</p>
          <p className="subtitle is-5">{user.bio}</p>
          <hr />
          <p>
            <strong>Location: </strong>
            {user.location}
          </p>
          <p>
            <strong>Work: </strong>
            {user.work}
          </p>
          <p>
            <strong>Education: </strong>
            {user.education}
          </p>
          <hr />
          <p>
            <strong>Contact: </strong>
            {user.contact}
          </p>
        </div>
      </div>
      <div className="field is-horizontal box has-shadow">
        <div className="field-label is-normal">
          <label className="label">Sport Activities</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="box">
              <ul>
                {sports.map((sport) => (
                  <li key={sport}>{sport}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="field-label is-normal">
            <label className="label">Sport Activities</label>
          </div>
          <div className="field">
            <div className="control">
              <div className="select">
                <select value={"casual"}>
                  <option value="casual">Casual</option>
                  <option value="competitive">Competitive</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="field is-grouped is-grouped-right">
        <p className="control">
          <button className="button is-primary is-outlined" onClick={toggleModal}>
            Edit Profile
          </button>
        </p>
      </div>
      <div className={`modal ${modalOpen ? "is-active" : ""}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Edit Profile</p>
            <button className="delete" aria-label="close" onClick={toggleModal} />
          </header>
          <section className="modal-card-body">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" type="text" name="name" defaultValue={user.name} />
                </div>
              </div>{" "}
              <div className="field">
                <label className="label">Bio</label>
                <div className="control">
                  <textarea className="textarea" name="bio" defaultValue={user.bio} />
                </div>
              </div>
              <div className="field">
                <label className="label">Location</label>
                <div className="control">
                  <input className="input" type="text" name="location" defaultValue={user.location} />
                </div>
              </div>
              <div className="field">
                <label className="label">Work</label>
                <div className="control">
                  <input className="input" type="text" name="work" defaultValue={user.work} />
                </div>
              </div>
              <div className="field">
                <label className="label">Education</label>
                <div className="control">
                  <input className="input" type="text" name="education" defaultValue={user.education} />
                </div>
              </div>
              <div className="field">
                <label className="label">Contact</label>
                <div className="control">
                  <input className="input" type="text" name="contact" defaultValue={user.contact} />
                </div>
              </div>
              <div className="field">
                <label className="label">Sport Activities</label>
                <div className="control">
                  <textarea className="textarea" name="sports" defaultValue={sports.join(", ")} />
                </div>
              </div>
            </form>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" type="submit">
              Save Changes
            </button>
            <button className="button" onClick={toggleModal}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
