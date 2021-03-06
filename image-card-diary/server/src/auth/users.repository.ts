import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { UserRequestDto } from './dto/user.request.dto';
import { User } from './users.schema';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async findUserByIdWithoutPassword(
    userID: string | Types.ObjectId,
  ): Promise<User | null> {
    const user = await this.userModel.findById(userID).select('-password');
    return user;
  }

  async findUserByUserID(userID: string): Promise<User | null> {
    const user = await this.userModel.findOne({ userID });
    return user;
  }

  async existsByUserID(userID: string): Promise<boolean> {
    const result = await this.userModel.exists({ userID });
    return result;
  }

  async create(user: UserRequestDto): Promise<User> {
    return await this.userModel.create(user);
  }
}
