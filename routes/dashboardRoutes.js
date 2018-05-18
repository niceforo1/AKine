const requireLogin = require('../middlewares/requireLogin');

module.exports = (app, mongoose) => {
    const Patient = mongoose.model('patient');
    const Professional = mongoose.model('professional');
    const SocialInsurance = mongoose.model('socialInsurance');

    app.get('/api/dashboard/home', async (req, res) => {
        try {
            const patient = await Patient.count({});
            const professional = await Professional.count({});
            const pacientesPorObSoc = await Patient.aggregate([
                {
                    $match: {
                        'socialInsurance._id': { $ne: null }
                    }
                },
                {
                    $group: {
                        _id: '$socialInsurance._id',
                        count: { $sum: 1 }
                    }
                }
            ]);
            const arr = pacientesPorObSoc.map(async (item, index) => {
                const socIns = await SocialInsurance.findOne({ _id: item._id });
                return {
                    _id: socIns._id,
                    name: socIns.name,
                    value: item.count
                };
            });
            let result = {
                professionalCountTotal: professional,
                patientCountTotal: patient,
                patientInsurances: await Promise.all(arr)
            };
            res.send(result);
        } catch (err) {
            res.status(500).send(err);
        }
    });
};
