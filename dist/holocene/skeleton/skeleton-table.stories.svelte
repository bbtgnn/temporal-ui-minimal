<script context="module">import SkeletonTable from './table.svelte';
export const meta = {
    title: 'Skeleton Table',
    component: SkeletonTable,
    args: {
        rows: 10,
        columns: 4,
    },
    argTypes: {
        rows: { name: 'Rows', control: 'number' },
        columns: { name: 'Columns', control: 'number' },
    },
};
</script>

<script>import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  {@const columnWidths = Array.from(new Array(args.columns)).fill(
    100 / args.columns,
  )}
  <SkeletonTable {columnWidths} {...args}>
    <svelte:fragment slot="headers">
      {#each Array(args.columns) as _, index}
        <th>Heading {index + 1}</th>
      {/each}
    </svelte:fragment>
  </SkeletonTable>
</Template>

<Story name="Default" args={{ rows: 10, columns: 4 }} />
