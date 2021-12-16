![Pigeon](./pigeon.png "Pigeon")
## Pigeon is a collection of commonly used webhooks.
### Supported Notification Channels

- [x] Google Chat
- [x] Slack
- [X] Telegram
- [X] Private
- [ ] Discord
- [ ] Sendgrid
- [ ] Ses
- [ ] Mailgun


## Usage

```console
$ npm install --save @hhaluk/pigeon
```


```js
import * as Pigeon from '@hhaluk/pigeon'

function foo () {
  Pigeon.NotifyGoogleChat(body) // pigeon can obtain url from environment. See Api Reference Table.
  Pigeon.NotifySlackChannel(body, url) // alternatively url can be injected directly.
}
```
---

### Api Reference Table
|  Method | Arguments  | Environment Variable  |
|---|---|---|
| NotifyGoogleChat  | body, url   | GOOGLE_CHAT_API_URL
| NotifySlackChannel  | body, url   | SLACK_API_URL
| NotifyTelegramChannel  | body, url   | TELEGRAM_API_URL
| NotifyPrivateChannel  | body, url   | PRIVATE_API_URL

### Api References

- [Google Chat Webhook](https://developers.google.com/chat/api/guides/message-formats)
- [Slack Webhook](https://api.slack.com/messaging/webhooks#:~:text=Incoming%20Webhooks%20are%20a%20simple,make%20the%20messages%20stand%20out)
- [Telegram Webhook](https://core.telegram.org/bots)
