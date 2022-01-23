import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { Event, EventWithId } from "../schemas/event.schema";
import { EventDto } from "./../dto/event.dto";

type TOut = EventWithId | Event;

@Injectable()
export class parseEventPipe implements PipeTransform<EventDto, TOut> {
  transform(value: EventDto, metadata: ArgumentMetadata): TOut {
    return {
      name: value.eventName,
      date: value.eventDate,
      start: value.eventStart,
      end: value.eventEnd,
      id: value.id,
    };
  }
}
