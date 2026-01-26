function Compose() {
  return (
    <div className="compose-container">
      <h1>Compose New Email</h1>

      {/* From */}
      <div className="form-group">
        <label htmlFor="fromEmail">From</label>
        <input
          id="fromEmail"
          type="email"
          value="oliver.brown@domain.io"
          disabled
        />
      </div>

      {/* To */}
      <div className="form-group">
        <label htmlFor="toEmail">To</label>
        <input
          id="toEmail"
          type="email"
          placeholder="recipient@example.com"
        />
      </div>

      {/* Delay & Limit */}
      <div className="row">
        <div className="form-group small">
          <label htmlFor="delay">Delay between emails</label>
          <input id="delay" type="number" placeholder="00" />
        </div>

        <div className="form-group small">
          <label htmlFor="limit">Hourly limit</label>
          <input id="limit" type="number" placeholder="00" />
        </div>
      </div>

      {/* Message */}
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Type your reply..."
          rows={8}
        />
      </div>

      {/* Actions */}
      <div className="actions">
        <button className="btn-outline">Send Later</button>
        <button className="btn-primary">Send</button>
      </div>
    </div>
  );
}

export default Compose;
