import { PartialType } from '@nestjs/mapped-types'
import { MinLength } from 'class-validator'
import { CreateUserDto } from './create-user.dto'

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @MinLength(8)
  password?: string

  name?: string

  active?: boolean
}
