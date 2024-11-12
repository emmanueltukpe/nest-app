import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongsDTO } from './dto/songs.dto';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}
  @Get()
  findAll(): Array<CreateSongsDTO> {
      try {
          return this.songsService.getSongs();
      } catch (error) {
          console.error(`I am a mistake, giving up ${error}`);
          throw new HttpException(`I am a mistake, giving up ${error}`, HttpStatus.I_AM_A_TEAPOT, {cause: error});
      }
  }

  @Post()
  create(@Body() createSongDto: CreateSongsDTO): Array<CreateSongsDTO> {
    return this.songsService.createSongs(createSongDto);
  }

  @Put('/1')
  update(@Body() updateSongDto: string): string {
    return `This action updates a song`;
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number): string {

    return `This action returns #${typeof id} song`;
  }

  @Delete('/1')
  remove(): string {
    return `This action removes a #1 song`;
  }
}
