import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://dgcxgife:BB4UVIDUfWiBKlq_SBJpGWTUe_I-V4zf@puffin.rmq2.cloudamqp.com/dgcxgife',
      ],
      queue: 'NOTIFICATION_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(4000);
}


bootstrap();
