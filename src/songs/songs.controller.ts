import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Get('songs')
  findAll(): string {
    return 'This action returns all songs';
  }

  @Post('songs')
  create(@Body() createSongDto: string): string {
    return `This action creates a new ${createSongDto}`;
  }

  @Put('songs/1')
  update(@Body() updateSongDto: string): string {
    return `This action updates a song`;
  }

  @Get('songs/1')
  findOne(): string {
    return `This action returns a #1 song`;
  }

  @Delete('songs/1')
  remove(): string {
    return `This action removes a #1 song`;
  }
}
