import { Injectable, Module } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class DummyClass {
  constructor(private readonly moduleRef: ModuleRef) {
    console.log('moduleRef in dummyClass', this.moduleRef);
  }
}

@Module({
  providers: [DummyClass],
  exports: [DummyClass],
})
export class WorkspaceAModule {}
