import {
  IsArray,
  IsDate,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateSongsDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsArray()
  readonly artistes: string;

  @IsString()
  readonly album: string;

  @IsNotEmpty()
  @IsDateString()
  readonly realeaseDate: Date;

  @IsMilitaryTime()
  @IsNotEmpty()
  readonly duration: number;
}
