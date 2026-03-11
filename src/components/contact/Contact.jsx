const Contact = () => {
  return (
    <div className="card contact-card">
      <h2>Get In Touch!</h2>
      <p>
        My inbox is always open! Feel free to reach out with any questions,
        opportunities, or just to tell me hi! I’ll get back to you as soon as
        possible.
      </p>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Your name" required />
        <input type="email" name="email" placeholder="Your email" required />
        <textarea
          name="message"
          placeholder="Your message"
          rows={6}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;