import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export class TagHelper extends Vue {
  createTag() {
    const names = (window.prompt('请输入标签名')) as string

    if (names) {
      const name = names.replace(/\s*/g, "");
      if (name) {
        console.log(name);
        this.$store.commit('createTag', name)
      } else {
        window.alert('标签名不能为空')
      }
    }
  }
}

export default TagHelper;