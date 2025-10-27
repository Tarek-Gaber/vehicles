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
import RHFDateRangePicker from "@/components/RHFInputs/RHFDateRangePicker";


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
  <div>
  
  </div>
    
  );
}
