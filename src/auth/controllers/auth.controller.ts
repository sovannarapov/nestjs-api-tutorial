import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthDto } from '../dto';

@Controller('auth')
export class AuthController {
  constructor(private _authService: AuthService) {}

  @Post('signup')
  signup(@Body() signUpDto: AuthDto) {
    return this._authService.signup(signUpDto);
  }

  @Post('signin')
  signin(@Body() signInDto: AuthDto) {
    return this._authService.signin(signInDto);
  }
}
