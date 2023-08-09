import { useState } from "react";
import "../Forms/Forms.css";
import emailJs from '@emailjs/browser'

const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
        from_name: name,
        subject: subject,
        message: message,
        email: email,
    }

    emailJs.send("service_bfeppr8", "template_8o6lsin", templateParams, "VlowrCDZCRuISZQtr")
    .then((response) => {
        alert('email enviado com sucesso')
        setName('');
        setEmail('');
        setMessage('');
        setSubject('')
    }, (err) => {
        console.log('ERRO:', err)
        alert('Erro inesperado. Por favor, tente novamente')
    })
  };

  return (
    <>
      <div className="contactContainer"> 
        <form className="emailForm" onSubmit={handleSubmit}>
          <div className="smallInputContainer">
            <div className="inputContact">
              <label htmlFor="name" className="modalLabel">
                Nome:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="modalInput"
                placeholder="Digite seu nome"
                onChange={(event) => setName(event.target.value)}
                value={name}
                required
              />
            </div>

            <div className="inputContact">
              <label htmlFor="email" className="modalLabel">
                E-mail:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="modalInput"
                placeholder="Digite seu e-mail"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                required
              />
            </div>
          </div>

          <div className="inputContact">
            <label htmlFor="subject" className="modalLabel">
              Assunto:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="modalInput"
              placeholder="Digite o assunto"
              onChange={(event) => setSubject(event.target.value)}
              value={subject}
              required
            />
          </div>

          <div className="inputContact">
            <label htmlFor="message" className="modalLabel">
              Mensagem:
            </label>
            <textarea
              id="message"
              name="message"
              className="modalInput"
              placeholder="Digite sua mensagem"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
              required
            />
          </div>

          <button className="submitButton" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default Forms;
