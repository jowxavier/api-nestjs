import { PrismaService } from 'src/database/prisma.service';
import { Body, Controller, Get, Post} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserRepository } from './repository/user.repository';

@Controller('users')
export class UsersController {
  constructor(
    private repository: UserRepository
  ) { }

  @Get()
  async getAll() {
      return { mesasage: "Lista Usuários" };
  }

  @Post()
  async save(@Body() request: UserDto) {
    const { name, email, password } = request

    await this.repository.create(name, email, password)
  }
}
