import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import {FileModule} from "./file/file.module";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://dicharmed:1234@cluster0.tuonl.mongodb.net/spotifyClone?retryWrites=true&w=majority'),
        TrackModule,
        FileModule,
    ]
})
export class AppModule {}
