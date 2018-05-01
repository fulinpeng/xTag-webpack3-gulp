/*
 * @Author: fulp 
 * @Date: 2018-05-01 08:46:44 
 * @Last Modified by: fulp
 * @Last Modified time: 2018-05-01 20:17:33
 */

xtag.register("x-praise", {
  content:
    "<div id='thumbBox' class='thumbBox'></div>" +
    "<div class='red1'></div>" +
    "<div class='red2'>" +
    "<div class='red2-1'></div>" +
    "<div class='red2-2'></div>" +
    "<div class='red2-3'></div>" +
    "</div>" +
    "<span id='showNum' class='showNum'></span>",
  lifecycle: {
    created: function() {
      this.initnum();
    }
  },
  methods: {
    initnum() {
      const _this = this;
      axios
        .get("/index/initnum")
        .then(function(res) {
          console.log(res);
          _this.num = res.data.rows[0].num;
          document.getElementById("showNum").innerHTML =
            "赞：" + _this.num + "次";
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    addition() {
      var _this = this;
      axios
        .get("/index/addition")
        .then(function(res) {
          console.log(res.data);
          document.getElementById("showNum").innerHTML =
            "赞：" + _this.num + "次";
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    increase() {
      this.num++;
      this.addition();
    }
  },
  events: {
    click: function(e) {
      console.log(e.target);
      this.increase();
    }
  }
});
