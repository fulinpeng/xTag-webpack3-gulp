/**
 * Created by flp on 2018/4/12.
 */
import indexModel from "../models/indexModel";
const indexController = {
  index() {
    return async (ctx, next) => {
      ctx.body = await ctx.render("index.html", {
        title: "首页-index"
      });
    };
  },
  initnum() {
    return async (ctx, next) => {
      const indexMode_ = new indexModel();
      ctx.body = await indexMode_.initnum();
    };
  },
  addition() {
    return async (ctx, next) => {
      const indexMode_ = new indexModel();
      ctx.body = await indexMode_.addition();
    };
  },
  list() {
    return async (ctx, next) => {
      const indexMode_ = new indexModel();
      ctx.body = await indexMode_.list();
    };
  }
};

export default indexController;
