import { useParams } from "react-router";

const OpportunityFormPage = () => {
  const { id } = useParams();
  const isEditMode = id && id !== "new";

  return (
    <div className="w-full h-full p-8">
      <h1 className="text-3xl font-bold">
        {isEditMode ? "Edit Opportunity" : "Create New Opportunity"}
      </h1>
    </div>
  );
};

export default OpportunityFormPage;
