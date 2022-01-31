import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRequestDto } from '../dto/user.request.dto';
import { UsersRepository } from '../users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async signUp(body: UserRequestDto) {
    const { userID, name, password, profileImg } = body;
    const isUserExist = await this.usersRepository.existsByUserID(userID);

    if (isUserExist) {
      throw new UnauthorizedException('중복된 아이디입니다.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.usersRepository.create({
      userID,
      name,
      password: hashedPassword,
      profileImg,
    });

    return user.readOnlyData;
  }
}
