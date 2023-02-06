import ApiService from "../../Services/Api.service";
import AuthService from "../../Services/Auth.service";
import { Route, useNavigate } from "react-router-dom";
import create from "zustand";
import { useUserStore } from "../../Stores/userStore";
import { useParams } from "react-router-dom";
import { UserProps } from "../../Models/User/user.interface";
import Event from "../../Models/Events/event";
import { useEffect, useState } from "react";
import User from "../../Models/User/user";

export const UserPage = () => {
  const [user, setUser] = useState<UserProps>({
    ID: "",
    Email: "",
    Name: "",
    Description: "",
    Social: "",
    Activities: [""],
    Admin: false,
  });
  let { id } = useParams();

  useEffect(() => {
    User.getUser(id).then((data: any) => {
      console.log(data.Name);
      setUser({
        ID: data.ID,
        Email: data.Email,
        Name: data.Name,
        Description: data.Description,
        Social: data.Social,
        Activities: data.Activities,
        Admin: data.Admin,
      });
    });
    console.log(id);
    console.log(user.Activities);
  }, []);

  /*const [user, setUser] = useState({
    name: "John Doe",
    avatar: "https://via.placeholder.com/128x128",
    bio: "Software Engineer and Technology Enthusiast",
    location: "San Francisco, CA",
    work: "OpenAI",
    education: "Stanford University",
    contact: "johndoe@email.com",
  });*/

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
            <img src="/profile.png" />
          </figure>
        </div>
        <div className="column">
          <p className="title is-4">{user.Name}</p>
          <div className="column is-half">
            <div className="box">
              {!user.Description ? <p className="subtitle is-5">Nada a dizer</p> : <p className="subtitle is-5">{user.Description}</p>}
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="field is-horizontal box has-shadow">
        <div className="field-label is-normal">
          <label className="label">Sport Activities</label>
        </div>
        <div className="field-body">
          <div className="field ">
            <div className="column is-two-fifths">
              <div className="box has-background-primary">
                <ul>
                  {user.Activities.map((activities) => (
                    <li className="has-text-white" key={activities}>
                      {activities}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="field-label is-normal">
            <label className="label">Game Style Preference</label>
          </div>
          <div className="field">
            <div className="column is-two-fifths">
              <div className="box has-background-primary">
                <p className="has-text-white">{user.Social}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="field is-grouped is-grouped-right">
        <p className="control">
          <button className="button is-primary is-outlined">Edit Profile</button>
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
                  <input className="input" type="text" name="name" defaultValue={user.Name} />
                </div>
              </div>{" "}
              <div className="field">
                <label className="label">Bio</label>
                <div className="control">
                  <textarea className="textarea" name="bio" defaultValue={user.Name} />
                </div>
              </div>
              <div className="field">
                <label className="label">Location</label>
                <div className="control">
                  <input className="input" type="text" name="location" defaultValue={user.Name} />
                </div>
              </div>
              <div className="field">
                <label className="label">Work</label>
                <div className="control">
                  <input className="input" type="text" name="work" defaultValue={user.Name} />
                </div>
              </div>
              <div className="field">
                <label className="label">Education</label>
                <div className="control">
                  <input className="input" type="text" name="education" defaultValue={user.Name} />
                </div>
              </div>
              <div className="field">
                <label className="label">Contact</label>
                <div className="control">
                  <input className="input" type="text" name="contact" defaultValue={user.Name} />
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
