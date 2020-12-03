import * as k8s from '@pulumi/kubernetes';

// import * as serving from './serving';

const appLabels = { app: 'nginx' };

const deployment = new k8s.apps.v1.Deployment('nginx', {
  spec: {
    selector: { matchLabels: appLabels },
    replicas: 1,
    template: {
      metadata: { labels: appLabels },
      spec: { containers: [{ name: 'nginx', image: 'nginx' }] },
    },
  },
});

// new serving.Instance();

export const name = deployment.metadata.name;
