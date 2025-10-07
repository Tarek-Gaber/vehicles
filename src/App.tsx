import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { useTranslation } from "./hooks";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <LanguageSwitcher />
      <h1>{t("pages.dashboard.title")}</h1>
    </>
  );
}

export default App;
