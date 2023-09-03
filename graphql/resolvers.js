const Boat = require("../models/boats.model");
const Guide = require("../models/guides.model");

module.exports = {
  Query: {
    async boat(_, { id }) {
      try {
        const boat = await Boat.findById(id);
        return boat;
      } catch (err) {
        throw new Error(err);
      }
    },
    async guide(_, { id }) {
      try {
        const guide = await Guide.findById(id);
        return guide;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getBoats() {
      try {
        const boats = await Boat.find();
        return boats;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getGuides() {
      try {
        const guides = await Guide.find();
        return guides;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async addBoat(_, { guideName, boatName, swimlaneID }) {
      const newBoat = new Boat({
        guideName,
        boatName,
        swimlaneID
      });
console.log(newBoat)
      const boat = await newBoat.save();
      return {
        ...boat._doc,
        id: boat._id,
      };
    },
    async addGuide(_, { guideName }) {
      const newGuide = new Guide({
        guideName,
      });

      const guide = await newGuide.save();
      return {
        ...guide._doc,
        id: guide._id,
      };
    },
    async deleteBoat(_, { id }) {
      try {
        const wasDeleted = (await Boat.deleteOne(id)).deletedCount;
        return wasDeleted;
      } catch (err) {
        throw new Error(err);
      }
    },
    async deleteGuide(_, { id }) {
      try {
        const wasDeleted = (await Guide.deleteOne({ _id: ID })).deletedCount;
        return wasDeleted;
      } catch (err) {
        throw new Error(err);
      }
    },
    async editBoat(_, { ID, args }) {
      try {
        const boat = await Boat.findByIdAndUpdate(ID, args);
        if (boat) {
          return true;
        } else {
          return false;
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
