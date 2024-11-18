import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { connections } from '../common/constants/constants';

const mockSongService = {
  getSongs() {
    return [
      {
        id: 1,
        title: 'Song 1',
        artists: ['Artist 1'],
      },
      {
        id: 2,
        title: 'Song 2',
        artists: ['Artist 2'],
      },
    ];
  },
};


@Module({
  controllers: [SongsController],
  providers: [
    SongsService,
    // {
    //   provide: SongsService,
    //   useClass: SongsService
    // }
    {
      provide: "CONNECTION",
      useValue: connections
    }
  ],
})
export class SongsModule {}
