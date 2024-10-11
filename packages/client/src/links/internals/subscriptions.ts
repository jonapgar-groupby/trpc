interface ConnectionStateBase {
  type: 'state';
  data?: never;
}

export interface ConnectionIdleState extends ConnectionStateBase {
  state: 'idle';
  error: null;
}

export interface ConnectionConnectingState<TError> extends ConnectionStateBase {
  state: 'connecting';
  error: TError | null;
}

export interface ConnectionPendingState extends ConnectionStateBase {
  state: 'pending';
  error: null;
}

export type TRPCConnectionState<TError> =
  | ConnectionIdleState
  | ConnectionConnectingState<TError>
  | ConnectionPendingState;
