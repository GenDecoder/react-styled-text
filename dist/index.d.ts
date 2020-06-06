import * as React from 'react';
import { TSampleProps } from './types';

declare class Sample extends React.Component<TSampleProps, any> {}

declare module 'r-t-n-b' {}

export * from './types';

export default Sample;

/**
 * As a good practice those "types", "interfaces", "etc" for inner usage
 * should be inside another ".d.ts" file (not the index.d.ts). In case you need to expose them
 * it is always possible to use the "export * from 'some d.ts file'" as it's done here
 * REMOVE THIS WHOLE COMMENT BLOCK WHEN PUBLISHING YOUR PACKAGE
 */
