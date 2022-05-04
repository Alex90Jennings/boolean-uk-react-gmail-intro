import Title from "./Title";
import EmailContentHeader from "./EmailContentHeader";
import EmailBody from "./EmailBody";
import EmailActions from "./EmailActions";

function EmailContent() {
  return (
    <article className="email-content">
      <Title />
      <EmailContentHeader />
      <EmailBody />
      <EmailActions />
    </article>
  );
}

export default EmailContent;
