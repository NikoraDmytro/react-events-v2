import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { EventDocument, Event } from "../schemas/event.schema";
import { Model } from "mongoose";
import { EventDto } from "./../dto/event.dto";

@Injectable()
export class validateTime
  implements PipeTransform<EventDto, Promise<EventDto>>
{
  constructor(
    @InjectModel(Event.name) private eventModel: Model<EventDocument>
  ) {}

  async transform(value: EventDto, metadata: ArgumentMetadata) {
    const busyWith = await this.eventModel.find({
      date: { $eq: value.eventDate },
      start: { $lte: value.eventEnd },
      end: { $gte: value.eventStart },
    });

    if (busyWith.length) {
      throw new HttpException("Time is busy", HttpStatus.BAD_REQUEST);
    }

    return value;
  }
}
