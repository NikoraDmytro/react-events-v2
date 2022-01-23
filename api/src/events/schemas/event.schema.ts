import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type EventDocument = Event & Document;

@Schema({
  toJSON: {
    transform: (doc, ret, options) => {
      ret.id = ret._id;
      delete ret._id;
    },
  },
})
export class Event {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  start: string;

  @Prop({ required: true })
  end: string;
}

export class EventWithId extends Event {
  id: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);
