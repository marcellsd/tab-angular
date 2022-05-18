
import { Story, Meta } from '@storybook/angular/types-6-0';

import {TabItensComponent, TabItens} from 'src/app/components/tabItens.component';

export default {
  title: 'Tab/Itens',
  component: TabItensComponent,
 
  argTypes: {
    currentTab: { control: { type: 'range', min: 0, max: 5, step: 1 } }
  },
} as Meta;


const Template: Story<TabItensComponent> = (args: TabItensComponent) => ({
  props: args,
});

export const TabItens1 = Template.bind({});

TabItens1.args = {
  tabsData : [{
    tabName: 'Tb 1',
    tabText: 'Texto do primeiro tab'
  },
  {
    tabName: 'Tb 2',
    tabText: 'Texto do segundo tab'
  },
  {
    tabName: 'Tb 3',
    tabText: 'Texto do terceiro tab'
  },
  {
    tabName: 'Tb 4',
    tabText: 'Texto do quarto tab'
  }
  ],
    currentTab: 0,
};

export const TabItens2 = Template.bind({});
TabItens2.args = {
  tabsData : [{
    tabName: 'T 1',
    tabText: 'Texto do primeiro tab'
  },
  {
    tabName: 'T 2',
    tabText: 'Texto do segundo tab'
  },
  {
    tabName: 'T 3',
    tabText: 'Texto do terceiro tab'
  },
  {
    tabName: 'T 4',
    tabText: 'Texto do quarto tab'
  },
  {
    tabName: 'T 5',
    tabText: 'Texto do quinta tab'
  },
  ],
  currentTab: 2
};


