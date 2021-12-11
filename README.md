![Pigeon](./pigeon.png "Pigeon")
## Pigeon is a collection of commonly used webhooks.
## Supported Notification Channels

[x] Google Chat
[ ] Slack
[ ] Telegram
[ ] Discord
[ ] Sendgrid
[ ] Ses
[ ] Mailgun


## Usage

```console
$ npm install --save @hhaluk/pigeon
```
```js
import * as Pigeon from '@hhaluk/pigeon'

function foo () {
  Pigeon.NotifyGoogleChat(url, body)
}
```
---

|  Method | Arguments  |
|---|---|
| NotifyGoogleChat  | url, body   |

### Api References

[Google Chat Webhook](https://developers.google.com/chat/api/guides/message-formats)