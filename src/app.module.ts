import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://dicharmed:1234@cluster0.aksiz.mongodb.net/spotifyClone?retryWrites=true&w=majority'),
        TrackModule
    ]
})
export class AppModule {}
