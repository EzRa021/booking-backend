const Booking = require('../models/Booking');
const moment = require('moment');

const getRevenue = async (req, res) => {
    try {
        // Calculate total revenue
        const totalRevenue = await Booking.aggregate([
            { $group: { _id: null, total: { $sum: { $toDouble: "$total" } } } }
        ]);

        // Calculate revenue for the current week
        const startOfWeek = moment().startOf('isoWeek').toDate();
        const endOfWeek = moment().endOf('isoWeek').toDate();
        const weeklyRevenue = await Booking.aggregate([
            { $match: { createdAt: { $gte: startOfWeek, $lte: endOfWeek } } },
            { $group: { _id: null, total: { $sum: { $toDouble: "$total" } } } }
        ]);

        // Calculate revenue for the current month
        const startOfMonth = moment().startOf('month').toDate();
        const endOfMonth = moment().endOf('month').toDate();
        const monthlyRevenue = await Booking.aggregate([
            { $match: { createdAt: { $gte: startOfMonth, $lte: endOfMonth } } },
            { $group: { _id: null, total: { $sum: { $toDouble: "$total" } } } }
        ]);

        res.json({
            totalRevenue: totalRevenue[0]?.total || 0,
            weeklyRevenue: weeklyRevenue[0]?.total || 0,
            monthlyRevenue: monthlyRevenue[0]?.total || 0
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getRevenue };
