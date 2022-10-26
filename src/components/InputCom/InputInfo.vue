<template>
  <div class="input">
    <h3>开始时间：<input @blur="check" type="datetime-local" name="" id="start_time" value="" placeholder="例：10-20 09:00"/></h3>
    <h3>结束时间：<input @blur="check" type="datetime-local" name="" id="end_time" value="" placeholder="例：10-20 09:00"/></h3>
    <h3>请假原因：<input @blur="check" type="text" name="" id="reason" value="" /></h3>
    <h3>请假类型：<input @blur="check" type="text" name="" id="thing" value="" placeholder="事假/病假"/></h3>
    <h3>需要离校：<input @blur="check" type="text" name="" id="leaveschool" value="" placeholder="离校/不离校"/></h3>
    <h3>紧急联系人：<input @blur="check" type="text" name="" id="phone" value="" placeholder="电话号"/></h3>
    <h3>学校位置：<input @blur="check" type="text" name="" id="position" value="" placeholder="位置"/></h3>
    <h3>目的地：<input @blur="check" type="text" name="" id="destination" value="" placeholder="不出校不需要填写"/></h3>
    <h3>你的姓名：<input @blur="check" type="text" name="" id="name" value="" placeholder="你的名字"/></h3>
    <h3>导员姓名：<input @blur="check" type="text" name="" id="teacher_name" value="" placeholder="导员名字"/></h3>
    <h3>申请时间：<input @blur="check" type="datetime-local" name="" id="apply_time" value="" placeholder="例：10-20 09:00"/></h3>
    <h3>审批时间：<input @blur="check" type="datetime-local" name="" id="teacher_agree" value="" placeholder="比上个多一分钟"/></h3>
    <span style="color: rgba(255,0,0,0.56);font-size: 0.9rem;text-align: center">注：输入完成后请点击空白处后再点击按钮。</span>
    <div class="inputbutton">
      <router-link to="detail">
        <button @click="saveSet" :disabled="canClick">保存</button>
      </router-link>
    </div>


  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      canClick: true,

    }
  },
  methods: {
    check() {
      if (document.getElementById('start_time').value!==""&&document.getElementById('end_time').value!==""&&document.getElementById('reason').value&&document.getElementById('phone').value!==""&&document.getElementById('leaveschool').value!==""&&document.getElementById('name').value!==""&&document.getElementById('teacher_name').value!==""&&document.getElementById('apply_time').value!==""&&document.getElementById('teacher_agree').value&&document.getElementById('position').value!==""&&document.getElementById('thing').value!==""){
        this.canClick = false
      }
    },
    saveSet() {
      const set = {}
      let start_time = document.getElementById('start_time').value;
      let day = start_time.split("T");
      let name = start_time.split('-');
      let a;
      a = name[2].split("T")
      set.start_time = name[1] + '-' + a[0] + ' ' + day[1]

      let end_time = document.getElementById('end_time').value;
      let day1 = end_time.split("T");
      let name1 = end_time.split('-');
      let b;
      b = name1[2].split("T")
      set.end_time = name1[1] + '-' + b[0] + ' ' + day1[1]

      let cha = day[1].split(':')
      let zhe = day1[1].split(":")
      let add
      add = zhe[0] - cha[0]
      set.phasetime = add

      set.reason = document.getElementById('reason').value

      set.phone = document.getElementById('phone').value

      set.destination = document.getElementById('destination').value

      set.yourname = document.getElementById('name').value

      set.leaveschool = document.getElementById('leaveschool').value

      set.teacher_name = document.getElementById('teacher_name').value
      set.position = document.getElementById('position').value

      let apply_time = document.getElementById('apply_time').value;
      let day2 = apply_time.split("T");
      let name2 = apply_time.split('-');
      let c;
      c = name2[2].split("T")
      set.apply_time = name2[1] + '-' + c[0] + ' ' + day2[1]
      let teacher_agree = document.getElementById('teacher_agree').value;
      let day3 = teacher_agree.split("T");
      let name3 = teacher_agree.split('-');
      let d;
      d = name2[2].split("T")
      set.teacher_agree = name3[1] + '-' + d[0] + ' ' + day3[1]


      set.thing = document.getElementById('thing').value
      console.log(set)
      this.$store.commit('setup', set)
    }
  }
}
</script>

<style scoped>
  input{
    border-radius: 19px;
    float: right;
    box-shadow:  20px 20px 60px #bebebe,
    -20px -20px 60px #ffffff;
  }
  .input{
    line-height: 40px;
    font-size: 0.9rem;
  }
  .input button{
    text-align: center;
    padding: 10px 20px;
    border-radius: 10px;
    background: #e0e0e0;
    box-shadow:  23px 23px 46px #bebebe,
    -23px -23px 46px #ffffff;
  }
  .inputbutton{
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
</style>
