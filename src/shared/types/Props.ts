import { FieldHookConfig } from "formik";
import { ReactElement } from "react";
import { EventWithId } from "../../store/types/StateTypes";

export type EventInputProps = FieldHookConfig<string> & {
  name: string;
  label: string;
};

export type SliderProps = {
  list: ReactElement<HTMLLIElement>[];
  className: string;
};

export type EventProps = {
  event: EventWithId;
  mode: "edit" | "read";
  toggleMode: () => void;
  resetForm: (e?: React.SyntheticEvent<any, Event> | undefined) => void;
};

export type Mode = EventProps["mode"];

export type EventWrapperProps = {
  event: EventWithId;
  children: (props: EventProps) => React.ReactNode;
};
