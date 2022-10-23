import { useState } from "react";

 export const SignUp = () => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState<String>();
  const [password, setPassword] = useState("");
  const [prefAct, setPrefAct] = useState("");
  const [prefSocial, setPrefSocial] = useState("");

  const isValidEmail =(email:string) => {
    return /\S+@\S+\.\S+/.test(email);
  }
  
  const handleChange = (event:React.FormEvent<HTMLInputElement>) => {
    if(!event.currentTarget.value){
        setError("Email is Required.")
    }
    else if (!isValidEmail(event.currentTarget.value)) {
      setError("Email is invalid.");
    } else {
      setError("");
    }
    
    setEmail(event.currentTarget.value);
  };

  
  return (
    <>
      <header className="hero is-primary">
        <div className="hero-body">
          <p className="title">Playin</p>
          <p className="subtitle">By Ming Software</p>
        </div>
      </header>
        <main className="hero">
        <div className="hero-body">
            <div className="columns is-centered">
            <div className="column is-half">
            <form className="box is-link">
                <h1 className="title">SignUp</h1>

                <div className="field">
                  <label className="label">Descrição</label>
                  <div className="control">
                    <input className="input is-primary" type="text" placeholder="insert here.." />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control"> 
                    <input className="input is-primary" type="email" placeholder="e.g. rodrigoslb2000@example.com" />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                   <input className="input is-primary" type="password" placeholder="********" />
                   </div>
                </div>

            <div className="field">
                <label className="label">Preferências de Atividades</label>
                <div className="control">
                <input className="input is-primary" type="text" placeholder="insert here.." />
                </div>
            </div>

            <div className="field">
                <label className="label">Preferências Sociais</label>
                <div className="control">
                <input className="input is-primary" type="text" placeholder="insert here.." />
                </div>
            </div>

            <div className="field">
            <button className="button is-primary is-fullwidth has-text-center" type="submit">Sign Up</button>
            </div>
            <footer>
                <p>&copy; Ming Software</p>
        </footer>
        </form>
        </div>
        </div>
        </div>
        </main>
    </>
    )
}

export default SignUp;


