import type { APIRouteParameters, APIRoutePath, BatchAPIRoutePath, BatchRouteParameters, NamespaceAPIRoutePath, NamespaceRouteParameters, NexusAPIRoutePath, NexusRouteParameters, ParameterlessAPIRoutePath, ScheduleAPIRoutePath, ScheduleListRouteParameters, ScheduleRouteParameters, SchedulesAPIRoutePath, SearchAttributesRouteParameters, SearchAttributesRoutePath, TaskQueueAPIRoutePath, TaskQueueRouteParameters, WorkerAPIRoutePath, WorkerDeploymentAPIRoutePath, WorkerDeploymentListRouteParameters, WorkerDeploymentRouteParameters, WorkerDeploymentsAPIRoutePath, WorkerDeploymentVersionAPIRoutePath, WorkerDeploymentVersionRouteParameters, WorkflowActivitiesAPIRoutePath, WorkflowActivitiesRouteParameters, WorkflowAPIRoutePath, WorkflowListRouteParameters, WorkflowQueryAPIRoutePath, WorkflowQueryRouteParameters, WorkflowRouteParameters, WorkflowsAPIRoutePath, WorkflowSignalAPIRoutePath, WorkflowSignalRouteParameters, WorkflowUpdateAPIRoutePath, WorkflowUpdateRouteParameters } from '../types/api';
export declare const base: (namespace?: string) => string;
export declare function pathForApi(route: APIRoutePath, parameters?: Partial<APIRouteParameters>, shouldEncode?: boolean): string;
export declare function routeForApi(route: WorkflowsAPIRoutePath, parameters: WorkflowListRouteParameters, shouldEncode?: boolean): string;
export declare function routeForApi(route: NamespaceAPIRoutePath, parameters: NamespaceRouteParameters, shouldEncode?: boolean): string;
export declare function routeForApi(route: SchedulesAPIRoutePath, parameters: ScheduleListRouteParameters): string;
export declare function routeForApi(route: WorkerAPIRoutePath, parameters: NamespaceRouteParameters, shouldEncode?: boolean): string;
export declare function routeForApi(route: WorkflowAPIRoutePath, parameters: WorkflowRouteParameters, shouldEncode?: boolean): string;
export declare function routeForApi(route: WorkflowSignalAPIRoutePath, parameters: WorkflowSignalRouteParameters, shouldEncode?: boolean): string;
export declare function routeForApi(route: WorkflowUpdateAPIRoutePath, parameters: WorkflowUpdateRouteParameters, shouldEncode?: boolean): string;
export declare function routeForApi(route: WorkflowQueryAPIRoutePath, parameters: WorkflowQueryRouteParameters, shouldEncode?: boolean): string;
export declare function routeForApi(route: WorkflowActivitiesAPIRoutePath, parameters: WorkflowActivitiesRouteParameters, shouldEncode?: boolean): string;
export declare function routeForApi(route: BatchAPIRoutePath, parameters: BatchRouteParameters, shouldEncode?: boolean): string;
export declare function routeForApi(route: ScheduleAPIRoutePath, parameters: ScheduleRouteParameters, shouldEncode?: boolean): string;
export declare function routeForApi(route: TaskQueueAPIRoutePath, parameters: TaskQueueRouteParameters, shouldEncode?: boolean): string;
export declare function routeForApi(route: SearchAttributesRoutePath, parameters: SearchAttributesRouteParameters): string;
export declare function routeForApi(route: NexusAPIRoutePath, parameters: NexusRouteParameters, shouldEncode?: boolean): string;
export declare function routeForApi(route: WorkerDeploymentsAPIRoutePath, parameters: WorkerDeploymentListRouteParameters, shouldEncode?: boolean): string;
export declare function routeForApi(route: WorkerDeploymentAPIRoutePath, parameters: WorkerDeploymentRouteParameters, shouldEncode?: boolean): string;
export declare function routeForApi(route: WorkerDeploymentVersionAPIRoutePath, parameters: WorkerDeploymentVersionRouteParameters, shouldEncode?: boolean): string;
export declare function routeForApi(route: ParameterlessAPIRoutePath): string;
