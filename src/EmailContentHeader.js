import EmailInfo from "./EmailInfo.js";
import DateInfo from "./DateInfo.js";
import EmailActionIcons from "./EmailActionIcons.js";

function EmailContentHeader() {
  return (
    <header className="email-content--header">
      <div className="avatar"></div>
      <EmailInfo />
      <DateInfo />
      <EmailActionIcons />
    </header>
  );
}

export default EmailContentHeader;
