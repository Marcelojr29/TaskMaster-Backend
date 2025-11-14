const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./dist/app.module');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: [
      'https://task-master-frontend-seven.vercel.app/',
      /\.vercel\.app$/
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
  });

  const port = process.env.PORT || 3000;
  
  await app.listen(port);
  console.log(`🚀 Backend rodando na Vercel na porta ${port}`);
}

module.exports = bootstrap();
