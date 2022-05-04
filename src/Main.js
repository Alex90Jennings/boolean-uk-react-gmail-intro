import EmailToolbar from "./EmailToolbar";
import EmailContent from "./EmailContent";

import "./styles/main-styles.css";

function Main() {
  return (
    <main className="email-view">
      <EmailToolbar />
      <EmailContent />
    </main>
  );
}

export default Main;
