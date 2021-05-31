import Queue, { QueueOptions } from 'bull';

import redisConfig from '../../config/redis';
import * as jobs from '../jobs';

const queues = Object.values(jobs).map(job => ({
  bull: new Queue(job.key, redisConfig as QueueOptions),
  name: job.key,
  handle: job.handle,
  //@ts-ignore
  options: job.options,
}));

export default {
  queues,
  add(name: string, data: any) {
    const queue = this.queues.find(queue => queue.name === name);

    if (!queue) return;

    return queue.bull.add(data, queue.options);
  },
  process() {
    return this.queues.forEach(queue => {
      queue.bull.process(queue.handle);

      queue.bull.on('failed', (job, err) => {
        // Sentry.captureException(err); // Caso queira integrar com o Sentry
        //@ts-ignore
        console.log('Job failed', queue.key, job.data);
        console.log('Error', err);
      });
    })
  }
};