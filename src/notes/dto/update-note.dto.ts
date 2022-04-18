import { IsString, IsBoolean, IsOptional } from "class-validator";
export class UpdateNoteDto {
  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsString()
  content: string;

  @IsBoolean()
  active: boolean;

  @IsOptional()
  @IsString()
  date?: string;
}
