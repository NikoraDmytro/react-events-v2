import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
} from "@nestjs/common";
import { EventsService } from "./event.service";
import { parseEventPipe } from "./pipes/parse-event.pipe";
import { Event, EventWithId } from "./schemas/event.schema";
import { validateTime } from "./pipes/validate-time.pipe";

@Controller("/events")
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Get()
  async getEvents() {
    await this.eventsService.deleteOutdated();

    return this.eventsService.getEvents();
  }

  @Post("/create")
  @UsePipes(validateTime)
  createEvent(@Body(parseEventPipe) event: Event) {
    return this.eventsService.createEvent(event);
  }

  @Put("/edit/:id")
  @UsePipes(validateTime)
  editEvent(@Body(parseEventPipe) event: EventWithId) {
    return this.eventsService.editEvent(event);
  }

  @Delete("/delete/:id")
  removeEvent(@Param("id") id: string) {
    return this.eventsService.removeEvent(id);
  }
}
