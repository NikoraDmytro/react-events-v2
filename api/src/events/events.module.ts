import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Event } from "src/events/schemas/event.schema";
import { EventSchema } from "./schemas/event.schema";
import { EventsService } from "./event.service";
import { EventsController } from "./event.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }]),
  ],
  providers: [EventsService],
  controllers: [EventsController],
})
export class EventsModule {}
