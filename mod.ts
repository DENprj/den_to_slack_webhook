import { To } from 'https://raw.githubusercontent.com/aknow2/DEN/main/src/action_interfaces.ts';

export interface Request {
  text: string
  webhookUrl: string
}

const from: To<Request> = {
  request: {
    text: {
      type: 'string',
      description: 'Messages you want Slack to notify',
    },
    webhookUrl: {
      type: 'string',
      description: 'Get webhook url from https://api.slack.com/',
    },
  },
  async run(param){
    const { webhookUrl, text } = param
    const result = await fetch(webhookUrl, {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (result.status !== 200) {
      console.error(result.statusText)
    }
  }
}


export default from

