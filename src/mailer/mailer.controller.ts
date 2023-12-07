import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller('mailer')
export class MailerController {

    @EventPattern('booking_created')
    async handleOrderCreated(data:Record<string,unknown>){
        console.log("booking created", data)
    }
}


