import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {WorkspaceAModule} from "workspace-a";

@Module({
  imports: [WorkspaceAModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
