import Imap = require('node-imap');
import { MailParser, simpleParser } from 'mailparser';
import { Stream } from 'stream';
const emailConfig: Imap.Config = {
  user: process.env.NODEMAILER_USER as string,
  password: process.env.NODEMAILER_PASS as string,
  host: 'imap.gmail.com',
  port: 993,
  tls: true,
};

export const connectAndReadEmails = async (): Promise<void> => {

  const imap = new Imap(emailConfig);

  return new Promise((resolve, reject) => {
    imap.once('ready', () => {
      imap.openBox('Inbox', true, (err) => {
        if (err) {
          reject(err);
          return;
        }
        imap.search(['UNSEEN'], (searchErr, results) => {
          if (searchErr) {
            reject(searchErr);
            return;
          }
          const fetch = imap.fetch(results, { bodies: '' });
          fetch.on('message', (msg, seqNo) => {
            console.log('in fetch on loop');
            const buffers: Buffer[] = [];
            msg.on('body', (stream: Stream, info) => {
              console.log('msg parts stream loop')
              stream.on('data', (chunk: Buffer) => {
                buffers.push(chunk)
              });

            });

            msg.once('end', async () => {
              const stream = Buffer.concat(buffers);
              try {
                const parsedEmail = await simpleParser(stream);
                console.log('in mailparser loop');
                await processParsedEmail(parsedEmail);
                await markEmailAsRead(imap, seqNo);
              } catch (parseError) {
                reject(parseError);
              }
            })
          });

          fetch.once('end', () => {
            imap.end();
            resolve();
          });
        });

      });
    });

    imap.once('error', (err) => {
      reject(err)
    });

    imap.once('end', () => {
      console.log('imap connection ended');
    });

    imap.connect();
  })
};

export const processParsedEmail = async (parsedEmail: any): Promise<void> => {
  console.log('in process parsed emails', parsedEmail)
  const subject = parsedEmail.subject;
  const from = parsedEmail.from?.text;
  const body = parsedEmail.text;

  console.log(`Subject: ${subject}`);
  console.log(`From: ${from}`);
  console.log(`Body: ${body}`);
};

export const markEmailAsRead = async (imap: Imap, seqNo: number): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    console.log('seqno ', seqNo);
    imap.addFlags(seqNo, 'SEEN', (addFlagErr) => {
      console.log('imap add flags loop');
      if (addFlagErr) {
        console.log('Error in marking the email read ', addFlagErr);
        reject(addFlagErr);
      } else {
        console.log('Email marked as read ', seqNo);
        resolve();
      }
    });
  });
}