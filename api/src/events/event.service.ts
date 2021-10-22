import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EventDto } from "./dto/event.dto";
import { Event, EventDocument } from "./schemas/event.schema";

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name) private eventModel: Model<EventDocument>
  ) {}

  async getEvents(): Promise<Event[]> {
    const events = await this.eventModel.find().sort({ date: 1, start: 1 });

    return events;
  }

  async createEvent(eventDto: EventDto): Promise<Event> {
    const newEvent = new this.eventModel({
      name: eventDto.eventName,
      date: eventDto.eventDate,
      start: eventDto.eventStart,
      end: eventDto.eventEnd,
    });

    return newEvent.save();
  }

  async removeEvent(id: string) {
    return this.eventModel.findByIdAndRemove(id);
  }

  async editEvent(id: string, eventDto: EventDto): Promise<Event> {
    const editedEvent: Event = {
      name: eventDto.eventName,
      date: eventDto.eventDate,
      start: eventDto.eventStart,
      end: eventDto.eventEnd,
    };

    return this.eventModel.findByIdAndUpdate(id, editedEvent);
  }
}
