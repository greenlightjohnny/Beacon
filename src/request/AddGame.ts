import { IsString, Length } from "class-validator"

export class AddGame {
  @IsString()
  @Length(1, 20)
  name!: string
}
