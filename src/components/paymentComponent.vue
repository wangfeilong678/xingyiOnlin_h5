<template>
  <div>
    <van-tabs v-if="list.length>0">
      <van-tab v-for="item in list" :title="item.payName" >
        <van-cell-group v-if="item.payType==='2'">
          <van-cell title="姓名" :value="item.realName"/>
          <van-cell title="手机号" :value="item.userTel"/>
          <van-cell title="银行卡" :value="item.bankCode"/>
          <van-cell title="开户行" :value="item.bankDeposit"/>
        </van-cell-group>
        <img v-else :src="imgPrefixUrl+item.payUrl" alt="">
      </van-tab>
    </van-tabs>

    <van-empty v-else description="暂无支付方式，请添加支付方式">
      <van-button size="mini" round type="warning" class="bottom-button" @click="$router.push({path:'/layoutNoTab/gatheringManager'})">
        添加支付方式
      </van-button>
    </van-empty>
  </div>
</template>

<script>
import {payList} from "@/api/pay";

export default {
  name: "payment",
  components: {},
  props: {
    userId: {
      default: ''
    }
  },
  data() {
    return {
      list: []
    }
  },
  watch: {
    userId() {
      this.getList();
    }
  },
  methods:{
    getList(){
      payList({userId: this.userId ? this.userId : this.userInfo.userId}).then(data => {
        this.list = data.data;
      })
    }
  },
  mounted() {
    this.getList();
  }
}
</script>

<style scoped>
img {
  display: block;
  width: 100%;
}
</style>
