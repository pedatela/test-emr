// import { Test, TestingModule } from '@nestjs/testing';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { dataSourceOptions } from '../database';
// import { AuthorController } from './author.controller';
// import { AuthorService } from './author.service';

// describe('AppController', () => {
//   let authorController: AuthorController;

//   beforeEach(async () => {
//     const app: TestingModule = await Test.createTestingModule({
//       controllers: [AuthorController],
//       providers: [AuthorService],
//       imports: [TypeOrmModule.forRoot(dataSourceOptions)],
//     }).compile();

//     authorController = app.get<AuthorController>(AuthorController);
//   });

//   describe('root', () => {
//     it('should return "Hello World!"', async () => {
//       const data = await authorController.getAllAuthors()
//       expect(data).toBe([]);
//     });
//   });
// });
