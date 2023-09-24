import { Mapper } from "base/mapper";
import { UserEntity } from "../entitites/user-entity";
import { UserModel } from "domain/user/models/user.model";

export class UserImplementatinoRespositoryMapper extends Mapper<UserEntity, UserModel>{

  override mapTo(params: UserModel): UserEntity {
    return {
      username: params.username,
      password: params.password,
      age: params.age,
      name: params.name
    }
  }

   override mapFrom(params: UserEntity): UserModel {
    return {
      username: params.username,
      password: params.password,
      age: params.age,
      name: params.name
    }
  }

}