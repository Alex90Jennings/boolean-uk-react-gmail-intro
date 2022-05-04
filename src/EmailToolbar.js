import IconList from "./IconList";
import PageButtons from "./PageButtons";

function EmailToolbar() {
  return (
    <nav className="email-toolbar">
      <IconList />
      <div className="space"></div>
      <PageButtons />
    </nav>
  );
}

export default EmailToolbar;
