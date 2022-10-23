import { useState } from "react";

 export const SignUp = () => {

  const [descricao, setDescricao] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<String>();
  const [password, setPassword] = useState("");
  const [prefAct, setPrefAct] = useState("");
  const [prefSocial, setPrefSocial] = useState("");

    function handleSubmit(e: { preventDefault: () => void; }) {
      e.preventDefault();
      console.log('You clicked submit.');
    }

  const isValidEmail =(email:string) => {
    return /\S+@\S+\.\S+/.test(email);
  }
  
  const emailHandler = (event:React.FormEvent<HTMLInputElement>) => {
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

  const passwordHandler = (event:React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  }

  const prefActHandler = (event:React.FormEvent<HTMLInputElement>) => {
    if(!event.currentTarget.value) {
      setError("Activities preferences are required.")
    } else {
      setPrefAct(event.currentTarget.value)
    }
  }

  const prefSocialHandler = (event:React.FormEvent<HTMLInputElement>) => {
    if(!event.currentTarget.value) {
      setError("Social preferences are required.")
    } else {
      setPrefAct(event.currentTarget.value)
    }
  }

  
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
                    {descricao.length==0 && <p className="help is-danger">{error}</p>}
                    {error && descricao.length!=0 && <p className="help is-danger">{error}</p>}
                  </div>
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control"> 
                    <input value={email} className="input is-primary" type="email" placeholder="e.g. rodrigoslb2000@example.com" onChange={emailHandler} />
                    {email.length==0 && <p className="help is-danger">{error}</p>}
                    {error && email.length!=0 && <p className="help is-danger">{error}</p>}
                  </div>
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                   <input value={password} className="input is-primary" type="password" placeholder="********" onChange={passwordHandler}/>
                   {password.length==0 && <p className="help is-danger">{error}</p>}
                   {error && password.length!=0 && <p className="help is-danger">{error}</p>}
                   </div>
                </div>

            <div className="field">
                <label className="label">Preferências de Atividades</label>
                <div className="control">
                <input value={prefAct} className="input is-primary" type="text" placeholder="insert here.."  onChange={prefActHandler}/>
                {prefAct.length==0 && <p className="help is-danger">{error}</p>}
                {error && prefAct.length!=0 && <p className="help is-danger">{error}</p>}
                </div>
            </div>

            <div className="field">
                <label className="label">Preferências Sociais</label>
                <div className="control">
                <input value={prefSocial} className="input is-primary" type="text" placeholder="insert here.."  onChange={prefSocialHandler} />
                {prefSocial.length==0 && <p className="help is-danger">{error}</p>}
                {error && prefSocial.length!=0 && <p className="help is-danger">{error}</p>}
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


