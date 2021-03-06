import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { EventWithId } from "../../store/types/StateTypes";

export type InputFieldProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string;
  label?: string;
};

export type SliderProps<T> = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  data: T[];
  render: (data: T[]) => React.ReactNode;
};

export type DailyEventsProps = {
  dailyEvents: EventWithId[];
};

export type EventProps = {
  event: EventWithId;
  mode: "edit" | "read";
  toggleMode: () => void;
};

export type Mode = EventProps["mode"];

export type EventWrapperProps = {
  event: EventWithId;
  children: (props: EventProps) => React.ReactNode;
};
