![Pigeon](./pigeon.png "Pigeon")
## Pigeon is a collection of commonly used webhooks.
### Supported Notification Channels

- [x] Google Chat
- [x] Slack
- [X] Telegram
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

### Api References

[Google Chat Webhook](https://developers.google.com/chat/api/guides/message-formats)
