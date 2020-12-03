import * as pulumi from '@pulumi/pulumi';
import * as k8s from '@pulumi/kubernetes';

export interface ServingArgs {
  name: string;
  namespace: string;
  containers: Containers[];
}

export interface Containers {
  image: string;
  env: Object[];
}

export class Instance extends pulumi.CustomResource {
  constructor(args: ServingArgs, opts?: pulumi.ResourceOptions) {
    super('serving:serving:Instance', args.name, args, opts);

    new k8s.apiextensions.CustomResource(`${args.name}-cr`, {
      apiVersion: 'serving.knative.dev/v1',
      kind: 'Service',
      metadata: {
        name: args.name,
        namespace: args.namespace,
      },
      spec: {
        template: {
          spec: {
            containers: args.containers,
          },
        },
      },
    });
  }
}
