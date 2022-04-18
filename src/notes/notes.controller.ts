import { NOTE_NOT_FOUND_ERROR } from "./notes.constants";
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { IdValidationPipe } from "src/pipes/id-validation.pipe";
import { CreateNoteDto } from "./dto/create-note.dto";
import { UpdateNoteDto } from "./dto/update-note.dto";
import { NotesService } from "./notes.service";
import { Note } from "./schemas/note.schema";

@Controller("notes")
export class NotesController {
  constructor(private notesService: NotesService) {}
  @Get("stats")
  async stats(): Promise<Array<Object>> {
    return this.notesService.stats();
  }
  @Get("")
  async getAll(): Promise<Note[]> {
    return this.notesService.getAll();
  }

  @Get(":id")
  async getOne(@Param("id", IdValidationPipe) id): Promise<Note> {
    const note = await this.notesService.getById(id);
    if (!note) {
      throw new NotFoundException(NOTE_NOT_FOUND_ERROR);
    }
    return note;
  }

  @Post()
  async create(@Body() createNoteDto: CreateNoteDto): Promise<Note> {
    return this.notesService.create(createNoteDto);
  }

  @Delete(":id")
  async remove(@Param("id", IdValidationPipe) id: string): Promise<any> {
    const deleteNote = await this.notesService.remove(id);
    if (!deleteNote) {
      throw new NotFoundException(NOTE_NOT_FOUND_ERROR);
    }
  }

  @Patch(":id")
  async update(
    @Body() updateNoteDto: UpdateNoteDto,
    @Param("id", IdValidationPipe) id: string
  ): Promise<Note> {
    const updateNote = await this.notesService.update(id, updateNoteDto);
    if (!updateNote) {
      throw new NotFoundException(NOTE_NOT_FOUND_ERROR);
    }
    return updateNote;
  }
}
