import RHFInput from "@/components/RHFInputs/RHFInput";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import RHFSelect from "@/components/RHFInputs/RHFSelect";
import RHFTextArea from "@/components/RHFInputs/RHFTextArea";
import RHFRadioGroup from "@/components/RHFInputs/RHFRadioGroup";
import RHFCheckbox from "@/components/RHFInputs/RHFCheckBox";
import RHFFileUpload from "@/components/RHFInputs/RHFFileUpload";
import  RHFDatePicker  from "@/components/RHFInputs/RHFDatePicker";
import FilePicker from "@/components/FilePicker";
import RHFToggle from "@/components/RHFInputs/RHFToggle";
import RHFPhoneInput from "@/components/RHFInputs/RHFPhoneInput";
const schema = z.object({
  email: z
    .string()

    .email("Invalid email format"),
  amount: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, "Must be a valid number with up to 2 decimals"),
  status: z
    .enum(["pending", "in_progress", "completed"])
    .refine((val) => !!val, { message: "الحالة خربانه" }),
  agree: z.boolean(),
});

type FormData = z.infer<typeof schema>;

export default function DraftPage() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "hello",
      amount: "off",
      status: "pending",
      agree: true,
    },
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <div className="w-screen min-h-screen flex items-center justify-center flex-col gap-4 overflow-scroll p-4 ">
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-md h-fit flex flex-col gap-4"
        >
          <RHFInput
            disabled={true}
            label="email"
            name="email"
            placeholder="Enter email"
          />
          <RHFInput label="fuck" name="amount" placeholder="Enter amount" />
          <RHFSelect
            name="status"
            label="Project Status"
            placeholder="Select a status"
            options={[
              { label: "Pending", value: "pending" },
              { label: "In Progress", value: "in_progress" },
              { label: "Completed", value: "completed" },
            ]}
          />
          <RHFTextArea
            label="Description"
            name="description"
            placeholder="Enter description"
            disabled={true}
          />
          <RHFRadioGroup
            direction="row"
            name="status"
            label="Project Status"
            options={[
              { label: "Pending", value: "pending" },
              { label: "In Progress", value: "in_progress" },
              { label: "Completed", value: "completed" },
            ]}
          />
          <RHFCheckbox
            name="agree"
            label="I agree to the terms and conditions"
            
          />
          <RHFFileUpload
            name="fileUpload"
            label="Upload File"
            accept=".pdf,.docx"
          />
          <RHFDatePicker
            name="dueDate"
            label="Due Date"
            placeholder="Select due date"
            
          />
          <FilePicker name="hello" onChange={()=>{}} />
          <RHFToggle
            name="notifications"
            label="Enable Notifications"
            description="Turn on to receive notifications"
          />
          <RHFPhoneInput
            name="phoneNumber"
            label="Phone Number"
            placeholder="Enter your phone number"
            defaultCountry="US"
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
