import React, { useState } from "react";

function Contato() {
  const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <section className="page">
      <div className="container">
        <h2>Fale conosco</h2>
        <form onSubmit={handleSubmit} className="form-contato">
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="mensagem"
            placeholder="Sua mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contato;