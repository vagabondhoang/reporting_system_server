const division = {
  async createDivision(parent, { name, description }, ctx, info) {
    return ctx.db.mutation.createDivision({
      data: { name, description },
      info
    })
  },

  async updateDivision(parent, { id, name, description }, ctx, info) {
    return ctx.db.mutation.updateDivision({
      where: { id },
      data: { name, description },
      info
    })
  },

  async deleteDivision(parent, { id }, ctx, info) {
    return ctx.db.mutation.deleteDivision({ where: { id }})
  }

};

module.exports = {
  division
};

