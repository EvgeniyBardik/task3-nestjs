import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Task 3 for Radency<hr><br>Fields of table:<br><br>name: string<br>category: string<br>content: string<br>active: boolean<br>date?: string";
  }
}
