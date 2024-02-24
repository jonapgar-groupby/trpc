import type { AnyClientTypes } from '@trpc/server/unstable-core-do-not-import';
import type { NonEmptyArray } from '../internals/types';
import type { HTTPLinkBaseOptions } from './internals/httpUtils';
import type { HTTPHeaders, Operation } from './types';

export type HTTPBatchLinkOptions<TRoot extends AnyClientTypes> =
  HTTPLinkBaseOptions<TRoot> & {
    maxURLLength?: number;
    /**
     * split - will split a batch into multiple requests if the URL is too long
     *
     * post - will send the batch as a POST request
     *
     * default: split
     */
    maxURLMode?: 'split' | 'post';
    /**
     * Headers to be set on outgoing requests or a callback that of said headers
     * @link http://trpc.io/docs/client/headers
     */
    headers?:
      | HTTPHeaders
      | ((opts: {
          opList: NonEmptyArray<Operation>;
        }) => HTTPHeaders | Promise<HTTPHeaders>);
  };
