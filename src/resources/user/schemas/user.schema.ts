import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'

export type UserDocument = mongoose.HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  email: string

  @Prop({ unique: true })
  username: string

  @Prop({ required: true })
  password: string

  @Prop()
  salt: string

  @Prop({ required: true })
  name: string

  @Prop({ default: true })
  active: boolean

  @Prop({ default: 'user' })
  role: string
}

export const UserSchema = SchemaFactory.createForClass(User)
