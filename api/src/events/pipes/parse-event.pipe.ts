import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { Event } from "../schemas/event.schema";
import { EventDto } from "./../dto/event.dto";

@Injectable()
export class parseEventPipe implements PipeTransform<EventDto, Event> {
  transform(value: EventDto, metadata: ArgumentMetadata): Event {
    return {
      name: value.eventName,
      date: value.eventDate,
      start: value.eventStart,
      end: value.eventEnd,
    };
  }
}
