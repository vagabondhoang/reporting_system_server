const Query = {
  info: () => `This is the API of a Reporting System`,
  divisions: (root, args, context, info) => {
    return context.db.query.divisions({}, info)
  }
};

module.exports = {
  Query
};