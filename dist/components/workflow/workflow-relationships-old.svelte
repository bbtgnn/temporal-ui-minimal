<script>import { page } from '$app/stores';
import { fetchAllChildWorkflows } from '../../services/workflow-service';
import { fullEventHistory } from '../../stores/events';
import { namespaces } from '../../stores/namespaces';
import { workflowRun } from '../../stores/workflow-run';
import { getWorkflowRelationships } from '../../utilities/get-workflow-relationships';
import ChildWorkflowsTable from './child-workflows-table.svelte';
import FirstPreviousNextWorkflowTable from './first-previous-next-workflow-table.svelte';
import LiveChildWorkflowsTable from './live-child-workflows-table.svelte';
import ParentWorkflowTable from './parent-workflow-table.svelte';
import SchedulerTable from './scheduler-table.svelte';
$: ({ namespace, workflow: workflowId, run: runId } = $page.params);
$: ({ workflow } = $workflowRun);
$: workflowRelationships = getWorkflowRelationships(workflow, $fullEventHistory, $namespaces);
$: ({
    hasChildren,
    first,
    parent,
    parentNamespaceName,
    children,
    next,
    previous,
    scheduleId,
} = workflowRelationships);
</script>

<div class="flex flex-col gap-4 px-2 py-4 md:px-4 lg:px-8">
  <div class="flex w-full flex-wrap gap-4">
    {#if scheduleId}
      <SchedulerTable {scheduleId} {namespace} />
    {/if}
    {#if parent}
      <ParentWorkflowTable {parent} {parentNamespaceName} {namespace} />
    {/if}
    {#if first || previous || next}
      <FirstPreviousNextWorkflowTable
        {first}
        {previous}
        {next}
        workflow={workflowId}
        {namespace}
      />
    {/if}
  </div>
  {#await fetchAllChildWorkflows(namespace, workflowId, runId) then liveChildren}
    {#if liveChildren.length}
      <LiveChildWorkflowsTable children={liveChildren} />
    {:else if hasChildren}
      <ChildWorkflowsTable
        {children}
        pendingChildren={$workflowRun.workflow.pendingChildren}
        namespace={$page.params.namespace}
      />
    {/if}
  {/await}
</div>
