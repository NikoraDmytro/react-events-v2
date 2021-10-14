import { FieldHookConfig } from "formik";

export type EventInputProps = FieldHookConfig<string> & {
  name: string;
  label: string;
};
