import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { EventDto } from "./dto/event.dto";
import { EventsService } from "./event.service";

@Controller("/events")
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Get()
  getEvents() {
    return this.eventsService.getEvents();
  }

  @Post("/create")
  createEvent(@Body() eventDto: EventDto) {
    return this.eventsService.createEvent(eventDto);
  }

  @Put("/edit/:id")
  editEvent(@Body() eventDto: EventDto, @Param("id") id: string) {
    return this.eventsService.editEvent(id, eventDto);
  }

  @Delete("/delete/:id")
  removeEvent(@Param("id") id: string) {
    return this.eventsService.removeEvent(id);
  }
}
