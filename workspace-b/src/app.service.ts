import { Injectable } from '@nestjs/common';
import { DummyClass } from 'workspace-a';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class AppService {
  constructor(
    private readonly dummyClass: DummyClass,
    private readonly moduleRef: ModuleRef,
  ) {
    console.log('injected dummyClass', dummyClass);
    console.log('local moduleRef', moduleRef);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
