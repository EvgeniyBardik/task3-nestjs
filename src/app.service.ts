import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Task 3 for Radency<hr><br>Fields of table:<br><br>name: string<br>category: string<br>content: string<br>active: boolean<br>date?: string<br><br>POST /notes Create a note<br>DELETE /notes/:id Remove note<br>PATCH /notes/:id Edit note<br>GET /notes/:id Retrieve note<br>/notes Get all notes<br> /notes/stats Get aggregate amount of notes";
  }
}
