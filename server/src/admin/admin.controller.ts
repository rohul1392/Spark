import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { JwtGuard } from 'src/auth/gurds/jwt.gurd';
import { JwtPayload } from 'src/auth/interfaces/jwt-payload.interface';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dtos/cerate-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(
    private adminService: AdminService,
    private jwtService: JwtService,
  ) {}

  @Post('/signup')
  async signup(@Body() createAdminDto: CreateAdminDto) {
    return await this.adminService.signup(
      createAdminDto.name,
      createAdminDto.email,
      createAdminDto.password,
      createAdminDto.role,
    );
  }
  @Post('/signin')
  async signin(@Body() body, @Res({ passthrough: true }) response: Response) {
    const user = await this.adminService.signin(body.email, body.password);
    const { _id, role } = user;
    const payload: JwtPayload = { _id, role };
    const accessToken = await this.jwtService.signAsync(payload);
    response.cookie('jwt', accessToken, { httpOnly: true });

    return { accessToken };
  }
  @UseGuards(JwtGuard)
  @Post('/signout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');

    return 'Success!';
  }
}
