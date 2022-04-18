import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NotesModule } from "./notes/notes.module";

@Module({
  imports: [
    NotesModule,
    MongooseModule.forRoot(
      process.env.MONGODB_STORE_URI ||
        "mongodb+srv://userpublic:groove1984@cluster0.e7vc9.mongodb.net/Notes?retryWrites=true&w=majority"
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
