import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    // Enable CORS for frontend
    app.enableCors({
      origin: 'http://localhost:5173', // Frontend url
      methods: 'GET,POST', // Allowed HTTP methods (optional)
      allowedHeaders: 'Content-Type, Accept', // Allowed headers (optional)
    });
  
  // Enable validation globally
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Strip unknown properties
    forbidNonWhitelisted: true, // Throw error if unknown properties are sent
    transform: true, // Automatically transform request payloads into DTO classes
  }));

  await app.listen(3000);
}
bootstrap();
