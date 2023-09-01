import BasicGrid from "../components/Basicgrid";
import CustomCard from "../components/CustomCard";
import MUIForm from "../components/MUIForm";
import MUIDialog from "../components/MUIDialog";

export default function MUIPage() {
  // Save in pages/AboutPage.jsx
  return (
    <div className="MUIPage">
      <h1>MUI Demo Page</h1>
      <CustomCard />
      <BasicGrid />
      <MUIForm />
      <MUIDialog text="My first MUI Dialog" />
    </div>
  );
}
