<template>
  <Layout classPrefix="layout">

    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>

    <Tabs :data-source="recordTypeList" :value.sync="record.type"/>

    <FormItem field-name="备注"
              placeholder="在这里输入备注"
              :value="record.notes"
              @update:value="onUpdateNotes"/>
    <Tags @update:value="onUpdateTags" />

  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';

  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Tabs from '@/components/Tabs.vue';
  import {Component} from 'vue-property-decorator';
  import recordTypeList from '@/constans/recordTypeList';

  window.localStorage.setItem('version', '0.0.1');

  @Component({

    components: {Tags, FormItem, Tabs, NumberPad},

  })
  export default class Money extends Vue {

    recordTypeList = recordTypeList;

    get recordList() {
      return this.$store.state.recordList;
    }

    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0

    };

    created() {
      this.$store.commit('fetchRecords');
    }

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }


    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);


    }

    saveRecord() {
      if(!this.record.tags||this.record.tags.length===0){
       return  window.alert('请至少选择一个标签')
      }
      this.$store.commit('createRecord', this.record);
      this.record.notes=''
    }
  }

</script>

<style lang="scss" scoped>
  ::v-deep .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>