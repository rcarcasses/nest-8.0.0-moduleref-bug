import { Injectable } from '@nestjs/common';
import {DummyClass} from "workspace-a";

@Injectable()
export class AppService {
  constructor(private readonly dummyClass: DummyClass) {
    console.log('injected dummyClass', dummyClass)
  }
  getHello(): string {
    return 'Hello World!';
  }
}
