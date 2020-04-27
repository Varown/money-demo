<template>
  <div>
    <ul class="types">
      <li :class="type==='-'&&'selected'"
          @click="selectType('-')">支出
      </li>
      <li :class="type==='+'&&'selected'"
          @click="selectType('+')">收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">

  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  @Component
  export default class Types extends Vue {
    type = '-';
    @Prop(Number) xxx: number | undefined;
    //引用外部数据必须用@，否则会被认为是data
    //Number是告诉vue xxx运行时它的数据类型
    //number | undefined是告ts  xxx 编辑时的数据类型
   //xxx 属性名


    selectType(type: string) {
      if (type !== '-' && type !== '+') {
        throw new Error('type is unknown');
      }
      this.type = type;
    }
    mounted(){
      if(this.xxx===undefined){
        console.log("类型不对")
      }else {
        console.log(this.xxx)
      }
  }


  }

  /*export default {
    name: 'Types',
    data(){
      return{
        type:'-'//"-"号代表支出，“+”号代表收入
      }
    },
    methods:{
      selectType(type){
        if(type!=='-'&&type!=='+'){
        throw new Error('type is unknown')
        }
        this.type=type
      }

    }
  };*/
</script>

<style lang="scss" scoped>
  .types {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;

    > li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }
</style>