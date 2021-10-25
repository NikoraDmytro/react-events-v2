import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Event, EventDocument } from "./schemas/event.schema";
import { format } from "date-fns";

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name) private eventModel: Model<EventDocument>
  ) {}

  async deleteOutdated() {
    const today = format(new Date(), "yyyy-MM-dd");

    await this.eventModel.deleteMany({ date: { $lt: today } });
  }

  async getEvents(): Promise<Event[]> {
    const events = await this.eventModel.find().sort({ date: 1, start: 1 });

    return events;
  }

  async createEvent(event: Event): Promise<Event> {
    const newEvent = new this.eventModel(event);

    return newEvent.save();
  }

  async removeEvent(id: string) {
    const deletedEvent = await this.eventModel.findByIdAndRemove(id);

    return deletedEvent;
  }

  async editEvent(id: string, event: Event): Promise<[Event, Event]> {
    const editedEvent = { ...event, id };

    const previousValue = await this.eventModel.findByIdAndUpdate(
      id,
      editedEvent
    );

    return [previousValue, editedEvent];
  }
}