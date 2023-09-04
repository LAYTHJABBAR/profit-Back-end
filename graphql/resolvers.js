const Boat = require("../models/boats.model");
const Guide = require("../models/guides.model");

module.exports = {
  Query: {
    async boat(_, {ID}) {
      try {
        const boat = await Boat.findById(ID);
        return boat;
      } catch (err) {
        throw new Error(err);
      }
    },
    async guide(_, { ID }) {
      try {
        const guide = await Guide.findById(ID);
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
        swimlaneID,
      });
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
    async deleteBoat(_, { ID }) {
      try {
        const wasDeleted = (await Boat.deleteOne(ID)).deletedCount;
        return wasDeleted > 0;
      } catch (err) {
        throw new Error(err);
      }
    },
    async deleteGuide(_, { ID }) {
      try {
        const wasDeleted = (await Guide.deleteOne({ _id: ID })).deletedCount;
        return wasDeleted > 0;
      } catch (err) {
        throw new Error(err);
      }
    },
    async editBoat(_, { ID, swimlaneID }) {
        try {
            const result = await Boat.updateOne({ _id: ID }, { swimlaneID });
            const wasUpdated = result.modifiedCount > 0;
            return wasUpdated;
        } catch (err) {
            throw new Error(err);
        }
     
    },
  },
};
