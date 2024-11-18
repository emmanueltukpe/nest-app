import { Injectable } from '@nestjs/common';

@Injectable()
export class DevConfigService {
    DBHOST = process.env.DBHOST_DEV || "localhost";
    
    getDBHost() {
        return this.DBHOST;
    }

}
