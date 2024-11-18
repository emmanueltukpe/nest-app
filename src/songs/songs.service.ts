import { Injectable, Scope } from '@nestjs/common';
import { CreateSongsDTO } from './dto/songs.dto';

@Injectable(
    {
        scope: Scope.TRANSIENT
    }
)
export class SongsService {

    private readonly songs = [];

    public createSongs( songs: CreateSongsDTO ) {
        this.songs.push(songs);

        return this.songs;
    }

    public getSongs() {
        // throw new Error("Stop wasting emotions");
        return this.songs;
    }
}
