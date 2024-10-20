import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import {join} from 'path';

@Module({
  imports: [
    MailerModule.forRoot({
      // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
      // or
      transport: {
        host: 'smtp.gmail.com', 
        port: 587,
        secure: false,
        auth: {
          user: 'ayenaaurel15@gmail.com',
          pass: 'wzgfuvqaqeqlqnjq',
        },
      },
      defaults: {
        from: '"No Reply" <silisipro@gmail.com>',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
      },
    })
  ],
  providers: [MailService],
  exports:[MailService]
})
export class MailModule {}
