export type Event = {
  name: string;
  start: string;
  end: string;
  date: string;
};

export type EventWithId = Event & { id: string };

export type EventsState = {
  dates: string[];
  entities: {
    [date: string]: EventWithId[];
  };
};
