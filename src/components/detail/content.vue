<!-- <template lang="html">
  <section class="content" v-if="view">
    <div class="panelbg">
        <v-recommend></v-recommend>
        <v-interaction></v-interaction>
    </div>
  </section>


</template>

<script>
import Recommend from '@/components/detail/recommend.vue';
import Interaction from './interaction.vue'
import {
  mapState
} from 'vuex'


export default {
    data () {
            return {
               
            }
        },
components: {
        'v-recommend':Recommend,
        'v-interaction':Interaction
    },
  computed: mapState({

    view: state => state.detail.productDatas.view,
    colSelected: state => state.detail.colSelected,
    sizeSelected: state => state.detail.sizeSelected,
    // 返回当前选择颜色的值(innerText)
    colText() {
      return this.view.content[this.colSelected].col
    },
    // 返回当前选择规格的值(innerText)
    sizeText() {
      return this.view.content[this.sizeSelected].size
    }

  }),
  methods: {

    //点击后把i赋值给colSelected,再通过判断决定是否添加选中样式 (active)
    colcontent(i) {
      this.$store.commit('CHANGE_COL_SELECTED', i);
    },
    sizecontent(i) {
      this.$store.commit('CHANGE_SIZE_SELECTED', i);
    }

  }
}
</script>

<style lang="less" scoped>
@import '../../assets/fz.less';

  .panelbg{
    background-color:@color-assist4;
    padding-top: .2rem;
  }
</style> -->
