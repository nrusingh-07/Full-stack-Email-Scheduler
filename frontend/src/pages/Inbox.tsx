const emails = [
  {
    to: "John Smith",
    subject: "Meeting follow-up – Scheduled",
    status: "Scheduled",
    time: "Tue 9:15 AM",
  },
  {
    to: "Olive",
    subject: "Great to meet you – Sent",
    status: "Sent",
    time: "Thu 8:15 PM",
  },
];

function Inbox() {
  return (
    <div className="inbox-container">
      <h1>Inbox</h1>
      <p className="subtitle">Scheduled & Sent emails</p>

      <div className="email-list">
        {emails.map((mail, i) => (
          <div key={i} className="email-row">
            <div>
              <div className="email-to">To: {mail.to}</div>
              <div className="email-subject">{mail.subject}</div>
            </div>

            <div className="email-meta">
              <span className={`badge ${mail.status.toLowerCase()}`}>
                {mail.status}
              </span>
              <span className="time">{mail.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inbox;
