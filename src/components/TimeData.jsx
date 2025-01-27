import "../styles/components/TimeData.css";

export function TimeData() {
  return (
    <div className="time-data">
      <h2 className="title">Date & Time</h2>
      <div className="sections">
        <div className="section">
          <h3 className="section-title">Date</h3>
          <p className="date"></p>
        </div>
        <div className="section">
          <h3 className="section-title">Time</h3>
          <p className="time"></p>
        </div>
      </div>
    </div>
  );
}
