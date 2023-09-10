
const Dashboard = require("../models/dashboard.model");

module.exports = {
  Query: {
    async getPagDashboards(_, { page = 10, filterBy = null, sortBy = null }) {
      const perPage = 10;
      try {
        function compareByCompletedRevenue(a, b) {
          const revenueA = parseFloat(a.completedRevenue.replace("$", ""));
          const revenueB = parseFloat(b.completedRevenue.replace("$", ""));

          if (revenueA < revenueB) {
            return 1;
          }
          if (revenueA > revenueB) {
            return -1;
          }
          return 0;
        }
        paginatedItems = await Dashboard.find({ City: filterBy })
          .sort({ [sortBy]: -1 })
          .skip((page - 1) * perPage)
          .limit(perPage)
          .lean();
        return (paginatedItems = paginatedItems.sort(
          compareByCompletedRevenue
        ));
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
