<script context="module">import { Story, Template } from '@storybook/addon-svelte-csf';
import Label from './label.svelte';
export const meta = {
    title: 'Label',
    component: Label,
    args: {
        label: 'Label',
        disabled: false,
        hidden: false,
        required: true,
    },
    argTypes: {
        label: { name: 'Label', control: 'text' },
        disabled: { name: 'Disabled', control: 'boolean' },
        required: { name: 'Required', control: 'boolean' },
        hidden: {
            name: 'Label Hidden',
            control: 'boolean',
            table: { category: 'Accessibility' },
        },
    },
};
</script>

<Template let:args>
  <Label {...args} />
</Template>

<Story name="Default" />
