import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRequestDto } from '../dto/user.request.dto';
import { UsersRepository } from '../users.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginRequestDto } from '../dto/login.request.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async jwtLogIn(data: LoginRequestDto) {
    const { userID, password } = data;

    const user = await this.usersRepository.findUserByUserID(userID);

    if (!user) {
      throw new UnauthorizedException('아이디와 비밀번호를 확인해주세요!');
    }

    const isPasswordValidated: boolean = await bcrypt.compare(
      password,
      user.password,
    );

    if (!isPasswordValidated) {
      throw new UnauthorizedException('아이디와 비밀번호를 확인해주세요!');
    }

    const payload = { userID: userID, sub: user.id };

    return {
      token: this.jwtService.sign(payload),
    };
  }

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
