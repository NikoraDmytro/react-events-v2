import { FieldHookConfig } from "formik";
import { ReactElement } from "react";

export type EventInputProps = FieldHookConfig<string> & {
  name: string;
  label: string;
};

export type SliderProps = {
  list: ReactElement<HTMLLIElement>[];
  className: string;
};
