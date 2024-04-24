import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('robo-shop')
  .setDescription('robo shop back end connection')
  .setVersion('0.1')
  .addTag('robo-shop')
  .build();

  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,document)
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
