import {AppModule} from "./app.module";
import {NestFactory} from "@nestjs/core";

const start = async () => {
    try{
        const PORT = process.env.port || 5000
        const app = await NestFactory.create(AppModule)
        await app.listen(PORT, () => console.log(`Sever started at port: ${PORT}`))
    }catch(e) {
        console.log(e)
    }
}

start()
