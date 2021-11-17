import {Controller, Get} from "@nestjs/common";

@Controller('/tracks')
export class TrackController {
    @Get()
    getAll() {
        return 'work'
    }

}
