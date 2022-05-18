
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import {TabItensComponent} from 'src/app/components/tabItens.component';
import {TabComponent} from 'src/app/components/tab.component';
import { TabItens2 } from './tabItens.stories';

export default {
  title: 'Tab/Tab',
  component: TabItensComponent,

  decorators: [
    moduleMetadata({
      declarations: [TabItensComponent],
      imports: [CommonModule],
    }),
  ],

  argTypes: {
    currentTab: { control: { type: 'range', min: 0, max: 4, step: 1 } }
  },
} as Meta;


const Template: Story<TabComponent> = (args: TabComponent) => ({
  props: args,
});

export const Tab1 = Template.bind({});

Tab1.args = {
tabsData : [{
  tabName: 'tab 1',
  tabText: 'Texto do primeiro tab'
},
{
  tabName: 'tab 2',
  tabText: 'Texto do segundo tab'
},
{
  tabName: 'tab 3',
  tabText: 'Texto do terceiro tab'
},
{
  tabName: 'tab 4',
  tabText: 'Texto do quarto tab'
},
],
currentTab: 0
};

export const Tab2 = Template.bind({});

Tab2.args = {
tabsData : [{
  tabName: 'TT 1',
  tabText: 'Texto do primeiro tab'
},
{
  tabName: 'TT 2',
  tabText: 'Texto do segundo tab'
},
{
  tabName: 'TT 3',
  tabText: 'Texto do terceiro tab'
},
{
  tabName: 'TT 4',
  tabText: 'Texto do quarto tab'
},
{
  tabName: 'TT 5',
  tabText: 'Texto do quinta tab'
},
],
currentTab: 1
};

